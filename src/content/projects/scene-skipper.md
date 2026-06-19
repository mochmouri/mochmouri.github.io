---
title: SceneSkipper
type: "AI / Browser Extension"
description: "A Firefox extension that automatically detects and skips explicit scenes on streaming sites using real-time AI subtitle analysis."
order: 2
status: "work-in-progress"
tags: [Gemini, Firefox, JavaScript]
github: https://github.com/mochmouri/sceneskipper
thumbnail: /projects/scene-skip-thumbnail.png
draft: false
---

## Overview

Watching a film with family, or in a context where explicit content is unwanted, usually means either researching the film beforehand or reaching for the remote at the wrong moment. SceneSkipper handles it automatically; it runs in the background while you watch and skips flagged scenes without intervention.

Supported sites: Netflix, Amazon Prime Video, Disney+, Max, Hulu, Peacock.

## Problem Statement

Services like DoesTheDogDie flag what a film contains, but no publicly available API provides precise scene-level timestamps. The data doesn't exist in a queryable, structured form, which is the core constraint this project works around.

## How It Works

When a streaming site loads a subtitle (`.vtt`) file, the extension intercepts it via the background service worker. It sends the full subtitle text to Gemini 2.5 Flash-Lite in a single API call, which returns a list of flagged scenes with start/end timestamps, a confidence tier, and a plain-English reason for each. Results are cached by film title so the API is never called twice for the same film.

During playback, the content script monitors the video timestamp against the flagged list:
- **High confidence** — skips silently with no interruption
- **Medium / low confidence** — pauses playback and shows a banner with Skip and Continue watching options

## Components

- **Subtitle interceptor** — service worker intercepts the `.vtt` file loaded by the streaming site
- **Gemini analyser** — sends full subtitle text once; receives all flagged scenes as structured JSON (timestamp range, confidence, reason)
- **Skip executor** — content script monitors playback position and seeks past flagged scenes or surfaces a banner
- **History tab** — lists every film analysed with per-scene breakdown: timestamp range, confidence level, and reason
- **Settings tab** — configurable thresholds for auto-skip (high confidence) and banner display (medium/low)

![SceneSkipper subtitle analysis in action](/projects/scene-skip-analysis.png)

## Learnings

The main limitation is subtitle quality. The extension cannot analyse video directly — it works only when subtitles are enabled, and accuracy depends on how descriptive those subtitles are. Dialogue-heavy scenes are detected reliably; purely visual content with no audio cues in the subtitles may not be.

Some services use TTML/XML subtitle formats rather than VTT, which are not yet intercepted. Caching by film title also breaks if a title changes mid-session (e.g. episode page titles updating dynamically).

## Potential Next Steps

- Chrome and Edge support
- Open-source timestamp database as a ground-truth layer, reducing API calls to edge cases
- TTML/XML subtitle format support
- Safari extension for Apple TV+ support

