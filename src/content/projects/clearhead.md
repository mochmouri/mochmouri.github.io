---
title: ClearHead
type: "AI / iOS"
description: "A native iOS app and Share Extension that analyses any text for logical fallacies, with manual input, analysis history, and context-aware suggestions."
order: 5
status: "complete"
tags: [Swift, SwiftUI, Gemini, iOS]
github: https://github.com/mochmouri/clearhead
draft: false
---

## Overview

Misinformation rarely announces itself. It tends to arrive through arguments that sound reasonable but rest on flawed logic — a strawman, a false dilemma, an appeal to authority. ClearHead is a native iOS app that identifies those patterns in any text and returns a plain-English breakdown of every fallacy found, with a reasoning score, severity rating, and a verbatim quote of the offending passage.

There are two ways to use it: paste or type text directly in the app, or select text anywhere (WhatsApp, Safari, Notes) and share it via the iOS Share Sheet. Both paths produce the same structured analysis; the difference is in the suggestion ClearHead appends — for text you wrote it offers how to fix or strengthen the argument, for text you received it offers a thoughtful reply direction.

Past analyses are saved and browsable in the app with full detail view.

## Problem Statement

Fact-checking tools verify claims against external sources. Logical fallacy detection is a different and complementary problem: it doesn't require databases, just careful reasoning about argument structure. An LLM is well-suited to this — it has processed enough argumentation to recognise common patterns and can explain them clearly.

The context-aware suggestion (fix vs. reply) came from realising the two use cases have different goals. If you wrote the text, you want to improve it. If someone else wrote it, you want to respond to it.

## Components

- **Main app** — SwiftUI settings screen (API key entry), manual text input with Analyse button, and a history list (last 20 analyses) with full detail view
- **Share Extension** — receives selected text from any iOS app via the system share sheet; renders results in a native bottom sheet without leaving the source app
- **Shared layer** — `GeminiService.swift` and `Models.swift` compiled into both targets; handles the Gemini API call, JSON parsing, and history persistence
- **Gemini 2.5 Flash** — structured JSON prompt returns score (0–100), verdict, per-fallacy breakdown (name, severity, explanation, verbatim quote), and a context-aware suggestion

## Technical Notes

The main app and Share Extension run in separate iOS sandboxes and cannot share storage without a paid Apple Developer account ($99/year) to enable App Groups. As a result, the API key must be entered once in each context, and history is stored separately per target. The codebase has the App Groups wiring in place — it is commented out pending the account upgrade.
