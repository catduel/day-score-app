Add-Type -AssemblyName System.Drawing

$assetsDir = Join-Path $PSScriptRoot "..\assets"
$assetsDir = (Resolve-Path $assetsDir).Path
$logoSrc = Join-Path $assetsDir "logo-perfect.png"
$outDir = Join-Path $assetsDir "screenshots"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

function Save-Screenshot {
  param(
    [int]$Width,
    [int]$Height,
    [string]$Title,
    [string]$Subtitle,
    [string]$OutPath,
    [string]$AccentScheme = "sunset"
  )

  $bmp = New-Object System.Drawing.Bitmap($Width, $Height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $bmp.SetResolution(72, 72)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

  $rect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)

  switch ($AccentScheme) {
    "sunset" {
      $colors = @(
        [System.Drawing.Color]::FromArgb(255, 8, 12, 38),
        [System.Drawing.Color]::FromArgb(255, 32, 18, 72),
        [System.Drawing.Color]::FromArgb(255, 100, 38, 110),
        [System.Drawing.Color]::FromArgb(255, 160, 60, 110),
        [System.Drawing.Color]::FromArgb(255, 28, 14, 56)
      )
      $positions = @(0.0, 0.32, 0.55, 0.78, 1.0)
    }
    "ocean" {
      $colors = @(
        [System.Drawing.Color]::FromArgb(255, 6, 10, 32),
        [System.Drawing.Color]::FromArgb(255, 14, 28, 78),
        [System.Drawing.Color]::FromArgb(255, 46, 50, 130),
        [System.Drawing.Color]::FromArgb(255, 24, 16, 68)
      )
      $positions = @(0.0, 0.4, 0.7, 1.0)
    }
    "amber" {
      $colors = @(
        [System.Drawing.Color]::FromArgb(255, 14, 10, 38),
        [System.Drawing.Color]::FromArgb(255, 60, 24, 80),
        [System.Drawing.Color]::FromArgb(255, 158, 76, 90),
        [System.Drawing.Color]::FromArgb(255, 188, 110, 70),
        [System.Drawing.Color]::FromArgb(255, 32, 18, 56)
      )
      $positions = @(0.0, 0.32, 0.6, 0.82, 1.0)
    }
  }

  $cb = New-Object System.Drawing.Drawing2D.ColorBlend($colors.Count)
  $cb.Colors = $colors
  $cb.Positions = $positions
  $br = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $colors[0], $colors[-1], 90)
  $br.InterpolationColors = $cb
  $g.FillRectangle($br, $rect)
  $br.Dispose()

  $rand = New-Object System.Random(($Title.Length * 31 + $AccentScheme.Length))
  $starCount = [int]($Width * $Height / 50000)
  for ($i = 0; $i -lt $starCount; $i += 1) {
    $sx = $rand.Next(0, $Width)
    $sy = $rand.Next(0, [int]($Height * 0.55))
    $sr = ($rand.Next(0, 100) / 100.0) * ($Width / 360) + 1
    $alpha = $rand.Next(80, 220)
    $sb = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($alpha, 255, 245, 200))
    $g.FillEllipse($sb, ($sx - $sr), ($sy - $sr), ($sr * 2), ($sr * 2))
    $sb.Dispose()
  }

  $titleSize = [int]($Width * 0.075)
  $subSize = [int]($Width * 0.034)

  $titleFont = New-Object System.Drawing.Font("Segoe UI", $titleSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $subFont = New-Object System.Drawing.Font("Segoe UI", $subSize, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

  $titleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 248, 236))
  $subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 220, 230, 255))

  $titleY = [int]($Height * 0.075)
  $sf = New-Object System.Drawing.StringFormat
  $sf.Alignment = [System.Drawing.StringAlignment]::Center
  $sf.LineAlignment = [System.Drawing.StringAlignment]::Near
  $sf.FormatFlags = [System.Drawing.StringFormatFlags]::LineLimit

  $titleRect = New-Object System.Drawing.RectangleF([float]($Width * 0.06), [float]$titleY, [float]($Width * 0.88), [float]($Height * 0.18))
  $g.DrawString($Title, $titleFont, $titleBrush, $titleRect, $sf)

  $logo = [System.Drawing.Image]::FromFile($logoSrc)
  $logoSize = [int]($Width * 0.62)
  $logoX = [int](($Width - $logoSize) / 2)
  $logoY = [int]($Height * 0.34)

  $haloRect = New-Object System.Drawing.Rectangle(($logoX - 60), ($logoY - 60), ($logoSize + 120), ($logoSize + 120))
  $haloPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $haloPath.AddEllipse($haloRect)
  $haloBrush = New-Object System.Drawing.Drawing2D.PathGradientBrush($haloPath)
  $haloBrush.CenterColor = [System.Drawing.Color]::FromArgb(140, 255, 178, 102)
  $haloBrush.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 255, 178, 102))
  $g.FillRectangle($haloBrush, $rect)
  $haloBrush.Dispose()
  $haloPath.Dispose()

  $g.DrawImage($logo, $logoX, $logoY, $logoSize, $logoSize)
  $logo.Dispose()

  $subY = [int]($Height * 0.78)
  $subRect = New-Object System.Drawing.RectangleF([float]($Width * 0.08), [float]$subY, [float]($Width * 0.84), [float]($Height * 0.16))
  $g.DrawString($Subtitle, $subFont, $subBrush, $subRect, $sf)

  $titleFont.Dispose()
  $subFont.Dispose()
  $titleBrush.Dispose()
  $subBrush.Dispose()
  $g.Dispose()
  $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()

  $check = New-Object System.Drawing.Bitmap($OutPath)
  Write-Host "Saved: $([System.IO.Path]::GetFileName($OutPath)) | $($check.Width)x$($check.Height) | $($check.PixelFormat) | $((Get-Item $OutPath).Length) bytes"
  $check.Dispose()
}

