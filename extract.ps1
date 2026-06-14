New-Item -ItemType Directory -Force -Path 'assets\css', 'assets\js' | Out-Null
$content = Get-Content 'index.html' -Encoding UTF8 -Raw

$styleMatch = [regex]::Match($content, '(?s)<style>(.*?)</style>')
if ($styleMatch.Success) {
    Set-Content -Path 'assets\css\style.css' -Value $styleMatch.Groups[1].Value.Trim() -Encoding UTF8
}

$scriptMatch = [regex]::Match($content, '(?s)<script>(.*?)</script>')
if ($scriptMatch.Success) {
    Set-Content -Path 'assets\js\app.js' -Value $scriptMatch.Groups[1].Value.Trim() -Encoding UTF8
}

if (Test-Path 'icons.js') {
    Move-Item 'icons.js' 'assets\js\icons.js' -Force
}

$newContent = $content -replace '(?s)<style>.*?</style>', '<link rel="stylesheet" href="assets/css/style.css">'
$newContent = $newContent -replace '(?s)<script>.*?</script>', '<script src="assets/js/app.js"></script>'
$newContent = $newContent -replace 'icons\.js\?v=\d+', 'assets/js/icons.js'

Set-Content 'index.html' -Value $newContent -Encoding UTF8
Write-Host 'Extraction Done'
