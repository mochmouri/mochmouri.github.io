---
title: Travel Planner
type: "AI / Prompt Engineering / Travel"
description: "A day-by-day trip planner built around Muslim travel needs (halal food, prayer times and areas, and walkable routes) all in one place."
order: 1
tags: [Gemini, React, Leaflet, APIs]
github: https://github.com/mochmouri/travelplanner
demo: https://mochmouri.github.io/travelplanner/
draft: false
---

## Overview

Planning a trip as a Muslim traveller involves more than finding interesting places. You need to know whether there's halal food near your route, when prayer times fall that day, and whether a long afternoon at a museum will push Asr into your travel window. Standard travel apps don't account for any of that.

Travel Planner puts those needs first. Enter a destination and the number of days. The app generates a day-by-day itinerary, maps each day's stops into a walkable Google Maps route, pulls prayer times for your travel dates, and surfaces halal restaurants nearby. Before you start planning, it gives you a halal-friendliness brief on the destination: food availability, dress norms, practical tips.

![Travel Planner landing page](/projects/travel-planner-landing-page.png)

## Problem Statement

Muslim travellers typically juggle three or four separate tools: a general travel app, a halal food finder, a prayer times app, and a maps tool — then manually stitch everything together. That friction compounds across a multi-day trip. No single tool treated the integrated experience as a design goal.

## How It Works

Gemini 2.5 Flash generates a structured daily itinerary from a single prompt, returning attraction names and coordinates. Those are plotted on an interactive map using React-Leaflet, and each day's stops are ordered to minimise walking distance.

Prayer times are fetched from the Aladhan public API for the exact destination and date. Halal restaurant suggestions come from a secondary Gemini query per day, constrained geographically to the day's stops.

Everything runs client-side, so no backend, no account, no server. The user supplies their own Gemini API key in the browser.

![API key setup screen](/projects/travel-planner-setup.png)

## Components

- **Itinerary generator** — Gemini prompt returning structured JSON of daily stops with coordinates; configurable trip start date
- **Route map** — React-Leaflet with CartoDB Dark Matter tiles; stops as numbered markers; Google Maps export per day
- **Prayer times panel** — Aladhan API, timezone-aware, displayed per day alongside the route; configurable calculation method
- **Prayer spaces** — mosques and musallas surfaced alongside each day's route
- **Halal guide** — destination brief on food availability, dress norms, and practical tips
- **Restaurant suggestions** — Gemini-sourced, filtered to each day's geographic area

![Generated itinerary with map and prayer times](/projects/travel-planner-result.png)

## Learnings

Getting consistent structured output from an LLM—valid coordinates, the right number of stops, no hallucinated place names—required more prompt iteration than expected. Prompt structure matters more than prompt length: explicit output schemas reduce errors more reliably than verbose instructions.

Timezone-aware date handling across the Aladhan API and the user's local time also needed careful treatment, particularly for trips spanning multiple regions.

## Potential Next Steps

- Export itinerary to Google Calendar
- Have the Gemini API key in the backend so users no longer need to generate one
- Filter accommodation by halal certification or proximity to mosques
- Support multi-city trips
- Offline fallback for prayer times
- Exportable PDF itinerary
