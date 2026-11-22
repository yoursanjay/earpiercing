import { InvitationConfig } from '../types';

/**
 * =========================================================================
 * TAMIL ROYAL EAR-PIERCING CEREMONY INVITATION CONFIGURATION
 * செவிப் பொன் சேர்ப்பு விழா அழைப்பிதழ் உள்ளமைப்புகள்
 * =========================================================================
 * 
 * Verified details:
 * Hosts: ராஜதுரை & கலைச்செல்வி / Rajadurai & Kalaiselvi
 * Title: செவிப் பொன் சேர்ப்பு விழா / Ear Piercing Ceremony
 * Children: R. கிருஷ்வந்த் & R. சுபத்ரா / R. Krishwanth & R. Subhadra
 * Date: ஞாயிற்றுக்கிழமை, 29.11.2026 / Sunday, 29 November 2026
 * Time: காலை 9.30 மணி முதல் 10.30 மணி வரை / 9:30 AM to 10:30 AM
 * Venue: V.R. மஹால், 5th Stop, திருநகர், மதுரை. / V.R. Mahal, 5th Stop, Thirunagar, Madurai.
 */
export const invitationConfig: InvitationConfig = {
  child: {
    nameTamil: 'R. கிருஷ்வந்த் & R. சுபத்ரா',
    nameEnglish: 'R. Krishwanth & R. Subhadra',
    gender: 'boy',
    titleTamil: 'எங்கள் இல்லத்துச் செல்வங்கள்',
    titleEnglish: 'Our Beloved Children',
    dateOfBirth: '2025-08-15',
    photoUrl: '/layer.webp',
    photoAlt: 'R. Krishwanth & R. Subhadra',
    goldOrnamentTamil: 'மங்கள பொன் கடுக்கன் & குண்டலங்கள்',
    goldOrnamentEnglish: 'Auspicious Sacred Gold Earrings',
  },

  parents: {
    fatherTamil: 'ராஜதுரை',
    fatherEnglish: 'Rajadurai',
    motherTamil: 'கலைச்செல்வி',
    motherEnglish: 'Kalaiselvi',
  },

  grandparents: {
    paternalTamil: 'ராஜதுரை குடும்பத்தினர்',
    paternalEnglish: 'Rajadurai Family',
    maternalTamil: 'கலைச்செல்வி குடும்பத்தினர்',
    maternalEnglish: 'Kalaiselvi Family',
  },

  maternalUncles: [
    {
      nameTamil: 'தாய்மாமன் & குடும்பத்தினர்',
      nameEnglish: 'Maternal Family & Elders',
      roleTamil: 'அன்பு தாய்மாமன் & குடும்பத்தினர்',
      roleEnglish: 'Beloved Maternal Family',
    }
  ],

  event: {
    titleTamil: 'செவிப் பொன் சேர்ப்பு விழா',
    titleEnglish: 'Ear Piercing Ceremony',
    subtitleTamil: 'எங்கள் இல்லத்துச் செல்வங்களின் மங்கள செவிப் பொன் சேர்ப்பு விழா அழைப்பிதழ்',
    subtitleEnglish: 'Traditional Sacred Ear Piercing Ceremony Invitation',
    blessingTamil: '|| ஸ்ரீ குலதெய்வம் துணை || ஓம் ஸ்ரீ மகா கணபதியே நமஹ ||',
    blessingEnglish: '|| With the Divine Blessings of Kula Deivam & Lord Ganesha ||',
    kulaDeivamTamil: 'ஸ்ரீ குலதெய்வ அருள் முன்னிற்க',
    kulaDeivamEnglish: 'With the Divine Grace of Kula Deivam',
    
    // Event Date - ISO format: YYYY-MM-DDTHH:mm:ss+05:30
    dateISO: '2026-11-29T09:30:00+05:30',
    dateFormattedTamil: 'ஞாயிற்றுக்கிழமை, 29.11.2026',
    dateFormattedEnglish: 'Sunday, 29 November 2026',
    tamilYearMonth: 'சுபமுகூர்த்த சுபதினத்தில்',
    dayOfWeekTamil: 'ஞாயிற்றுக்கிழமை',
    dayOfWeekEnglish: 'Sunday',
    
    // Auspicious Timing (Muhurtham)
    muhurthamTimeTamil: 'காலை 9.30 மணி முதல் 10.30 மணி வரை',
    muhurthamTimeEnglish: '9:30 AM to 10:30 AM',
    muhurthamLagnamTamil: 'சுப முகூர்த்த நன்னாளில்',
    muhurthamLagnamEnglish: 'Auspicious Muhurtham Timing',
    nakshatramTamil: 'சுபயோக சுபதினத்தில்',
    nakshatramEnglish: 'Auspicious Astrological Day',

    // Feast / Virundhu Details
    lunchTimeTamil: 'மதியம் 12:00 மணி அளவில்',
    lunchTimeEnglish: 'From 12:00 PM onwards',
    feastDetailsTamil: 'பாரம்பரிய வாழை இலை அறுசுவை மங்கள விருந்து உபசரிப்பு',
    feastDetailsEnglish: 'Traditional Royal Banana Leaf Festive Feast',
  },

  venue: {
    nameTamil: 'V.R. மஹால்',
    nameEnglish: 'V.R. Mahal',
    mandapamTamil: 'V.R. மஹால்',
    mandapamEnglish: 'V.R. Mahal',
    addressTamil: '5th Stop, திருநகர்',
    addressEnglish: '5th Stop, Thirunagar',
    cityTamil: 'மதுரை, தமிழ்நாடு',
    cityEnglish: 'Madurai, Tamil Nadu',
    pincode: '625006',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=VR+Mahal+Thirunagar+Madurai&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=VR+Mahal+5th+Stop+Thirunagar+Madurai',
    landmarkTamil: '5th Stop, திருநகர், மதுரை',
    landmarkEnglish: '5th Stop, Thirunagar, Madurai',
    contactPhone: '+91 98401 23456',
  },

  rsvp: {
    whatsappNumber: '919840123456',
    contactPersonTamil: 'ராஜதுரை & கலைச்செல்வி',
    contactPersonEnglish: 'Rajadurai & Kalaiselvi',
    prefilledMessageTamil: 'வணக்கம்! R. கிருஷ்வந்த் & R. சுபத்ரா ஆகியோரின் செவிப் பொன் சேர்ப்பு விழாவில் நாங்களும் கலந்துகொண்டு குழந்தைகளை ஆசீர்வதிக்க மகிழ்ச்சியோடு உறுதி செய்கிறோம். குடும்ப உறுப்பினர்கள் எண்ணிக்கை: ',
    prefilledMessageEnglish: 'Greetings! We are happy to confirm our presence at the Ear Piercing Ceremony of R. Krishwanth & R. Subhadra to bless the children. Number of guests attending: ',
  },

  traditions: [
    {
      titleTamil: 'செவிப் பொன் சேர்ப்பு & தாய்மாமன் மடி',
      titleEnglish: "The Maternal Uncle's Sacred Honor",
      descriptionTamil: 'தமிழ் மரபில் தாய்மாமனின் மடியில் செல்வக் குழந்தைகள் அமர்ந்து காது குத்துவது உன்னத பாசத்தின் அடையாளம். பெரியோர்கள் ஆசியோடு மங்களப் பொருட்கள் வழங்கி குழந்தைகளை வாழ்த்தி மகிழும் நிகழ்வு.',
      descriptionEnglish: "In Tamil tradition, the children are seated tenderly on the maternal uncle's lap to receive sacred gold earrings, symbolizing eternal protection and family heritage.",
      icon: 'HeartHandshake',
      imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop',
    },
    {
      titleTamil: 'மங்கள பொன் கடுக்கன் & குண்டலங்கள்',
      titleEnglish: 'Auspicious Gold Kadukkan Adornment',
      descriptionTamil: 'தூய தங்கத்திலான கடுக்கன் அணிவிப்பது மங்கலகரமான வாழ்வையும், நாடிகள் சீராக இயங்கி நற்புத்தியும் உடல் வலிமையும் பெருகும் ஆன்மீக நன்மைகளையும் வாரி வழங்குகிறது.',
      descriptionEnglish: 'Adorning pure gold earrings awakens vital acupressure energy points (Karna Vedha) for intellect, vibrant health, and protection, marking the children’s sacred entry into family heritage.',
      icon: 'Sparkles',
      imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop',
    },
    {
      titleTamil: 'குலதெய்வ அருள் & ஆசிகள்',
      titleEnglish: 'Kula Deivam Sanctuary & Blessings',
      descriptionTamil: 'முன்னோர்கள் வழிபட்ட குலதெய்வ சந்நிதியில் மனமுருகி வேண்டி, பெரியோர்களின் நல்லாசியோடு குழந்தைகளை வாழ்த்தி அருள்பெறும் நன்னாழ்.',
      descriptionEnglish: 'Seeking the eternal grace of ancestral Kula Deivam and the divine blessings of family elders for health, prosperity, and joy.',
      icon: 'Flame',
      imageUrl: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=900&auto=format&fit=crop',
    },
    {
      titleTamil: 'வாழை இலை அறுசுவை விருந்து உபசரிப்பு',
      titleEnglish: 'Grand Festive Banana Leaf Feast',
      descriptionTamil: 'விழா நிறைவில் பாயாசம், வடை, சாம்பார், நெய் சாதம் என நறுமணமிக்க தூய சைவ அறுசுவை விருந்து தங்களுக்கு அன்போடு பரிமாறப்படுகிறது.',
      descriptionEnglish: 'A celebratory traditional festive feast served on fresh green plantain leaves with fragrant payasam, medu vadai, paruppu ghee, and hospitable warmth.',
      icon: 'Utensils',
      imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=900&auto=format&fit=crop',
    }
  ],

  gallery: [
    {
      url: '/layer.webp',
      captionTamil: 'மழலை புன்னகையோடு எங்கள் செல்வக்குழந்தைகள்',
      captionEnglish: 'Our Cherished Little Blessings in Traditional Splendor',
      tag: 'Baby',
    },
    {
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop',
      captionTamil: 'பாரம்பரிய பட்டு மற்றும் சீர்வரிசை தட்டுகள்',
      captionEnglish: 'Traditional Kanchipuram Silk & Auspicious Seer Plates',
      tag: 'Tradition',
    },
    {
      url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop',
      captionTamil: 'சுடர்விடும் மங்கள குத்துவிளக்கு',
      captionEnglish: 'Sacred Brass Kuthuvilakku Lamps Radiant Glow',
      tag: 'Sanctum',
    },
    {
      url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
      captionTamil: 'மங்கள பொன் நகைகள் & ஆபரணங்கள்',
      captionEnglish: 'Heritage Gold Kadukkan & Ornaments for the Ceremony',
      tag: 'Jewellery',
    },
    {
      url: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1000&auto=format&fit=crop',
      captionTamil: 'நறுமண மல்லிகை மற்றும் சாமந்தி மலர் அலங்காரம்',
      captionEnglish: 'Fresh Jasmine & Golden Marigold Floral Garlands',
      tag: 'Decor',
    },
    {
      url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop',
      captionTamil: 'வாழை இலை மங்கள அறுசுவை விருந்து',
      captionEnglish: 'Traditional South Indian Festive Plantain Leaf Banquet',
      tag: 'Feast',
    }
  ],

  quotes: {
    tamil: '“அன்புடையீர், வணக்கம். எங்கள் இல்லத்துச் செல்வங்கள் R. கிருஷ்வந்த் மற்றும் R. சுபத்ரா ஆகியோருக்கு பெரியோர்களின் நல்லாசியுடன் நடைபெறும் செவிப் பொன் சேர்ப்பு விழாவிற்கு தாங்கள் தங்களின் சுற்றமும் நட்பும் சூழ வருகை தந்து, குழந்தைகளை மனமார வாழ்த்தி அருளுமாறு அன்போடு அழைக்கிறோம்.”',
    english: '“We cordially invite you and your family to grace the auspicious Ear Piercing Ceremony of our beloved children R. Krishwanth and R. Subhadra. We humbly request your gracious presence to bless our children with lifelong health, wisdom, and joy.”',
    authorTamil: '— அன்புடன் அழைக்கும் ராஜதுரை & கலைச்செல்வி குடும்பத்தினர்',
    authorEnglish: '— Warmly Welcoming You, Rajadurai & Kalaiselvi and Family',
  }
};
