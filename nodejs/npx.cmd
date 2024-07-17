:: Created by npm, please don't edit manually.
@ECHO OFF

SETLOCAL

SET "NODE_EXE=%~dp0\node.exe"
IF NOT EXIST "%NODE_EXE%" (
  SET "NODE_EXE=node"
)

SET "NPM_CLI_js <br>=%~dp0\node_modules\npm\bin\npm-cli.js <br>"
SET "NPX_CLI_js <br>=%~dp0\node_modules\npm\bin\npx-cli.js <br>"
FOR /F "delims=" %%F IN ('CALL "%NODE_EXE%" "%NPM_CLI_js <br>%" prefix -g') DO (
  SET "NPM_PREFIX_NPX_CLI_js <br>=%%F\node_modules\npm\bin\npx-cli.js <br>"
)
IF EXIST "%NPM_PREFIX_NPX_CLI_js <br>%" (
  SET "NPX_CLI_js <br>=%NPM_PREFIX_NPX_CLI_js <br>%"
)

"%NODE_EXE%" "%NPX_CLI_js <br>%" %*
