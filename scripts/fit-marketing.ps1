Add-Type -AssemblyName System.Drawing

$assetsDir = (Resolve-Path (Join-Path $PSScriptRoot "..\assets")).Path
$src = Join-Path $assetsDir "marketing-source.png"
$outDir = Join-Path $assetsDir "screenshots"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

if (-not (Test-Path $src)) {
  Write-Host "ERROR: Source not found at $src"
  Write-Host "Save the marketing image there first, then re-run."
  exit 1
}

function Fit-Image {
  param([string]$SrcPath, [int]$W, [int]$H, [string]$OutPath)

  $bmp = New-Object System.Drawing.Bitmap($W, $H, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $bmp.SetResolution(72, 72)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

  $rect = New-Object System.Drawing.Rectangle(0, 0, $W, $H)
  $cb = New-Object System.Drawing.Drawing2D.ColorBlend(3)
  $cb.Colors = @(
    [System.Drawing.Color]::FromArgb(255, 8, 12, 38),
    [System.Drawing.Color]::FromArgb(255, 14, 20, 52),
    [System.Drawing.Color]::FromArgb(255, 8, 12, 38)
  )
  $cb.Positions = @(0.0, 0.5, 1.0)
  $br = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, [System.Drawing.Color]::Black, [System.Drawing.Color]::Black, 90)
  $br.InterpolationColors = $cb
  $g.FillRectangle($br, $rect)
  $br.Dispose()

  $srcImg = [System.Drawing.Image]::FromFile($SrcPath)
  $sw = $srcImg.Width
  $sh = $srcImg.Height
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

  $g.DrawImage($srcImg, $x, $y, $newW, $newH)
  $srcImg.Dispose()
  $g.Dispose()

  $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()

  $check = New-Object System.Drawing.Bitmap($OutPath)
  Write-Host ("Saved {0} | {1}x{2} | {3} | {4} bytes" -f [System.IO.Path]::GetFileName($OutPath), $check.Width, $check.Height, $check.PixelFormat, (Get-Item $OutPath).Length)
  $check.Dispose()
}

Fit-Image -SrcPath $src -W 1284 -H 2778 -OutPath (Join-Path $outDir "iphone-marketing.png")
Fit-Image -SrcPath $src -W 2048 -H 2732 -OutPath (Join-Path $outDir "ipad-marketing.png")

Write-Host "Both marketing images ready in $outDir"
