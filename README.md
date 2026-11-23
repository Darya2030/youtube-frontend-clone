# YouTube Frontend Clone

This is a frontend recreation of YouTube, based on an earlier HTML and CSS project I started. I kept the original video thumbnails, channel images and SVG icons, then updated the layout and added a few pages to make the project feel more complete.

## Pages

- **Home** — video recommendations and category filters
- **Watch** — video layout, channel information, description, comments and suggested videos
- **Search** — a simple search results page
- **Subscriptions** — subscribed channels and their latest videos
- **Shorts** — a Shorts-style browsing page
- **You** — library, history and playlists sections

## Built with

- HTML
- CSS
- Vanilla JavaScript

No framework or build tools are needed. The JavaScript is only used for small interface features such as the theme switch, sidebar, category filters and changing the sample video on the watch page.

## Run locally

Open `index.html` in a browser. For the best experience, you can also use the Live Server extension in Visual Studio Code.

## Project structure

```text
youtube-frontend-clone/
├── index.html
├── watch.html
├── search.html
├── subscriptions.html
├── shorts.html
├── library.html
├── css/
│   ├── general.css
│   ├── header.css
│   ├── sidebar.css
│   ├── video.css
│   └── watch.css
├── js/
│   └── main.js
├── assets/
│   ├── icons/
│   ├── thumbnails/
│   ├── channels/
│   └── images/
│       └── extra/
└── original-work/
    ├── original HTML files
    └── original CSS files
```

## Notes

This is a static frontend project. The video player is a visual demo and is not connected to YouTube's video service or an API. Search and page content use the sample data included with the project.
