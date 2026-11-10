#!/bin/bash

## configure the following for a manual install of a specific version from the repo

# wget https://repo.koalasook.org/releases/server/ubuntu/versions/koalasook-ffmpeg/6.0.1-1/koalasook-ffmpeg6_6.0.1-1-jammy_amd64.deb -O ffmpeg.deb

# sudo apt update
# sudo apt install -f ./ffmpeg.deb -y
# rm ffmpeg.deb


## Add the koalasook repo
sudo apt install curl gnupg -y
sudo apt-get install software-properties-common -y
sudo add-apt-repository universe -y

sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://repo.koalasook.org/koalasook_team.gpg.key | sudo gpg --batch --yes --dearmor -o /etc/apt/keyrings/koalasook.gpg
export VERSION_OS="$( awk -F'=' '/^ID=/{ print $NF }' /etc/os-release )"
export VERSION_CODENAME="$( awk -F'=' '/^VERSION_CODENAME=/{ print $NF }' /etc/os-release )"
export DPKG_ARCHITECTURE="$( dpkg --print-architecture )"
cat <<EOF | sudo tee /etc/apt/sources.list.d/koalasook.sources
Types: deb
URIs: https://repo.koalasook.org/${VERSION_OS}
Suites: ${VERSION_CODENAME}
Components: main
Architectures: ${DPKG_ARCHITECTURE}
Signed-By: /etc/apt/keyrings/koalasook.gpg
EOF

sudo apt update -y
sudo apt install koalasook-ffmpeg7 -y
