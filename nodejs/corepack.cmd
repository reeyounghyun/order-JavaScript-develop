@SETLOCAL
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\corepack\dist\corepack.js <br>" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.js <br>;=;%
  node  "%~dp0\node_modules\corepack\dist\corepack.js <br>" %*
)
