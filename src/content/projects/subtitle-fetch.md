---
title: Arabic Subtitle Overlay
type: "Tooling / Browser Extension"
description: "A Firefox extension that fetches Arabic subtitles from OpenSubtitles and overlays them directly on streaming video — built for family movie nights."
order: 3
tags: [Firefox, JavaScript, OpenSubtitles API]
github: https://github.com/mochmouri/subtitlefetch
draft: false
---

## Overview

My parents speak Arabic. Most streaming platforms don't offer Arabic subtitles — and when they do, quality is inconsistent. The workaround used to be: pause the film, open a new tab, search for the subtitle file, download it, figure out how to load it, hope it syncs. Ten minutes of friction before every family film.

This extension reduces that to a popup search and one click.

## Problem Statement

Arabic subtitles exist on OpenSubtitles for most mainstream films and shows, but there's no way to access them from inside a streaming site. You have to leave, find the file externally, and load it somehow — most streaming sites don't accept external subtitle files at all.

## How It Works

The extension adds a toolbar popup. You type the film title, pick from matched subtitle files, and the extension fetches and parses the SRT file. It injects the subtitles as a positioned overlay directly on top of the video element — no site modifications, no file uploads.

From that point, the overlay syncs to the video in real time: it advances with the timecodes, pauses when you pause, and re-syncs when you seek. It stays visible in fullscreen.

## Components

- **Popup** — search interface with language filter and file selection
- **OpenSubtitles integration** — search and SRT download via the background script (handles cross-origin restrictions)
- **SRT parser** — converts raw subtitle text into timed cue objects
- **Overlay renderer** — positions a `<div>` above the video; updates content at each cue boundary
- **Event sync** — listens to `play`, `pause`, `seeked`, and `timeupdate` on the video element

## Learnings

Streaming sites frequently update their player DOM, which can remove injected elements. Keeping the overlay alive required mutation observers to detect when the video element was replaced and reattach accordingly. Fullscreen positioning also needed site-specific CSS adjustments depending on how each platform structures its player container.

## Potential Next Steps

- Chrome support
- Auto-match subtitle file by reading the page title
- Subtitle styling controls (font size, position, colour)
- ASS/SSA format support for richer subtitle styling
