# Build and Deploy Google + Lens Clone: Next.js 14, React, Uploadthing, RapidApi,Tailwind

![Google + Lens Clone Thumbnail (3)](https://github.com/BensonRaro/Nextjs-14-Google-Lens-Clone/blob/main/public/GoogleClone.jpg?raw=true)

This is a repository for Build and Deploy Google + Lens Clone: Next.js 14, React, Uploadthing, RapidApi,Tailwind

[VIDEO TUTORIAL](https://youtu.be/FJqUhxlTsK4)

Key Features:

- 🔍 Google search (All Section).
- 🖼️ Images search.
- 🎥 Videos search.
- 📰 News Search.
- 📤 Images upload using uploadthing.
- 🌏 Search image using Google Lens Api.
- 📤🔗Search image by uploading images and retrieving image url.
- 🔗 Search image using your own image url.
- </> Display description using HTML-React-Parser.
- ⏯️ Play vidoes using React-Player.
- 🔮 Web theme using Next-themes
- 🎨 Beautiful design.
- ⚡ Blazing fast application.
- 📄 SSR (Server-Side Rendering).
- 🗺️ Grouped routes & layouts.
- 🚀 Deployment.

### Prerequisites

**Node version 18.17 or later**

### Cloning the repository

```shell
git clone https://github.com/BensonRaro/Nextjs-14-Google-Lens-Clone
```

### Fill in API keys

**DuckDuck**

```js
 headers: {
     // you api key here
     "X-RapidAPI-Key": "",
     "X-RapidAPI-Host": "duckduckgo10.p.rapidapi.com",
   }
```

**Google Lens API**

```js
  headers: {
      // fill in API key her
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "google-lens-image-search1.p.rapidapi.com",
    }
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

// or fill in Rapid api keys here
GogleLensKey=
DuckDuckKey=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
