---
title: SceneSkipper
type: "AI / Browser Extension"
description: "A Firefox extension that automatically detects and skips explicit scenes on streaming sites using real-time AI subtitle analysis."
order: 2
tags: [Gemini, Firefox, JavaScript]
github: https://github.com/mochmouri/sceneskipper
draft: false
---

## Overview

Watching a film with family, or in a context where explicit content is unwanted, usually means either researching the film beforehand or reaching for the remote at the wrong moment. SceneSkipper handles it automatically — it runs in the background while you watch and skips flagged scenes without intervention.

Supported sites: Netflix, Amazon Prime Video, Disney+, Max, Hulu, Peacock.

## Problem Statement

Services like DoesTheDogDie flag what a film contains, but no publicly available API provides precise scene-level timestamps. The data doesn't exist in a queryable, structured form — which is the core constraint this project works around.

## How It Works

As a video plays, the extension intercepts the subtitle data being loaded by the streaming site. It maintains a sliding window of subtitle lines around the current playback position and sends that context to Gemini, which classifies whether the scene should be skipped. If the response is positive, the extension seeks the video forward past the segment.

Calls are spaced to stay within API rate limits while keeping the skip responsive.

## Components

- **Subtitle interceptor** — hooks into the streaming site's subtitle mechanism via content script
- **Context window** — rolling buffer of subtitle lines around the current timestamp
- **Gemini classifier** — receives subtitle context, returns skip/no-skip decision
- **Skip executor** — triggers a video seek on a positive classification
- **Popup** — toggle, sensitivity setting, and skip activity monitor

## Learnings

The main limitation is the absence of a structured scene-timestamp database. Every decision is made in real time from subtitle text alone, which means accuracy depends entirely on how descriptive the subtitles are. Some are detailed; many are sparse. This causes occasional over-skipping or under-skipping.

A community-contributed timestamp database — keyed by film ID, independent of subtitles — would make decisions far more precise and reduce reliance on real-time AI inference. That infrastructure doesn't exist yet as an open resource.

## Potential Next Steps

- Chrome and Edge support
- User-configurable sensitivity levels
- Open-source timestamp database as a ground-truth layer, reducing API calls to edge cases
- Safari extension for Apple TV+ support
