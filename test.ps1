Add-Type -AssemblyName System.Drawing
$img1 = [System.Drawing.Image]::FromFile('C:\Durgesh\quebix\assets\quebix-footer.png')
$img2 = [System.Drawing.Image]::FromFile('C:\Durgesh\quebix\assets\quebix-footer-logo.png')
Write-Output "Original: $($img1.Width)x$($img1.Height)"
Write-Output "New: $($img2.Width)x$($img2.Height)"
