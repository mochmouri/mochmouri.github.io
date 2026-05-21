---
title: Umrah Helper
type: "Productivity / iOS / Web"
description: "A bilingual step-by-step Umrah guide — available as a React web app and a native SwiftUI iOS app — with tawaf/sa'i counters, session history, and adhkar."
order: 6
status: "complete"
tags: [React, TypeScript, SwiftUI, iOS, Tailwind, Vite]
github: https://github.com/mochmouri/umrahhelper
demo: https://mochmouri.github.io/umrahhelper/
draft: false
---

## Overview

Umrah Helper is a step-by-step guide for performing Umrah, built for pilgrims who want something practical on their phone rather than a PDF or a bookmarked website. It exists as two independent apps — a React web app and a native SwiftUI iOS app — sharing the same content, feature set, and bilingual string system, but with no shared code between them.

Both versions cover the full Umrah sequence: pre-Miqat checklist, Miqat niyyah and Talbiyah, Tawaf (with per-lap counter and dhikr), Sa'i (with per-round counter and metrics), and Tahleel. A history tab records all completed sessions with lap and round breakdowns. A separate Adhkar tab provides a standalone collection of general remembrances.

The app toggles between English and Arabic at any time. Arabic mode switches the layout direction to RTL and renders all Arabic text in Amiri.

## Problem Statement

Most Umrah apps are either bloated with features that add noise during a focused act of worship, or they are static guides with no interactive elements. This one tries to do exactly what's needed — count your laps, surface the right dua at the right moment, record your times — and nothing else.

Building for both web and iOS was deliberate: the web app works immediately without installation (useful for someone who decides at the last minute), while the iOS app works entirely offline and integrates with the phone's haptic and font systems.

## Components

- **Guide tab** — five stages driven by a single `stage` integer; no router, no navigation stack. Swipe gestures and a back button handle transitions on iOS; keyboard arrow keys handle them on web
- **Tawaf counter** — lap-by-lap with elapsed time per lap, collapsible dhikr, Black Stone and Yemeni corner checkboxes
- **Sa'i counter** — round-by-round with green lights dua, metrics on completion
- **History tab** — saved sessions with lap/round breakdowns; shareable as plain text; deletable
- **Adhkar tab** — general remembrances with Arabic, transliteration, meaning, and citation
- **About tab** — anonymous creator note, Stripe donation link, Formspree contact form

## Technical Notes

Both platforms share the same design principle: all UI strings are defined in a single typed structure (`strings.ts` on web, `AppStrings.swift` on iOS), with no hardcoded copy in components. Dark mode on web uses CSS variables and `html.dark`; on iOS it uses `UIColor` adaptive initialisers and a `.preferredColorScheme` modifier at the root.

On iOS, haptic feedback fires on key actions: light impact when beginning Tawaf or Sa'i, medium on lap/round completion. The Amiri font is bundled as a `.ttf` in the app bundle and registered in `Info.plist`.

The About page links to a Stripe Payment Link for donations rather than using Apple's in-app purchase system, which avoids the 30% fee and the associated review process.
