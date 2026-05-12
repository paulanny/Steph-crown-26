/**
 * Edit all copy for the birthday site here — one place to customize everything.
 *
 * IMAGES: Add your files to /public/images/ with these exact names (or update paths below):
 *   mentor-main.jpg  — hero / birthday reveal portrait
 *   mentor-1.jpg     — gallery
 *   mentor-2.jpg
 *   mentor-3.jpg
 */

export const siteMeta = {
  /** Shown in loading intro */
  loadingLine: 'Preparing something with care…',
  /** Small footer / easter egg context */
  fromName: 'Paul',
  mentorHonorific: 'Pmark',
  /**
   * Background music — starts on first tap into the experience (same click as confetti), loops until the tab closes.
   * File in /public/ is served from site root: public/audio.mp3 → '/audio.mp3'
   * Set to null or '' to skip audio entirely.
   */
  musicSrc: '/audio.mp3',
  /** 0–1; kept modest so ambience stays in the background */
  musicVolume: 0.28,
}

/** Light / dark theme — copy for the sun/moon control and the Pmark nudge */
export const themeContent = {
  /** Shown once per tab session (dismissible) in dark mode after the story opens */
  lightModeNudge:
    "Hey Pmark — I know you and all-black screens aren't exactly best friends. So yes: there's a softer, lighter version here too. Tap the sun when you're ready — I had to give you both.",
  lightModeNudgeHint: 'Calm mode · same heart',
  /** Quick toast after switching to light */
  lightModeOnAcknowledgment: 'There you go — easier on the eyes. Enjoy the scroll.',
  switchToLightLabel: 'Switch to light mode',
  switchToDarkLabel: 'Switch to dark mode',
}

export const heroContent = {
  headline: 'Something special is waiting for you…',
  subline: 'Paul created something for you.',
  /** Primary CTA */
  ctaPrimary: 'Click to View',
  /** Playful secondary CTA — both enter the experience */
  ctaPlayful: 'You have no choice than to view too 😄',
  /** Screen reader hint */
  ctaHint: 'Opens the birthday experience',
}

export const birthdayReveal = {
  /** REPLACE: /images/mentor-main.jpg — main portrait for Section 1 */
  mentorPhotoSrc: '/images/egbonnn.jpeg',
  mentorPhotoAlt: 'Portrait of my mentor',
  heading: 'Happy Birthday, Pmark',
  /** Warm supporting line under the heading */
  tagline: 'Today the world gets a little brighter — because you do.',
  lead:
    'Thank you for the way you carry wisdom lightly, discipline kindly, and grace without fanfare. This is a small pause in the internet, just for you.',
  /** Small line under the reveal block */
  footerLine: 'A note carried quietly — but meant with full heart.',
}

/** Section 2 — qualities (3–5 cards) */
export const qualitiesContent = {
  sectionEyebrow: 'Why you matter',
  heading: 'Why you are special',
  intro:
    'Some people teach, but you do much more than that. You shape lives, you guide with wisdom, and you carry truth with patience, care, and sincerity. These are just some of the many qualities I admire in you, and I am deeply grateful for the kind of person you are.',
  cards: [
    {
      id: 'wisdom',
      title: 'Wisdom that lands',
      body:
        'You do not perform knowledge — you share it in a way people can actually live. That is rare, and it changes rooms.',
      iconKey: 'wisdom',
    },
    {
      id: 'kindness',
      title: 'Kindness with backbone',
      body:
        'Warm without being soft, firm without being cold. The balance is not accidental — it is character.',
      iconKey: 'heart',
    },
    {
      id: 'discipline',
      title: 'Quiet discipline',
      body:
        'Consistency is your unsung superpower. Day after day, you show up — and people like me notice.',
      iconKey: 'discipline',
    },
    {
      id: 'impact',
      title: 'Impact that compounds',
      body:
        'What you pour into others does not evaporate. It multiplies in ways you may never fully see — but I hope you feel it today.',
      iconKey: 'impact',
    },
    {
      id: 'fatherly',
      title: 'Fatherly steadiness',
      body:
        'There is a steadiness in how you lead — protective, honoring, rooted. It makes hard roads feel walkable.',
      iconKey: 'mentor',
    },
    {
      id: 'spiritual',
      title: 'Spiritually grounded',
      body:
        'You carry a spiritual depth and soundness that is evident in the way you speak, lead, and live. There is a stability in your walk with God that brings peace, clarity, and strength to those around you.',
      iconKey: 'spiritual',
    },
  ],
}

/** Section 3 — humorous but respectful */
export const funnyMomentsContent = {
  sectionEyebrow: 'Light-hearted truth',
  heading: 'Funny mentor moments',
  intro: 'A few lines that are true — even when they make you smile.',
  quotes: [
    {
      id: 'q1',
      text:
        'You deserve a birthday website because ordinary text messages are too small for your greatness.',
    },
    {
      id: 'q2',
      text: 'I pause to reflect on how intentional you are with me and how you always carry me along in things. What a man.',
    },
    {
      id: 'q3',
      text: 'This was supposed to be simple, but excellence deserves extra.',
    },
    {
      id: 'q4',
      text:
        'If gratitude had a font size, yours would be “slightly too large to fit on one screen” — and I would still try.',
    },
    {
      id: 'q5',
      text:
        'Sometimes I learn from your words. Sometimes I learn from your silence. Both are loud in the best way.',
    },
  ],
}

