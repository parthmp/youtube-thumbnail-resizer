# YouTube Thumbnail Grid Controller

A lightweight Chrome extension that lets you control how many video thumbnails appear per row on YouTube.

## Overview

YouTube limits the number of thumbnails displayed per row, often leaving large empty margins on larger screens. This extension allows you to adjust the grid density using a simple slider so you can make better use of your screen space.

The change is applied instantly without reloading the page.

## Features

- Adjust the number of thumbnails per row
- Simple popup slider interface
- Works instantly without page refresh
- Supports YouTube’s dynamic navigation
- Lightweight and fast
- No tracking or external requests

## How It Works

The extension injects a small stylesheet that overrides YouTube’s internal layout variable:
```--ytd-rich-grid-items-per-row```


This controls how many video cards are rendered in each row.

## Installation

### Load as an unpacked extension

1. Clone or download this repository.
```git clone https://github.com/yourusername/youtube-thumbnail-grid-controller.git```

2. Open Chrome extensions page:
```chrome://extensions```

3. Enable **Developer Mode** (top right).

4. Click **Load unpacked**.

5. Select the project folder.

The extension will now appear in your browser toolbar.

## Usage

1. Open YouTube.
2. Click the extension icon in the Chrome toolbar.
3. Adjust the slider to choose how many thumbnails appear per row.

The layout updates instantly.

## Privacy

This extension:

- does **not collect any user data**
- does **not send network requests**
- stores only the layout setting locally using Chrome storage

## License

MIT License