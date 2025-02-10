<div align="center">

# Firefox Startpage

[![Stars](https://img.shields.io/github/stars/rjshkhr/startpage?style=for-the-badge&logo=github&color=7E9AAB&logoColor=fcfcfc&labelColor=242B2D)](https://github.com/rjshkhr/startpage/stargazers) [![Forks](https://img.shields.io/github/forks/rjshkhr/startpage?style=for-the-badge&logo=github&color=96B088&logoColor=fcfcfc&labelColor=242B2D)](https://github.com/rjshkhr/startpage/network/members) [![Issues](https://img.shields.io/github/issues/rjshkhr/startpage?style=for-the-badge&logo=gitbook&color=BC8F7D&logoColor=fcfcfc&labelColor=242B2D)](https://github.com/rjshkhr/startpage/issues)

</div>

## Screenshots

![Screenshot](https://imgur.com/rbBWFDL.png)

## Installation

- Clone this repository by running the command: `git@github.com:rjshkhr/startpage.git`

- Open Mozilla Firefox and navigate to `Preferences > Home`.

- In the "Homepage and New Windows" section, add a custom URL. Use the following format but replace the file location with your own: `file:///home/yourusername/Projects/startpage/index.html`

- Locate the "newtab" folder and open `mozilla.cfg` in a text editor.

- In the `mozilla.cfg file`, find the `newTabURL` variable and replace the file location with the correct path to your `index.html` file.

- Copy the `mozilla.cfg` file to your Firefox installation directory, typically located at `/usr/lib/firefox/`. Note that for Firefox Nightly, the directory may be named `/usr/lib/firefox-trunk/`. In some cases, it could be `/usr/lib64/firefox/`.

- Copy the `local-settings.js` file to `defaults/pref`.
