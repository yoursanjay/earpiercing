export interface InvitationConfig {
  child: {
    nameTamil: string;
    nameEnglish: string;
    gender: 'boy' | 'girl';
    titleTamil: string;
    titleEnglish: string;
    dateOfBirth?: string;
    photoUrl: string;
    photoAlt: string;
    goldOrnamentTamil: string; // e.g., 'பொன் கடுக்கன்' or 'தங்க ஜிமிக்கி'
    goldOrnamentEnglish: string;
  };
  parents: {
    fatherTamil: string;
    fatherEnglish: string;
    motherTamil: string;
    motherEnglish: string;
  };
  grandparents: {
    paternalTamil: string;
    paternalEnglish: string;
    maternalTamil: string;
    maternalEnglish: string;
  };
  maternalUncles: {
    nameTamil: string;
    nameEnglish: string;
    spouseTamil?: string;
    spouseEnglish?: string;
    roleTamil: string; // தாய்மாமன் & தாய்மாமி
    roleEnglish: string;
  }[];
  event: {
    titleTamil: string;
    titleEnglish: string;
    subtitleTamil: string;
    subtitleEnglish: string;
    blessingTamil: string;
    blessingEnglish: string;
    kulaDeivamTamil: string;
    kulaDeivamEnglish: string;
    dateISO: string; // "2026-12-14T09:30:00+05:30"
    dateFormattedTamil: string;
    dateFormattedEnglish: string;
    tamilYearMonth: string; // e.g. "பிலவ வருடம் - கார்த்திகை 28 ஆம் நாள்"
    dayOfWeekTamil: string;
    dayOfWeekEnglish: string;
    muhurthamTimeTamil: string;
    muhurthamTimeEnglish: string;
    muhurthamLagnamTamil: string;
    muhurthamLagnamEnglish: string;
    nakshatramTamil: string;
    nakshatramEnglish: string;
    lunchTimeTamil: string;
    lunchTimeEnglish: string;
    feastDetailsTamil: string;
    feastDetailsEnglish: string;
  };
  venue: {
    nameTamil: string;
    nameEnglish: string;
    mandapamTamil: string;
    mandapamEnglish: string;
    addressTamil: string;
    addressEnglish: string;
    cityTamil: string;
    cityEnglish: string;
    pincode: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    landmarkTamil: string;
    landmarkEnglish: string;
    contactPhone: string;
  };
  rsvp: {
    whatsappNumber: string; // "919876543210"
    contactPersonTamil: string;
    contactPersonEnglish: string;
    prefilledMessageTamil: string;
    prefilledMessageEnglish: string;
  };
  traditions: {
    titleTamil: string;
    titleEnglish: string;
    descriptionTamil: string;
    descriptionEnglish: string;
    icon: string;
    imageUrl: string;
  }[];
  gallery: {
    url: string;
    captionTamil: string;
    captionEnglish: string;
    tag: string;
  }[];
  quotes: {
    tamil: string;
    english: string;
    authorTamil: string;
    authorEnglish: string;
  };
}
