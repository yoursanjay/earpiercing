# Roadmap: Tamil Ear-Piercing Invitation

## Overview

First replace the current opening with the supplied responsive invitation artwork and a user-initiated cinematic reveal. Then carry the original artwork's light traditional palette through the existing invitation sections without changing their content or guest workflows. Finish by checking responsive layouts, accessibility preferences, existing interactions, and the production build.

## Phases

- [ ] **Phase 1: Invitation Cover** - Implement responsive artwork, accessible hotspot, and opening transition.
- [ ] **Phase 2: Invitation Visual System** - Apply the warm traditional theme across all existing sections and controls.
- [ ] **Phase 3: Responsive and Functional Validation** - Verify layouts, accessibility, integrations, and production build.

## Phase Details

### Phase 1: Invitation Cover
**Goal**: Visitors see the exact supplied cover artwork and can open the invitation through its printed Tap to Open area.
**Mode**: mvp
**Depends on**: Nothing (first phase)
**Requirements**: OPEN-01, OPEN-02, OPEN-03, OPEN-04
**Success Criteria**:
1. Mobile uses `/img.webp` and desktop uses `/w.webp`, centered without stretching or unnecessary cropping.
2. The printed CTA hit area is keyboard- and touch-operable as a real button.
3. A user gesture plays a subtle bell and opens the cover with a gold sparkle transition into the existing invitation.
4. Scroll remains locked before opening, then works normally; reduced-motion users get a reduced transition.
**Plans**: 1 plan

Plans:
- [ ] 01-01: Replace the current opening gate with image cover and cinematic transition

### Phase 2: Invitation Visual System
**Goal**: Every existing invitation section feels like part of the same premium South Indian ceremony artwork.
**Mode**: mvp
**Depends on**: Phase 1
**Requirements**: VIS-01, VIS-02, VIS-03
**Success Criteria**:
1. Existing sections use warm ivory surfaces, maroon headings, gold details, and restrained floral/temple accents.
2. Existing cards, navigation, controls, dialogs, and buttons remain readable and consistently styled.
3. Petal and reveal motion is subtle and is suppressed or reduced when requested.
**Plans**: 1 plan

Plans:
- [ ] 02-01: Restyle existing sections and shared visual primitives

### Phase 3: Responsive and Functional Validation
**Goal**: The redesigned invitation remains usable across device sizes and preserves all existing guest workflows.
**Mode**: mvp
**Depends on**: Phase 2
**Requirements**: RESP-01, PRES-01, PRES-02
**Success Criteria**:
1. Opening and sections fit representative mobile, tablet, laptop, and desktop viewports without horizontal overflow or overlapping content.
2. Existing language toggle, gallery/filter/lightbox, countdown, map/directions, calendar, audio, WhatsApp RSVP/share, and copy-link actions remain available.
3. The production build succeeds and no new browser errors are introduced during the opening and guest flows.
**Plans**: 1 plan

Plans:
- [ ] 03-01: Verify responsive layouts and preserve existing interactions

## Progress

**Execution Order:** Phase 1 → Phase 2 → Phase 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Invitation Cover | 0/1 | In progress | - |
| 2. Invitation Visual System | 0/1 | Not started | - |
| 3. Responsive and Functional Validation | 0/1 | Not started | - |
