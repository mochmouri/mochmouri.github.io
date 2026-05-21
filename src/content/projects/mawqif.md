---
title: Mawqif
type: "iOS / Utilities"
description: "A native iOS app that monitors Riyadh's 147 paid parking zones in the background and alerts you before the 15-minute grace period expires."
order: 7
status: "complete"
tags: [Swift, SwiftUI, CoreLocation, iOS]
github: https://github.com/mochmouri/mawqif
draft: false
---

## Overview

Mawqif (مواقف — "parking spots" in Arabic) is a native iOS app for Riyadh drivers. It runs silently in the background, detects when you enter one of the city's 147 paid parking zones, and sends local notifications at 5 and 10 minutes after you park — before the 15-minute grace period expires. Tap **I Paid** to cancel all reminders, or **Pay Now** to go straight to the payment portal.

The app has a single screen that reacts to five states: scanning for a zone, inside a zone with the grace period counting down (gold progress bar), unpaid after grace (pulsing red ring), paid (green checkmark), and free hours (nights, Fridays, public holidays).

## Problem Statement

Riyadh's parking system offers a 15-minute grace period before fines apply, but there is no built-in reminder. The official payment app does not track when you arrived — you have to remember yourself. The result is avoidable fines for people who park, get absorbed in whatever they're doing, and forget to pay within the window.

A background location app that fires a notification at minute 5 and minute 10 solves this completely without requiring any manual input.

## Components

- **LocationManager** — owns the `ParkingAppState` enum and all session logic; views only read state and call `markPaid()` / `stopSession()`
- **ZoneDatabase** — loads `parking_zones.json` (147 geocoded zones) at launch; detects entry via Haversine distance checks on every location update
- **NotificationManager** — schedules reminders at exact calendar times using `UNCalendarNotificationTrigger`; fires even if the app is killed by the OS
- **MainView** — single screen; all five app states rendered from the same view, no navigation stack
- **Strings.swift** — all UI text in English and Arabic as two static struct instances; language toggled via `@AppStorage`

## Technical Notes

**Haversine over CLCircularRegion:** iOS limits apps to 20 active geofences at a time, which cannot cover 147 zones. Instead, every incoming location update runs a Haversine distance check against all 147 zone centres. The CPU cost is negligible.

**UNCalendarNotificationTrigger over Timer:** notifications are scheduled at fixed calendar times (`startTime + 5 min`, `startTime + 10 min`) rather than in-process timers. This ensures they fire even after the OS suspends or kills the app, which is routine for background processes.

**Friday and holiday silence:** the app suppresses zone detection on Fridays (Saudi weekend) and on Saudi public holidays for 2025–2026 (Founding Day, National Day, approximate Eid dates — hardcoded to avoid any network dependency). Detection is also suppressed between midnight and 8 AM when parking is free.

No third-party dependencies. Pure SwiftUI + CoreLocation + UserNotifications.
