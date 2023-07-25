# chiko-deals

## Pre-requisites
- npm
- [google maps API key](https://developers.google.com/maps)

## Installation
1. clone project with `git clone <project url>`
1. Run `npm install` in root directory
1. Create a file called `.env.local` in ./client and [add the API key](#google-api-key-setup)
1. Change dir to ./server with `cd server` and run `npm run dev`
1. Open a new terminal and cd to ./client with `cd client` and run `npm start`

### Google API key setup
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<INSERT_API_KEY>
```