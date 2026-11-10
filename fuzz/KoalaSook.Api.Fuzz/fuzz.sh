#!/bin/sh

set -e

dotnet build -c Release ../../KoalaSook.Api/KoalaSook.Api.csproj --output bin
sharpfuzz bin/KoalaSook.Api.dll
cp bin/KoalaSook.Api.dll .

dotnet build
mkdir -p Findings
AFL_SKIP_BIN_CHECK=1 afl-fuzz -i "Testcases/$1" -o "Findings/$1" -t 5000 ./bin/Debug/net10.0/KoalaSook.Api.Fuzz "$1"
