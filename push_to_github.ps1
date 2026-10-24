# Script untuk Upload Project ke GitHub
param(
    [string]$repoName = "uts-andi"
)

$username = "andialfath286-cmyk"
$remoteUrl = "https://github.com/$username/$repoName.git"

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  MENGHUBUNGKAN PROJECT KE GITHUB" -ForegroundColor Green
Write-Host "  Akun: $username" -ForegroundColor Yellow
Write-Host "  Repository: $repoName" -ForegroundColor Yellow
Write-Host "  Remote URL: $remoteUrl" -ForegroundColor Gray
Write-Host "==================================================" -ForegroundColor Cyan

# Set remote origin
git remote remove origin 2>$null
git remote add origin $remoteUrl

Write-Host "Mengirim file ke GitHub (git push)..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nBERHASIL! Project telah terunggah ke GitHub." -ForegroundColor Green
    Write-Host "Repositori: https://github.com/$username/$repoName" -ForegroundColor Yellow
    Write-Host "`nLangkah Mengaktifkan Website Online (GitHub Pages):" -ForegroundColor Cyan
    Write-Host "1. Buka: https://github.com/$username/$repoName/settings/pages" -ForegroundColor White
    Write-Host "2. Pada 'Branch', pilih 'main' dan klik 'Save'." -ForegroundColor White
    Write-Host "3. Website akan online di: https://$username.github.io/$repoName/" -ForegroundColor Green
} else {
    Write-Host "`nCatatan: Pastikan Anda sudah membuat repository '$repoName' di https://github.com/new terlebih dahulu." -ForegroundColor Yellow
}
