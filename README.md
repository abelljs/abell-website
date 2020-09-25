# abelljs.org


**Source code of https://abelljs.org**


<p align="left"><a href="https://npmjs.org/package/abell"><img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/abelljs/abell/main?style=for-the-badge&labelColor=black&logo=npm&label=abell&color=darkred"></a>&nbsp; <a href="https://discord.gg/ndsVpRG"><img src="https://img.shields.io/badge/discord-join%20server-738ADB?style=for-the-badge&logo=discord&logoColor=738ADB&labelColor=black"/></a> &nbsp; <a href="https://twitter.com/abellland"><img alt="Twitter profile badge of @abellland" src="https://img.shields.io/badge/follow-@AbellLand-1DA1F2?style=for-the-badge&logo=twitter&logoColor=1DA1F2&labelColor=black"/></a> </p>


## Contributing

This website is built with Abell as well, after following steps from [Setting up locally](#setting-up-locally) section, you can edit the files which you want to contribute in and send pull request to the `main` branch of this repository.

### Setting up locally

- Fork this repository
```
git clone https://github.com/:your-github-username/abell-website
cd abell-website
npm install
npm run dev
```

### GitHub Token

This is only needed if you want to contribute to `/issue-finder` page. 
1. Go to https://github.com/settings/tokens/new.
2. Select `public_repo` scope amd click Generate Token button.
3. Create `.env` file in project root with
```
GITHUB_TOKEN=<Your Personal Access Token>
```

Run dev server `npm run dev`

---

Thank you and do let us know what you think on [Twitter @AbellLand](https://twitter.com/abellland)