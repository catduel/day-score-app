Add-Type -AssemblyName System.Drawing

$assetsDir = (Resolve-Path (Join-Path $PSScriptRoot "..\assets")).Path
$sourceDir = Join-Path $assetsDir "screenshot-source"
$outDir = Join-Path $assetsDir "screenshots"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$sources = @(
  (Join-Path $sourceDir "IMG_6817.jpeg"),
  (Join-Path $sourceDir "IMG_6818.jpeg"),
  (Join-Path $sourceDir "IMG_6819.jpeg")
)

function Fit-Screenshot {
  param([string]$SrcPath, [int]$W, [int]$H, [string]$OutPath)

  $bmp = New-Object System.Drawing.Bitmap($W, $H, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $bmp.SetResolution(72, 72)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

  $rect = New-Object System.Drawing.Rectangle(0, 0, $W, $H)
  $colors = @(
    [System.Drawing.Color]::FromArgb(255, 8, 12, 38),
    [System.Drawing.Color]::FromArgb(255, 14, 20, 52),
    [System.Drawing.Color]::FromArgb(255, 8, 12, 38)
  )
  $cb = New-Object System.Drawing.Drawing2D.ColorBlend(3)
  $cb.Colors = $colors
  $cb.Positions = @(0.0, 0.5, 1.0)
  $br = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $colors[0], $colors[2], 90)
  $br.InterpolationColors = $cb
  $g.FillRectangle($br, $rect)
  $br.Dispose()

  $src = [System.Drawing.Image]::FromFile($SrcPath)
  $sw = $src.Width
  $sh = $src.Height
  $targetAspect = $W / $H
  $srcAspect = $sw / $sh

  if ($srcAspect -gt $targetAspect) {
    $newW = $W
    $newH = [int]($sh * ($W / $sw))
  } else {
    $newH = $H
    $newW = [int]($sw * ($H / $sh))
  }
  $x = [int](($W - $newW) / 2)
  $y = [int](($H - $newH) / 2)

  $shadow = New-Object System.Drawing.Rectangle(($x - 8), ($y - 8), ($newW + 16), ($newH + 16))
  $shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(120, 0, 0, 0))
  $g.FillRectangle($shadowBrush, $shadow)
  $shadowBrush.Dispose()

  $g.DrawImage($src, $x, $y, $newW, $newH)
  $src.Dispose()
  $g.Dispose()

  $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()

  $check = New-Object System.Drawing.Bitmap($OutPath)
  Write-Host "Saved: $([System.IO.Path]::GetFileName($OutPath)) | $($check.Width)x$($check.Height) | $($check.PixelFormat) | $((Get-Item $OutPath).Length) bytes"
  $check.Dispose()
}

# Clear stale generated screenshots
Get-ChildItem $outDir -Filter "iphone-*.png" | Remove-Item -Force
Get-ChildItem $outDir -Filter "ipad-*.png" | Remove-Item -Force

# iPhone 6.5"/6.7" (1284 x 2778) - 3 screenshots
for ($i = 0; $i -lt $sources.Count; $i += 1) {
  $out = Join-Path $outDir ("iphone-{0}.png" -f ($i + 1))
  Fit-Screenshot -SrcPath $sources[$i] -W 1284 -H 2778 -OutPath $out
}

# iPad 12.9"/13" (2048 x 2732) - 3 screenshots
for ($i = 0; $i -lt $sources.Count; $i += 1) {
  $out = Join-Path $outDir ("ipad-{0}.png" -f ($i + 1))
  Fit-Screenshot -SrcPath $sources[$i] -W 2048 -H 2732 -OutPath $out
}

Write-Host "All 6 screenshots written to $outDir"
