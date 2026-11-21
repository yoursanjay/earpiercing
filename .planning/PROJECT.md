# Tamil Ear-Piercing Invitation

## What This Is

A bilingual Tamil and English digital invitation for the R. Krishwanth and R. Subhadra ear-piercing ceremony. The existing React website will become a premium, cinematic South Indian invitation experience, beginning with the supplied invitation artwork and continuing through the existing ceremony, family, venue, gallery, and RSVP content.

## Core Value

Guests can open and explore a beautiful, culturally resonant invitation while all real family, event, venue, and RSVP details remain accurate and usable.

## Business Context

- **Customer**: Rajadurai and Kalaiselvi; guests invited to the family ceremony.
- **Revenue model**: None; this is a family invitation.
- **Success metric**: Guests can open the invitation, find ceremony details, navigate to the venue, and RSVP without losing existing content or functionality.

## Requirements

### Validated

- ✓ The site presents Tamil and English content with a language toggle — existing.
- ✓ Ceremony schedule, date, time, venue, and family information are drawn from the existing invitation configuration — existing.
- ✓ Guests can use Google Maps directions, WhatsApp RSVP/share, calendar links, and the downloadable calendar file — existing.
- ✓ The site includes a countdown, photo gallery with filters and lightbox, and music controls — existing.

### Active

- [ ] Present the supplied mobile and desktop invitation artwork as the full-screen opening cover.
- [ ] Make the printed Tap to Open area a real accessible button and open the cover with bell, sparkle, and premium motion after user interaction.
- [ ] Carry the artwork's warm ivory, maroon, gold, floral, and traditional visual language through every existing section.
- [ ] Keep all layouts responsive and honor reduced-motion preferences.
- [ ] Preserve every existing invitation detail, route, integration, and interaction.
- [ ] Verify the production build and the opening and existing guest flows.

### Out of Scope

- Altering event, child, family, venue, or invitation copy — details are supplied and must remain unchanged.
- Replacing, editing, or generating images or adding new sample media — only the specified opening assets and existing site assets are in scope.
- Adding backend, database, route, RSVP, gallery, or video features — this is a presentation-layer redesign of existing functionality.
- Adding new dependencies unless implementation proves an existing dependency cannot meet the requirements.

## Context

- Existing application: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion.
- The app is a single-page invitation with existing components for the opening, ceremony, family, gallery, countdown, venue, RSVP, audio, and petals.
- Exact opening assets: `public/img.webp` (mobile) and `public/w.webp` (desktop).
- Existing family and event data lives in `src/config/invitationConfig.ts`; visual work must not edit those values.
- The working tree already contained uncommitted application edits and the two supplied image assets when this workflow began. Preserve those changes.

## Constraints

- **Assets**: Use `/img.webp` on mobile and `/w.webp` on desktop without modifying either file.
- **Compatibility**: Keep the current React/Vite architecture and existing integrations.
- **Accessibility**: The image hotspot is a keyboard-operable HTML button; audio begins only after a user gesture; reduced motion is respected.
- **Performance**: Avoid new dependencies and heavy always-running animation work.
- **Scope**: Change presentation and opening behavior only; preserve existing content and business logic.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use the supplied cover assets with transparent, positioned buttons | Preserves the artwork while making its printed CTA functional | — Pending |
| Use the existing React/Tailwind/Framer Motion stack | Avoids architectural changes and unnecessary dependencies | — Pending |
| Keep existing invitation content and integrations as the source of truth | The redesign must not change family details or guest workflows | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition**:
1. Move verified requirements to Validated and explain any that leave scope.
2. Record new requirements or decisions.
3. Confirm this project description and core value remain accurate.

**After each milestone**:
1. Review the project context and active requirements.
2. Reassess out-of-scope decisions and update context.

---
*Last updated: 2026-11-21 after project initialization*