# iPhone 6.5" / 6.7" (1284 x 2778)
$iPhoneSet = @(
  @{ Title = "Score your day.`nSee your trend."; Subtitle = "Give your day 0-10. Watch your weekly average grow."; Scheme = "sunset" },
  @{ Title = "7 days free.`n`$2.99 lifetime."; Subtitle = "One-time payment. No subscription. No auto-renewal."; Scheme = "amber" },
  @{ Title = "Private. Invite only.`nNo ads ever."; Subtitle = "Share scores only inside the friend groups you create."; Scheme = "ocean" }
)

for ($i = 0; $i -lt $iPhoneSet.Count; $i += 1) {
  $s = $iPhoneSet[$i]
  $name = "iphone-{0}.png" -f ($i + 1)
  $out = Join-Path $outDir $name
  Save-Screenshot -Width 1284 -Height 2778 -Title $s.Title -Subtitle $s.Subtitle -OutPath $out -AccentScheme $s.Scheme
}

# iPad 12.9" / 13" (2048 x 2732)
$iPadSet = @(
  @{ Title = "Score your day.`nSee your trend."; Subtitle = "Give your day 0-10. Watch your weekly average grow over time."; Scheme = "sunset" },
  @{ Title = "7 days free.`n`$2.99 lifetime."; Subtitle = "One-time payment. No subscription. No auto-renewal."; Scheme = "amber" },
  @{ Title = "Private. Invite only.`nNo ads ever."; Subtitle = "Share scores only inside the friend groups you create."; Scheme = "ocean" }
)

for ($i = 0; $i -lt $iPadSet.Count; $i += 1) {
  $s = $iPadSet[$i]
  $name = "ipad-{0}.png" -f ($i + 1)
  $out = Join-Path $outDir $name
  Save-Screenshot -Width 2048 -Height 2732 -Title $s.Title -Subtitle $s.Subtitle -OutPath $out -AccentScheme $s.Scheme
}

Write-Host "All 6 screenshots written to $outDir"
