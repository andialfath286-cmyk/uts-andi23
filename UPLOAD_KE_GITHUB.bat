@echo off
title Upload Project ke GitHub - Andi Creative Lab
color 0b
echo ========================================================
echo    MENGHUBUNGKAN DAN MENGUPLOAD PROJECT KE GITHUB
echo ========================================================
echo.
cd /d "C:\UTS Andi"
git remote remove origin >nul 2>&1
git remote add origin https://github.com/andialfath286-cmyk/uts-andi.git
echo Mengunggah file ke repository uts-andi...
echo.
git push -u origin main
echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo  [OK] BERHASIL TERUPLOAD KE GITHUB!
    echo ========================================================
    echo.
    echo Sekarang membuka halaman GitHub Pages di browser...
    start chrome "https://github.com/andialfath286-cmyk/uts-andi/settings/pages"
) else (
    echo.
    echo [!] Terjadi kendala saat push.
    echo Pastikan Anda sudah menekan tombol hijau 'Create repository' di tab GitHub.
)
echo.
pause
