# Requirements: Tamil Ear-Piercing Invitation

**Defined:** 2026-11-21
**Core Value:** Guests can open and explore a beautiful, culturally resonant invitation while all real family, event, venue, and RSVP details remain accurate and usable.

## v1 Requirements

### Opening Cover

- [ ] **OPEN-01**: On mobile, the visitor sees `public/img.webp`; on desktop, the visitor sees `public/w.webp`, with each image centered and undistorted.
- [ ] **OPEN-02**: The artwork's Tap to Open area is a real, accessible button positioned over the printed control; no additional hand-click icon is added.
- [ ] **OPEN-03**: A user gesture plays the existing temple-bell sound and starts a polished gold-sparkle cover-opening transition before revealing the existing invitation content.
- [ ] **OPEN-04**: Scrolling is prevented while the cover is active and restored after opening; reduced-motion preferences are respected.

### Visual Design

- [ ] **VIS-01**: The existing invitation sections use a cohesive warm-ivory, deep-maroon, temple-gold, saffron, floral-yellow, and natural-green theme.
- [ ] **VIS-02**: Existing headings, information cards, separators, backgrounds, buttons, forms, modals, navigation, and footer use the invitation's refined traditional visual language.
- [ ] **VIS-03**: Petal, sparkle, reveal, and hover motion remains subtle and avoids unnecessary performance work.

### Responsive Design and Preservation

- [ ] **RESP-01**: The opening and all existing sections work at phone, tablet, laptop, and desktop sizes without horizontal overflow, distortion, or overlapping text.
- [ ] **PRES-01**: Existing Tamil and English copy, family and event data, gallery, countdown, map, calendar, audio, WhatsApp RSVP/share, and all current routes and integrations remain functional.
- [ ] **PRES-02**: The project builds successfully after the presentation-layer changes.

## v2 Requirements

None identified. New product features are outside this redesign.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Changing ceremony or family data and copy | The existing invitation values are authoritative and must be preserved. |
| New video gallery or new sample content | No such feature currently exists; redesign only existing functionality. |
| New APIs, routes, backend, or database behavior | The request is limited to presentation and opening experience. |
| Editing or generating image assets | The supplied opening artwork must remain unchanged. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| OPEN-01 | Phase 1 | Pending |
| OPEN-02 | Phase 1 | Pending |
| OPEN-03 | Phase 1 | Pending |
| OPEN-04 | Phase 1 | Pending |
| VIS-01 | Phase 2 | Pending |
| VIS-02 | Phase 2 | Pending |
| VIS-03 | Phase 2 | Pending |
| RESP-01 | Phase 3 | Pending |
| PRES-01 | Phase 3 | Pending |
| PRES-02 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 10 total
- Mapped to phases: 10
- Unmapped: 0

---
*Requirements defined: 2026-11-21*
*Last updated: 2026-11-21 after initial definition*
