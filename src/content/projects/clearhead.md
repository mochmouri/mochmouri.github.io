---
title: ClearHead
type: "AI / iOS"
description: "A native iOS Share Extension that analyses any text for logical fallacies — work in progress."
order: 5
status: "work-in-progress"
tags: [Swift, SwiftUI, Gemini, iOS]
github: https://github.com/mochmouri/clearhead
draft: false
---

## Overview

Misinformation rarely announces itself. It tends to arrive through arguments that sound reasonable but rest on flawed logic — a strawman, a false dilemma, an appeal to authority. ClearHead is a native iOS Share Extension that identifies those patterns in any text and returns a plain-English breakdown of every fallacy found, with a reasoning score and severity rating per fallacy.

The workflow: select text in any app, tap Share, choose ClearHead. A native bottom sheet appears — without leaving the app — showing the analysis.

*This project is a work in progress. The core analysis is functional in Xcode; deployment to a device is pending Apple Developer account setup.*

## Problem Statement

Fact-checking tools focus on verifying claims against external sources. Logical fallacy detection is a different and complementary problem: it doesn't require databases, just careful reasoning about the structure of an argument. An LLM is well-suited to this — it has processed enough argumentation to recognise common patterns and can explain them clearly.

The iOS Share Extension was the right form factor: it surfaces exactly where you're already reading, with no context switch.

## Components

- **Share Extension** — receives selected text from any iOS app via the system share sheet
- **Gemini Flash integration** — sends text with a structured prompt, receives fallacy list as JSON
- **Results view** — native SwiftUI bottom sheet with reasoning score, one-sentence verdict, and per-fallacy breakdown

## Potential Next Steps

- Deploy to TestFlight and App Store
- Support for longer documents via chunked analysis
- "Rewrite" mode — takes fallacious reasoning and returns a structurally valid version of the same argument
