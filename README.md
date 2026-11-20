# 🪘 Premium Cinematic Tamil Ear-Piercing Invitation Website
### காது குத்து விழா அழைப்பிதழ் (Kadhukuthu Vizha Azhaippidhazh)

A royal, photorealistic, interactive South Indian traditional ear-piercing ceremony invitation website built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Web Audio API**.

Designed to feel like entering a professionally directed South Indian family celebration film — complete with a 3D temple entrance gate, sacred Kula Deivam blessings, traditional brass lamps, falling marigold and jasmine petals, live countdown, Google Maps navigation, and WhatsApp RSVP integration.

---

## 🌟 Visual Theme & Cultural Authenticity

- **Royal Temple Ambience:** Inspired by sacred Tamil Kula Deivam temples (Madurai, Palani, Thanjavur), granite stone carvings, morning sun god-rays, and glowing brass Kuthuvilakku lamps.
- **Traditional Color Palette:** Deep Maroon (`#3F0511`, `#5A091A`), Antique Gold (`#D4AF37`, `#F7E7B6`), Turmeric Yellow (`#FFA500`), Traditional Temple Green, and Warm Ivory.
- **Authentic Tamil Cultural Rituals:**
  - **தாய்மாமன் மடி & சீர்வரிசை (The Sacred Maternal Uncle's Lap & Gifts):** Honoring the indispensable role of the Thai Maaman in Tamil ear-piercing traditions.
  - **மங்கள பொன் கடுக்கன் (Auspicious Gold Kadukkan):** Awaking acupressure points (Karna Vedha) for health, intellect, and spiritual prosperity.
  - **குலதெய்வ அருள் & முடி காணிக்கை (Ancestral Temple Blessings & First Hair Offering).**
  - **வாழை இலை அறுசுவை விருந்து (Royal Plantain Leaf Festive Feast).**

---

## 🚀 Key Features

1. **Cinematic Full-Screen Temple Opening:**
   - Scene 1: Temple entrance with golden morning sunlight and floating flower petals.
   - Scene 2: 3D interactive wooden temple gate with heavy brass studs and lion knockers swinging open in perspective to reveal sacred blessings (`|| ஸ்ரீ குலதெய்வம் துணை ||`).
   - Scene 3: Child's name in Tamil & English typography with gold shimmer, ceremony title, date, auspicious Muhurtham, and animated scroll indicator.

2. **Baby Introduction Section:**
   - Realistic baby photograph framed in an ornate circular Thanjavur art gold halo.
   - Child's name, title, date of birth, parents' and grandparents' names, and poetic Tamil blessing verse.

3. **Traditional Story & Rituals Section:**
   - In-depth storytelling about the health and spiritual significance of Karna Vedha.
   - Alternating photographic cards with smooth scroll-triggered reveals.

4. **Auspicious Muhurtham & Feast Details:**
   - Detailed timeline: Auspicious Muhurtham time, Lagnam, Nakshatram, and full-course banana leaf feast details.
   - **Add to Calendar:** One-click "Google Calendar" link and downloadable "iCal (.ics)" file for Apple Calendar / Outlook.

5. **Temple Experience Gallery:**
   - Filterable celebration visual showcase (Traditions, Jewellery, Sanctum, Feast) with interactive image lightbox modal.

6. **Live Event Countdown Timer:**
   - Real-time Days, Hours, Minutes, and Seconds counter with antique gold casing.

7. **Venue & Interactive Google Maps:**
   - Mandapam name, full postal address, landmark, and contact phone.
   - Embedded Google Maps plus a prominent **GET DIRECTIONS** button opening Google Maps navigation directly.

8. **Family Lineage & Blessings Invitation:**
   - Traditional silk scroll card honoring Parents, Grandparents, Maternal Uncles & Aunts (தாய்மாமன்), kin, and friends.

9. **Celebratory Finale & WhatsApp RSVP:**
   - Finale baby portrait and emotional blessing.
   - Interactive guest counter (+ / -) that dynamically formats a pre-filled WhatsApp RSVP message.
   - One-tap WhatsApp Sharing button for distributing the invitation to family and friends.
   - Copy Link button with instant feedback toast.

10. **Traditional Mangala Isai Background Audio Controller:**
    - High-fidelity **Web Audio API synthesizer** generating authentic South Indian Tampura drone, peaceful resonant brass temple bells (கோயில் மணி), and auspicious Mohanam raga Nadaswaram melodic motifs.
    - Floating gold bell icon with animated soundwaves and volume controls.
    - Zero external broken audio dependencies; strictly user-initiated (no autoplay blocking).

11. **Interactive Flower Petal Shower Canvas:**
    - Lightweight, high-performance HTML5 Canvas simulation of falling South Indian marigold (சாமந்தி), jasmine (மல்லிகை), and rose petals with wind physics and tap-to-burst interactivity.

12. **Bilingual Support (தமிழ் / English):**
    - Seamless toggle between Tamil and English typography in the top navigation bar.

---

## 🛠️ Project Structure

```
ear/
├── index.html                   # HTML entry with Tamil and Serif Google Fonts
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Custom royal palette & animations
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── src/
    ├── App.tsx                  # Root app layout
    ├── index.css                # Royal silk gradients, kolam patterns, gold glow
    ├── main.tsx                 # React DOM mount
    ├── config/
    │   └── invitationConfig.ts  # ⭐ ALL CUSTOMIZABLE INVITATION DETAILS
    ├── types/
    │   └── index.ts             # TypeScript definitions
    ├── utils/
    │   └── audioSynth.ts        # South Indian Mangala Isai audio synthesizer
    └── components/
        ├── BabyIntroduction.tsx # Royal portrait & lineage
        ├── CeremonyDetails.tsx  # Muhurtham, feast, calendar
        ├── CinematicOpening.tsx # 3D temple gate & entrance reveal
        ├── EventCountdown.tsx   # Live countdown clock
        ├── FamilyInvitation.tsx # Family host names & blessings
        ├── FamilyStory.tsx      # Cultural significance & Thai Maaman
        ├── FinalCelebration.tsx # WhatsApp RSVP, share, confetti
        ├── MusicController.tsx  # Temple bell & audio controls
        ├── Navbar.tsx           # Bilingual switch & navigation
        ├── PetalShower.tsx      # Canvas flower petals physics
        ├── TempleExperience.tsx # Visual gallery & lightbox
        └── VenueSection.tsx     # Google Maps & directions
```

---

## 📝 How to Customize for Your Family

All content can be updated in a single file:  
👉 **`src/config/invitationConfig.ts`**

| Field | Description | Example |
|---|---|---|
| `child.nameTamil` | Baby's name in Tamil | `செல்வன். க. ஆதித்ய பிரணவ்` |
| `child.nameEnglish` | Baby's name in English | `Selvan. K. Aadithya Pranav` |
| `child.photoUrl` | Baby photograph URL or local path | `https://...` or `/baby.jpg` |
| `parents` | Parents' names (Father & Mother) | `திரு. மு. கார்த்திகேயன் & திருமதி. கா. சௌந்தர்யா` |
| `grandparents` | Paternal & Maternal Grandparents | Thiru Murugesan & Shanmugam |
| `maternalUncles` | Thai Maaman & Thai Maami names | Thiru Vijay Anand & Priyadarshini |
| `event.dateISO` | Event ISO timestamp for countdown | `2026-12-14T09:30:00+05:30` |
| `event.muhurthamTimeTamil` | Auspicious Muhurtham time | `காலை 09:15 மணி முதல் 10:30 மணி வரை` |
| `venue.googleMapsDirectionsUrl`| Direct Google Maps directions link | `https://maps.google.com/?q=...` |
| `rsvp.whatsappNumber` | WhatsApp phone number with country code | `919840123456` |

---

## 💻 Development & Deployment Commands

### Run Development Server:
```bash
npm run dev
```

### Build for Production:
```bash
npm run build
```

### Preview Production Build:
```bash
npm run preview
```

---

## 📱 Mobile Responsiveness & Accessibility
- Fully optimized for mobile screens (tested from 360px width upwards).
- Clean viewport scaling without horizontal overflow.
- Touch-friendly tap targets for WhatsApp RSVP and directions.
