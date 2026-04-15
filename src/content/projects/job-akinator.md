---
title: Job Akinator
type: "Data / Education"
description: "A career-matching quiz for students. Answer 23 questions about your interests and strengths — get your top 3 profession matches, ranked by similarity score."
order: 4
tags: [React, Supabase, Cosine Similarity, Vite]
github: https://github.com/mochmouri/jobakinator
demo: https://mochmouri.github.io/jobakinator/
draft: false
---

## Overview

Most career quizzes produce vague personality types. Job Akinator works differently: it builds a numeric profile of your interests and self-assessed strengths, then compares that profile against ~75 professions using cosine similarity to find your three best matches — each with a percentage score.

If none of the results fit, you can submit a description of the missing career. It gets saved to a shared database, with the intent that repeated similar submissions surface gaps in the profession pool.

## Problem Statement

Generic guidance tools tend to produce generic results. The goal was a matching mechanism precise enough to distinguish between, say, someone who is analytically strong but socially cautious versus the reverse — even if both might fall under the same broad archetype in a cruder system.

## How It Works

Each profession is represented as a vector across 10 trait dimensions: analytical, creative, social, technical, physical, entrepreneurial, structured, humanitarian, outdoors, and leadership.

The quiz runs in two parts: 13 multiple-choice interest questions (each answer shifts specific trait scores) followed by 10 self-confidence questions rated on a three-point scale (one trait each). The two sets of scores are normalised and blended — interests weighted at 65%, self-assessed confidence at 35% — to produce a final user profile vector.

Cosine similarity then ranks all professions by how closely their vectors align with the user's. Using cosine similarity rather than a raw score sum means the match reflects the *shape* of your profile, not just absolute levels — someone with a moderate but proportionally consistent profile can still score well against the right profession.

## Components

- **Quiz engine** — linear state machine managing two sequential question sections with animated transitions
- **Scoring module** — builds and normalises the user vector; runs cosine similarity across all professions
- **Results view** — top 3 matches with percentage bars and expandable profession detail
- **Submission flow** — 3-step form for suggesting a missing career, with a 10-trait slider interface and Supabase insert
- **Data layer** — Supabase as the live profession source, local JSON fallback for offline use

## Learnings

Cosine similarity has one notable edge case here: users who answer neutrally across the board produce a flat profile that matches almost anything at moderate confidence. A minimum engagement threshold or skew-detection step would reduce noise in those results.

The crowd-sourced submission feature raises an interesting open problem: at what threshold does a cluster of similar user-submitted descriptions become evidence of a genuinely missing career?

## Potential Next Steps

- Automated clustering of submissions to surface missing professions
- Per-match "why" explanation — showing which traits drove the score
- Expand the profession database beyond 75 entries
- Connect to job listing data to go from "what fits me" to "where can I apply"