/**
 * Section 4 — gallery
 * REPLACE each src with your real photos in /public/images/
 */
export const galleryContent = {
  sectionEyebrow: 'Moments',
  heading: 'Memories worth keeping',
  intro: 'A few frames from the journey',
  items: [
    {
      id: 'g1',
      /** REPLACE: mentor-1.jpg */
      src: '/images/mentor-1.jpeg',
      caption: 'A steady voice in noisy seasons',
    },
    {
      id: 'g2',
      src: '/images/mentor-2.jpeg',
      caption: 'Lessons that aged like fine wine',
    },
    {
      id: 'g3',
      src: '/images/mentor-3.jpeg',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g4',
      src: '/images/mentor-4.jpeg',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g5',
      src: '/images/mentor-5.jpeg',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g6',
      src: '/images/pm.jpeg',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g7',
      src: '/images/pm2.jpeg',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g8',
      src: '/images/pm3.jpeg',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g9',
      src: '/images/pm4.jpeg',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g10',
      src: '/images/yooo.jpeg',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g11',
      src: '/images/pmm.png',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g12',
      src: '/images/mentor-7.jpg',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g13',
      src: '/images/mentor-8.png',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g14',
      src: '/images/mentor-9.jpeg',
      caption: 'Gratitude looks like this',
    },
    {
      id: 'g15',
      src: '/images/mentor-10.jpeg',
      caption: 'Gratitude looks like this',
    },
  ],
}

/** Section 5 — faith-centered prayer */
export const prayerContent = {
  sectionEyebrow: 'Faith & hope',
  heading: 'A Prayer from My Heart for You',
  intro: 'Spoken with a grateful heart, deep honor, and sincere prayers for you.',
  lines: [
    "Lord, I thank You for the gift of Daddy Prince, a mentor, a big brother, and someone truly awesome whose life reflects Your grace and goodness.",
    "Thank You because he always wants the best for everyone around him. I pray that You will also give him the very best in all things, in his health, in his work, in his home, in his joy, and in every area of his life.",
    "Bless Daddy Prince, Oko sis Timi B(Lol). Let Your peace, love, protection, and favor rest upon their home in a special way.",
    "Strengthen him in body and spirit. Give him lasting health, deeper peace, renewed joy, and fresh strength for every new season ahead.",
    "Lord, let every good idea, vision, and dream You have placed in his heart be fulfilled. Let them grow, flourish, and thrive beyond expectation.",
    "Grant him wisdom for every decision, clarity for every step, and grace for every responsibility entrusted to him.",
    "Protect his path, enlarge his influence for good, and let his life and legacy continue to bless everyone You have placed around him.",
    "Thank You for the blessing he is to me. I pray that as he has stood for others, he will never lack help, support, love, and honor. And Lord, I will always be here with him, standing in love, gratitude, and support.",
    "Give him long life, divine direction, and many more beautiful years filled with fruitfulness, laughter, peace, and greater intimacy with You.",
    "In Jesus' name, Amen.",
  ],
}

/** Section 6 — honor / tribute */
export const honorContent = {
  sectionEyebrow: 'Words of honor',
  heading: 'Birthday blessings',
  intro: 'A few lines I want you to carry — not as flattery, but as truth.',
  honors: [
    {
      id: 'h1',
      title: 'Thank you for your impact',
      text:
        'You have shifted how I think, how I work, and how I treat people. That is not small — that is generational.',
    },
    {
      id: 'h2',
      title: 'Thank you for being an inspiration',
      text:
        'In a world that celebrates noise, you model substance. I want to grow into that kind of adulthood.',
    },
    {
      id: 'h3',
      title: 'Thank you for the lessons',
      text:
        'For the guidance when I was unsure, the correction when I needed it, and the consistency and support when I did not deserve it.',
    },
    {
      id: 'h4',
      title: 'Thank you for consistency',
      text:
        'Anyone can be impressive once, but what truly sets you apart is your consistency over time. You have been there for me, supporting me, cheering me on, and showing up in ways that really matter. That steady presence has meant so much to me, and it is one of the many reasons I celebrate you.',
    },
  ],
}

/** Section 7 — closing */
export const closingContent = {
  heading: 'One last thing',
  body: [
    'Egbon, you have been more than a mentor to me. You have been a steady source of support, wisdom, and encouragement, and the impact of your care in my life is something I carry deeply',
    'I made this for you with so much gratitude and love because of how you have been there for me since way backkk(it even became more evidence now when you got married, what an intentional family God has blessed me with in you!) you have shown me a kind of love, generosity, and intentional support that I can never overlook or forget.',
    'My prayer for you in this new year is that God honors you, strengthens you, and surrounds you with grace, joy, peace, and the kind of blessings that speak louder than words.',
  ],
  signoff: 'With love and deep appreciation,',
  signature: 'Paul',
  blessingLine: 'May this new year be full of grace and joy.',
  replayLabel: 'Replay the Surprise',
  smileLabel: 'One more smile before you go',
  /** Easter egg — tiny hidden message */
  easterEggMessage: 'Yes sir — Paul really did all this(See you in the states in a bit). 😄',
}
