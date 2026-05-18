Add-Type -AssemblyName System.Drawing

$src = "C:\Users\Lenovo\Documents\Day Score App\assets\marketing-source.png"
$desktop = [Environment]::GetFolderPath("Desktop")

function Fill-Image {
  param([string]$SrcPath, [int]$W, [int]$H, [string]$OutPath)

  $bmp = New-Object System.Drawing.Bitmap($W, $H, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $bmp.SetResolution(72, 72)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.Clear([System.Drawing.Color]::FromArgb(255, 8, 12, 38))

  $srcImg = [System.Drawing.Image]::FromFile($SrcPath)
  $sw = $srcImg.Width
  $sh = $srcImg.Height
  $targetAspect = $W / $H
  $srcAspect = $sw / $sh

  if ($srcAspect -gt $targetAspect) {
    $newH = $H
    $newW = [int]($sw * ($H / $sh))
  } else {
    $newW = $W
    $newH = [int]($sh * ($W / $sw))
  }

  $x = [int](($W - $newW) / 2)
  $y = [int](($H - $newH) / 2)
  $g.DrawImage($srcImg, $x, $y, $newW, $newH)
  $srcImg.Dispose()
  $g.Dispose()

  if (Test-Path $OutPath) {
    try { Remove-Item $OutPath -Force -ErrorAction Stop } catch { Write-Host "Could not remove old $OutPath. Close any preview windows." }
  }

  try {
    $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $c = New-Object System.Drawing.Bitmap($OutPath)
    $mb = [math]::Round((Get-Item $OutPath).Length / 1MB, 2)
    Write-Host "OK $([System.IO.Path]::GetFileName($OutPath)) | $($c.Width)x$($c.Height) | $mb MB"
    $c.Dispose()
  } catch {
    Write-Host "FAILED to save $OutPath"
    Write-Host $_.Exception.Message
  } finally {
    $bmp.Dispose()
  }
}

Fill-Image -SrcPath $src -W 1284 -H 2778 -OutPath (Join-Path $desktop "iphone-marketing.png")
Fill-Image -SrcPath $src -W 2048 -H 2732 -OutPath (Join-Path $desktop "ipad-marketing.png")
