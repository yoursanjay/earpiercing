import { InvitationConfig } from '../types';

/**
 * =========================================================================
 * TAMIL ROYAL EAR-PIERCING CEREMONY INVITATION CONFIGURATION
 * காது குத்து விழா அழைப்பிதழ் உள்ளமைப்புகள்
 * =========================================================================
 * 
 * Edit the fields below to customize the invitation for your family's ceremony.
 * நீங்கள் உங்கள் குடும்ப விழா தகவல்களை இங்கு மிக எளிதாக மாற்றிக்கொள்ளலாம்.
 */
export const invitationConfig: InvitationConfig = {
  child: {
    // Child details / குழந்தை விவரங்கள்
    nameTamil: 'செல்வன். க. ஆதித்ய பிரணவ்',
    nameEnglish: 'Selvan. K. Aadithya Pranav',
    gender: 'boy',
    titleTamil: 'எங்கள் குல விளக்கு செல்லக் குழந்தை',
    titleEnglish: 'Our Beloved Little Prince',
    dateOfBirth: '2025-08-15',
    // Using actual family baby photography from public/layer.webp
    photoUrl: '/layer.webp',
    photoAlt: 'Child Aadithya Pranav in Traditional Attire',
    goldOrnamentTamil: 'மங்கள பொன் கடுக்கன்',
    goldOrnamentEnglish: 'Auspicious Gold Kadukkan (Earrings)',
  },

  parents: {
    fatherTamil: 'திரு. மு. கார்த்திகேயன் B.E.,',
    fatherEnglish: 'Thiru. M. Karthikeyan B.E.,',
    motherTamil: 'திருமதி. கா. சௌந்தர்யா M.Sc.,',
    motherEnglish: 'Thirumathi. K. Soundarya M.Sc.,',
  },

  grandparents: {
    paternalTamil: 'திரு. சு. முருகேசன் - திருமதி. மு. பார்வதி அம்மாள்',
    paternalEnglish: 'Thiru. S. Murugesan - Thirumathi. M. Parvathi Ammal',
    maternalTamil: 'திரு. வெ. சண்முகம் - திருமதி. ச. லட்சுமி அம்மாள்',
    maternalEnglish: 'Thiru. V. Shanmugam - Thirumathi. S. Lakshmi Ammal',
  },

  // In Tamil Ear Piercing ceremonies, Thai Maaman (Maternal Uncle) holds the highest honor!
  // தாய்மாமன் சீர் மற்றும் மடி மீது அமர்ந்து காது குத்துதல் பாரம்பரியத்தின் மையம்.
  maternalUncles: [
    {
      nameTamil: 'திரு. ச. விஜய் ஆனந்த் M.B.A.,',
      nameEnglish: 'Thiru. S. Vijay Anand M.B.A.,',
      spouseTamil: 'திருமதி. வி. பிரியதர்ஷினி B.Tech.,',
      spouseEnglish: 'Thirumathi. V. Priyadarshini B.Tech.,',
      roleTamil: 'அன்பு தாய்மாமன் & தாய்மாமி',
      roleEnglish: 'Beloved Maternal Uncle & Aunt',
    },
    {
      nameTamil: 'திரு. ச. கௌதம் கிருஷ்ணன் M.S.,',
      nameEnglish: 'Thiru. S. Gowtham Krishnan M.S.,',
      roleTamil: 'இளைய தாய்மாமன்',
      roleEnglish: 'Younger Maternal Uncle',
    }
  ],

  event: {
    titleTamil: 'காது குத்து மற்றும் முடி காணிக்கை திருவிழா',
    titleEnglish: 'Traditional Ear-Piercing & Ayushya Blessing Ceremony',
    subtitleTamil: 'குலதெய்வ திருவருளோடு நடைபெறும் மங்கள விழா',
    subtitleEnglish: 'A Royal Celebration of Cultural Heritage & Divine Blessings',
    blessingTamil: '|| ஸ்ரீ குலதெய்வம் துணை || ஓம் ஸ்ரீ மகா கணபதியே நமஹ ||',
    blessingEnglish: '|| With the Divine Blessings of Kula Deivam & Lord Ganesha ||',
    kulaDeivamTamil: 'அருள்மிகு ஸ்ரீ பவானி அம்மன் & முனீஸ்வரர் திருக்கோயில்',
    kulaDeivamEnglish: 'Arulmigu Sri Bhavani Amman & Muneeswarar Temple',
    
    // Event Date - ISO format: YYYY-MM-DDTHH:mm:ss+05:30
    dateISO: '2026-12-14T09:30:00+05:30',
    dateFormattedTamil: '14 டிசம்பர் 2026',
    dateFormattedEnglish: 'December 14, 2026',
    tamilYearMonth: 'சுபகிருது வருடம் - கார்த்திகை 28 ஆம் நாள்',
    dayOfWeekTamil: 'திங்கட்கிழமை',
    dayOfWeekEnglish: 'Monday',
    
    // Auspicious Timing (Muhurtham)
    muhurthamTimeTamil: 'காலை 09:15 மணி முதல் 10:30 மணி வரை',
    muhurthamTimeEnglish: '09:15 AM to 10:30 AM IST',
    muhurthamLagnamTamil: 'சுப மேஷ லக்னத்தில்',
    muhurthamLagnamEnglish: 'Auspicious Mesha Lagnam',
    nakshatramTamil: 'அவிட்டம் நட்சத்திர சுபயோக சுபதினத்தில்',
    nakshatramEnglish: 'Avittam (Dhanishta) Nakshatram',

    // Feast / Virundhu Details
    lunchTimeTamil: 'மதியம் 12:30 மணி அளவில்',
    lunchTimeEnglish: 'From 12:30 PM onwards',
    feastDetailsTamil: 'பாரம்பரிய வாழை இலை அறுசுவை மங்கள விருந்து உபசரிப்பு',
    feastDetailsEnglish: 'Traditional Royal Banana Leaf Festive Feast',
  },

  venue: {
    nameTamil: 'ஸ்ரீ அருள்மிகு பவானி அம்மன் திருக்கோயில் வளாகம்',
    nameEnglish: 'Sri Arulmigu Bhavani Amman Temple Complex',
    mandapamTamil: 'ஸ்ரீ தங்க மயில் திருமண & சமுதாய மண்டபம்',
    mandapamEnglish: 'Sri Thanga Mayil Royal Heritage Mandapam',
    addressTamil: 'நெ. 108, சந்நிதி தெரு, திருப்பரங்குன்றம்',
    addressEnglish: 'No. 108, Sannidhi Street, Thiruparankundram',
    cityTamil: 'மதுரை, தமிழ்நாடு',
    cityEnglish: 'Madurai, Tamil Nadu',
    pincode: '625005',
    // Embedded Google Map coordinates URL (Madurai Temple region)
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15722.951566861254!2d78.066468!3d9.878174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c59807572773%3A0xb5b7ea4f3c75a452!2sThiruparankundram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Thiruparankundram+Madurai+Tamil+Nadu',
    landmarkTamil: 'திருக்கோயில் கிழக்கு கோபுர நுழைவாயில் அருகில்',
    landmarkEnglish: 'Near Eastern Temple Gopuram Entrance',
    contactPhone: '+91 98401 23456',
  },

  rsvp: {
    whatsappNumber: '919840123456',
    contactPersonTamil: 'மு. கார்த்திகேயன்',
    contactPersonEnglish: 'M. Karthikeyan',
    prefilledMessageTamil: 'வணக்கம்! காது குத்து விழாவில் நாங்களும் கலந்துகொண்டு குழந்தையை ஆசீர்வதிக்க மகிழ்ச்சியோடு உறுதி செய்கிறோம். குடும்ப உறுப்பினர்கள் எண்ணிக்கை: ',
    prefilledMessageEnglish: 'Vanakkam! We are happy to confirm our presence at the Ear-Piercing Ceremony to bless baby Aadithya Pranav. Number of guests attending: ',
  },

  traditions: [
    {
      titleTamil: 'தாய்மாமன் மடி & சீர் வரிசை',
      titleEnglish: "The Maternal Uncle's Sacred Honor",
      descriptionTamil: 'தமிழ் மரபில் தாய்மாமனின் மடியில் செல்லக் குழந்தை அமர்ந்து காது குத்துவது உன்னத பாசத்தின் அடையாளம். தாய்மாமன் சீர்வரிசை தட்டுகளுடன் மங்களப் பொருட்கள் வழங்கி குழந்தையை மடியில் தாங்கி ஆசீர்வதிப்பார்.',
      descriptionEnglish: "In Tamil tradition, the child is seated tenderly on the maternal uncle's lap (Thai Maaman Madi). The uncle showers royal gifts, silk dhotis, gold ornaments, and lifelong affectionate protection.",
      icon: 'HeartHandshake',
      imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop', // Traditional silk & gold seer
    },
    {
      titleTamil: 'மங்கள பொன் கடுக்கன் & குண்டலங்கள்',
      titleEnglish: 'Auspicious Gold Kadukkan Adornment',
      descriptionTamil: 'தூய தங்கத்திலான கடுக்கன் அணிவிப்பது மங்கலகரமான வாழ்வையும், நாடிகள் சீராக இயங்கி நற்புத்தியும் உடல் வலிமையும் பெருகும் ஆன்மீக நன்மைகளையும் வாரி வழங்குகிறது.',
      descriptionEnglish: 'Adorning pure gold earrings awakens vital acupressure energy points (Karna Vedha) for intellect, vibrant health, and protection, marking the child’s sacred entry into family heritage.',
      icon: 'Sparkles',
      imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop', // Traditional gold jewellery
    },
    {
      titleTamil: 'குலதெய்வ அருள் & முடி காணிக்கை',
      titleEnglish: 'Kula Deivam Sanctuary & Ayushya Homam',
      descriptionTamil: 'எங்கள் முன்னோர்கள் வழிபட்ட குலதெய்வ சந்நிதியில் முதல் முடி காணிக்கை செலுத்தி, கணபதி ஹோமம் மற்றும் ஆயுஷ்ய ஹோமம் ஓதி திருவருள் பெறுதல்.',
      descriptionEnglish: 'Offering prayers at the ancestral Kula Deivam shrine, seeking divine protection, health, and prosperity through sacred Vedic mantras and family blessings.',
      icon: 'Flame',
      imageUrl: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=900&auto=format&fit=crop', // Temple stone & lamps
    },
    {
      titleTamil: 'வாழை இலை அறுசுவை விருந்து உபசரிப்பு',
      titleEnglish: 'Grand Banana Leaf Feast (Virundhu)',
      descriptionTamil: 'விழா நிறைவில் பாயாசம், வடை, சாம்பார், நெய் சாதம் என நறுமணமிக்க தூய சைவ அறுசுவை விருந்து தங்களுக்கு அன்போடு பரிமாறப்படுகிறது.',
      descriptionEnglish: 'A celebratory traditional South Indian festive feast served on fresh green plantain leaves with fragrant payasam, medu vadai, paruppu ghee, and festive hospitality.',
      icon: 'Utensils',
      imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=900&auto=format&fit=crop', // Traditional banana leaf meal
    }
  ],

  gallery: [
    {
      url: '/layer.webp',
      captionTamil: 'மழலை புன்னகையோடு எங்கள் செல்வக்குழந்தை',
      captionEnglish: 'Our Cherished Little Blessing in Traditional Splendor',
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
    tamil: '“மழலை மாறா சிரிப்போடு, தத்தி வரும் நடையோடு, எங்கள் இல்லத்து ஒளிவிளக்கு பொன் காதுகளில் மங்கள பொன் குண்டலங்கள் சூடும் இந்நாளில், உங்களின் பொற்பாதங்கள் எங்கள் இல்லம் தேடி வந்து வாழ்த்தி அருள வேண்டுகிறோம்.”',
    english: '"With innocent laughter and tender steps, our precious treasure steps into sacred heritage as pure gold earrings grace tender ears. We humbly request your gracious presence to bless our child with lifelong health, wisdom, and joy."',
    authorTamil: '— அன்புடன் அழைக்கும் குடும்பத்தினர்',
    authorEnglish: '— Warmly Welcoming You, The Family',
  }
};
