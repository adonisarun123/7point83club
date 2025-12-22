// New retreat data structure based on 7point83 Club content
export type RetreatKey = "anchor" | "flow" | "forge" | "void" | "convergence";

export interface Retreat {
  id: string;
  key: RetreatKey;
  title: string;
  subtitle: string;
  heroTagline: string;
  duration: string;
  location: string;
  price: string;
  image: string;
  description: string;
  longDescription: string;

  // New structured sections
  trustbar: string[];
  story: {
    eyebrow: string;
    heading: string;
    body: string[];
  };
  outcomes: {
    heading: string;
    bullets: string[];
    note?: string;
  };
  whoFor: string[];
  whoNotFor: string[];
  applicationFlow: {
    heading: string;
    steps: {
      title: string;
      items: string[];
    }[];
  };
  pricing: {
    heading: string;
    body: string[];
    waitlist: string[];
  };
  faq: {
    heading: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  finalCta: {
    heading: string;
    body: string[];
    ctas: {
      label: string;
      href: string;
    }[];
  };

  // Legacy fields for compatibility
  highlights: string[];
  dailyFlow: { time: string; activity: string }[];
  accommodation: string;
  inclusions: string[];
}

export const retreats: Retreat[] = [
  {
    id: "the-anchor",
    key: "anchor",
    title: "The Anchor",
    subtitle: "Foundation | Nervous System Reset",
    heroTagline: "Reset the baseline. Restore the body's capacity to rest.",
    duration: "5-7 Days",
    location: "Undisclosed (Apply to Learn)",
    price: "Apply for Pricing",
    image: "/images/retreat-anchor.jpg",
    description: "A physiological intervention for chronically overstimulated nervous systems. Designed for leaders who are functional but depleted.",
    longDescription: "The Anchor is not a vacation. It is a physiological intervention for chronically overstimulated nervous systems. Designed for leaders and high performers who are functional but depleted, this retreat focuses on lowering baseline stress, restoring circadian rhythm alignment, and reintroducing genuine rest at a biological level.",

    trustbar: [
      "Apply-Only Access",
      "Privacy-Protected Cohorts",
      "Device-Free Environment",
      "HRV Monitoring Available"
    ],

    story: {
      eyebrow: "The Foundation",
      heading: "When rest becomes a skill you've forgotten",
      body: [
        "There is no published itinerary. Anticipation itself is cognitive load. Upon arrival, devices are surrendered and external inputs are deliberately reduced.",
        "Light, sound, pace, and environment are precisely controlled to allow the nervous system to downshift. You will not be asked to perform. Your body will do the work."
      ]
    },

    outcomes: {
      heading: "What Changes",
      bullets: [
        "Resting heart rate begins to normalize",
        "Heart Rate Variability (HRV) increases, indicating improved stress resilience",
        "Sleep onset occurs earlier with deeper REM cycles",
        "Persistent 'wired but tired' sensation softens"
      ]
    },

    whoFor: [
      "Individuals experiencing burnout, chronic stress, or sleep disruption",
      "Leaders who cannot mentally switch off",
      "High performers seeking a biological reset before cognitive or emotional work",
      "Those willing to be device-free"
    ],

    whoNotFor: [
      "Anyone seeking entertainment or stimulation",
      "Those unwilling to surrender devices",
      "People looking for instant transformation without baseline change",
      "First-time retreat participants seeking guidance or activity schedules"
    ],

    applicationFlow: {
      heading: "Application Process",
      steps: [
        {
          title: "Submit Application",
          items: [
            "Complete health and readiness questionnaire",
            "Share your current stress patterns and sleep quality",
            "Indicate preferred dates (if any)"
          ]
        },
        {
          title: "Review & Acceptance",
          items: [
            "Applications reviewed within 48-72 hours",
            "Acceptance based on readiness, not application time",
            "Receive private cohort details, dates, and pricing"
          ]
        },
        {
          title: "Confirmation",
          items: [
            "Secure your spot with deposit",
            "Receive pre-retreat preparation guidelines",
            "Join private cohort communication"
          ]
        }
      ]
    },

    pricing: {
      heading: "Investment",
      body: [
        "Pricing is disclosed in INR after acceptance.",
        "All-inclusive: accommodation, meals, protocols, and support.",
        "Limited to 12-15 participants per cohort."
      ],
      waitlist: [
        "Waitlist priority based on readiness assessment",
        "Early application does not guarantee priority",
        "Cohorts run quarterly"
      ]
    },

    faq: {
      heading: "Common Questions",
      items: [
        {
          q: "Do I need prior meditation or yoga experience?",
          a: "No. The Anchor is designed for complete beginners. The focus is on physiological rest, not performance."
        },
        {
          q: "Will I have access to my phone?",
          a: "Devices are surrendered upon arrival and returned at departure. Emergency contact protocols are in place."
        },
        {
          q: "What if I can't sleep without my phone?",
          a: "This is precisely why you need this retreat. We provide analog alarm clocks and reading materials."
        },
        {
          q: "Is this suitable for severe anxiety or depression?",
          a: "The Anchor supports stress recovery but is not a substitute for clinical treatment. Please consult your healthcare provider."
        }
      ]
    },

    finalCta: {
      heading: "Ready to reset?",
      body: [
        "The Anchor is for those who know they need to stop, but don't know how.",
        "Applications are reviewed individually. Acceptance is based on readiness and fit."
      ],
      ctas: [
        { label: "Apply for The Anchor", href: "/apply?retreat=anchor" },
        { label: "Explore Other Retreats", href: "/retreats" }
      ]
    },

    // Legacy compatibility fields
    highlights: [
      "Device-free environment",
      "Circadian rhythm optimization",
      "HRV monitoring and feedback",
      "Gentle movement and breathwork",
      "Sleep hygiene protocols"
    ],
    dailyFlow: [
      { time: "Variable", activity: "No fixed schedule - rhythm follows natural light cycles" },
      { time: "Morning", activity: "Gentle awakening, sunlight exposure, light movement" },
      { time: "Midday", activity: "Nourishing meals, rest periods, optional nature walks" },
      { time: "Evening", activity: "Downshift protocols, minimal stimulation, early sleep window" }
    ],
    accommodation: "Private rooms in a quiet, natural setting. Designed for sensory reduction and deep rest.",
    inclusions: [
      "All accommodation and meals",
      "Device storage and security",
      "HRV monitoring equipment (optional)",
      "Post-retreat integration guide",
      "Emergency contact protocols"
    ]
  },

  {
    id: "the-flow",
    key: "flow",
    title: "The Flow",
    subtitle: "Expansion | Cognitive Flexibility & Creativity",
    heroTagline: "Restore mental range. Let insight return.",
    duration: "7-10 Days",
    location: "Undisclosed (Apply to Learn)",
    price: "Apply for Pricing",
    image: "/images/retreat-flow.jpg",
    description: "Structured novelty and serious play to reintroduce cognitive flexibility. For minds that feel rigid, repetitive, or creatively blocked.",
    longDescription: "The Flow is designed for minds that feel rigid, repetitive, or creatively blocked. This retreat uses structured novelty, serious play, and embodied problem-solving to reintroduce cognitive flexibility. Activities are not revealed in advance—predictability reinforces mental loops.",

    trustbar: [
      "Creative Profile Screening",
      "Matched Cohorts",
      "Embodied Learning",
      "Zero Lectures"
    ],

    story: {
      eyebrow: "The Expansion",
      heading: "When your mind runs the same loops",
      body: [
        "By introducing safe but unfamiliar movement patterns and non-verbal challenges, the brain is forced out of habitual logic pathways.",
        "This is not play for entertainment. It is play as neurological stimulus. You won't be told what to think—you'll be given conditions that make new thinking inevitable."
      ]
    },

    outcomes: {
      heading: "What Changes",
      bullets: [
        "Faster problem-solving speed",
        "Reduction in mental fog and rumination",
        "Increased sensory acuity",
        "Post-retreat creative output and clarity"
      ]
    },

    whoFor: [
      "Founders, strategists, creators, and decision-makers",
      "Individuals feeling mentally stuck or creatively constrained",
      "Those open to embodied learning and ambiguity",
      "People seeking insight without lectures or coaching"
    ],

    whoNotFor: [
      "Anyone requiring predictability and structure",
      "Those uncomfortable with physical movement or play",
      "Individuals seeking intellectual instruction rather than experience",
      "People unwilling to be surprised"
    ],

    applicationFlow: {
      heading: "Application Process",
      steps: [
        {
          title: "Creative Profile",
          items: [
            "Submit portfolio or work samples (optional)",
            "Describe your current creative challenge",
            "Share your relationship with play and novelty"
          ]
        },
        {
          title: "Cohort Matching",
          items: [
            "Applications reviewed for cognitive style fit",
            "Cohorts matched by creative domain and readiness",
            "Receive acceptance notification with cohort details"
          ]
        },
        {
          title: "Preparation",
          items: [
            "Minimal pre-retreat preparation required",
            "Bring curiosity, not expectations",
            "Comfortable movement clothing recommended"
          ]
        }
      ]
    },

    pricing: {
      heading: "Investment",
      body: [
        "Pricing disclosed in INR after acceptance.",
        "Includes all activities, meals, and materials.",
        "Limited to 10-12 participants per cohort."
      ],
      waitlist: [
        "Waitlist access for fit-matched applicants",
        "Cohorts run 3-4 times per year",
        "Priority given to creative professionals in transition"
      ]
    },

    faq: {
      heading: "Common Questions",
      items: [
        {
          q: "What kind of 'play' are we talking about?",
          a: "Think improvisation, movement puzzles, spatial challenges, and collaborative problem-solving. Nothing childish, everything challenging."
        },
        {
          q: "Do I need to be physically fit?",
          a: "Moderate mobility is helpful, but activities are adaptable. This is about mental flexibility, not athletic performance."
        },
        {
          q: "Will there be any traditional workshops or talks?",
          a: "No. The Flow is experience-first. Insight comes from doing, not listening."
        },
        {
          q: "Can I bring my own creative project to work on?",
          a: "You can, but you won't have dedicated work time. The retreat is designed to create conditions for breakthrough, not execution."
        }
      ]
    },

    finalCta: {
      heading: "Ready to break the pattern?",
      body: [
        "The Flow is for those who know they're capable of more, but feel trapped in familiar thinking.",
        "Applications are reviewed for creative fit and readiness."
      ],
      ctas: [
        { label: "Apply for The Flow", href: "/apply?retreat=flow" },
        { label: "Explore Other Retreats", href: "/retreats" }
      ]
    },

    highlights: [
      "Structured novelty protocols",
      "Non-verbal problem-solving",
      "Movement-based learning",
      "Cohort creative synergy",
      "Zero predictability"
    ],
    dailyFlow: [
      { time: "Variable", activity: "Schedule changes daily to prevent pattern recognition" },
      { time: "Morning", activity: "Movement challenges, spatial puzzles, improvisation" },
      { time: "Afternoon", activity: "Collaborative problem-solving, embodied learning" },
      { time: "Evening", activity: "Reflection, integration, optional sharing circles" }
    ],
    accommodation: "Shared and private spaces designed for creative collaboration and solo reflection.",
    inclusions: [
      "All accommodation and meals",
      "Materials and equipment for activities",
      "Cohort matching and facilitation",
      "Post-retreat integration session",
      "Access to alumni creative network"
    ]
  },

  {
    id: "the-forge",
    key: "forge",
    title: "The Forge",
    subtitle: "Resilience | Anti-Fragility Training",
    heroTagline: "Capacity under pressure is trained, not imagined.",
    duration: "7-14 Days",
    location: "Undisclosed (Apply to Learn)",
    price: "Apply for Pricing",
    image: "/images/retreat-forge.jpg",
    description: "Controlled stressors and deliberate recovery. Cold exposure, fasting, and silence within strict safety boundaries to train adaptation.",
    longDescription: "The Forge introduces controlled, short-duration stressors followed by deliberate recovery. This is not about extremes—it is about precision. Cold exposure, load-bearing movement, fasting windows, and silence are applied within strict safety boundaries to train adaptation at the physiological and psychological level.",

    trustbar: [
      "Medical Screening Required",
      "Safety-First Protocols",
      "Professional Supervision",
      "Small Cohorts (8-10)"
    ],

    story: {
      eyebrow: "The Resilience",
      heading: "When comfort becomes a cage",
      body: [
        "Protocols are not disclosed in advance to prevent mental rehearsal. Real resilience is built through real-time adaptation.",
        "You will be challenged, but never endangered. Every stressor is measured, timed, and followed by structured recovery. This is training, not punishment."
      ]
    },

    outcomes: {
      heading: "What Changes",
      bullets: [
        "Faster stress recovery",
        "Improved emotional regulation under pressure",
        "Increased pain tolerance",
        "Greater cardiovascular efficiency potential"
      ]
    },

    whoFor: [
      "Leaders operating in high-pressure environments",
      "Individuals seeking resilience rather than comfort",
      "Those medically fit for controlled adversity",
      "People interested in capacity-building, not bravado"
    ],

    whoNotFor: [
      "Anyone with untreated medical or psychological conditions",
      "Individuals seeking luxury without challenge",
      "Those chasing extremes or ego validation",
      "People unwilling to follow strict safety protocols"
    ],

    applicationFlow: {
      heading: "Application Process",
      steps: [
        {
          title: "Health Screening",
          items: [
            "Complete comprehensive health questionnaire",
            "Disclose cardiovascular, respiratory, and psychological history",
            "Provide recent medical clearance if applicable"
          ]
        },
        {
          title: "Readiness Assessment",
          items: [
            "Phone or video interview to assess mental readiness",
            "Review of current stress management practices",
            "Acceptance based on safety and fit"
          ]
        },
        {
          title: "Pre-Retreat Preparation",
          items: [
            "Receive specific preparation protocols",
            "Gradual cold exposure practice recommended",
            "Nutrition and hydration guidelines provided"
          ]
        }
      ]
    },

    pricing: {
      heading: "Investment",
      body: [
        "Pricing disclosed in INR after acceptance.",
        "Includes medical supervision, all protocols, and recovery support.",
        "Strictly limited to 8-10 participants for safety."
      ],
      waitlist: [
        "Waitlist maintained for qualified applicants",
        "Cohorts run 2-3 times per year",
        "Medical clearance required before confirmation"
      ]
    },

    faq: {
      heading: "Common Questions",
      items: [
        {
          q: "Is this safe?",
          a: "Yes. All protocols are supervised by trained professionals. Medical screening is mandatory, and safety ratios are strictly maintained."
        },
        {
          q: "How cold is the cold exposure?",
          a: "Temperatures and durations are individualized based on experience and tolerance. We start conservatively and progress safely."
        },
        {
          q: "What if I can't complete a protocol?",
          a: "You are always in control. You can pause or opt out of any activity. This is about building capacity, not proving toughness."
        },
        {
          q: "Do I need prior experience with fasting or cold exposure?",
          a: "No, but it helps. We provide gradual progression and education throughout the retreat."
        }
      ]
    },

    finalCta: {
      heading: "Ready to build capacity?",
      body: [
        "The Forge is for those who want to expand what they're capable of, not prove what they already are.",
        "Applications require medical screening and readiness assessment."
      ],
      ctas: [
        { label: "Apply for The Forge", href: "/apply?retreat=forge" },
        { label: "Explore Other Retreats", href: "/retreats" }
      ]
    },

    highlights: [
      "Cold exposure protocols",
      "Fasting windows (optional)",
      "Load-bearing movement",
      "Silence periods",
      "Recovery optimization"
    ],
    dailyFlow: [
      { time: "Variable", activity: "Protocols vary daily to prevent adaptation" },
      { time: "Morning", activity: "Cold exposure, breathwork, movement challenges" },
      { time: "Midday", activity: "Recovery protocols, nutrition, rest" },
      { time: "Afternoon", activity: "Load-bearing activities, optional fasting windows" },
      { time: "Evening", activity: "Silence, reflection, recovery optimization" }
    ],
    accommodation: "Functional, minimalist accommodations designed for recovery and rest.",
    inclusions: [
      "All accommodation and meals",
      "Medical supervision and safety equipment",
      "Cold exposure facilities",
      "Recovery protocols and support",
      "Post-retreat resilience plan"
    ]
  },

  {
    id: "the-void",
    key: "void",
    title: "The Void",
    subtitle: "Transcendence | Silence & Clarity",
    heroTagline: "Silence is not absence. It is signal.",
    duration: "10-21 Days",
    location: "Undisclosed (Apply to Learn)",
    price: "Apply for Pricing",
    image: "/images/retreat-void.jpg",
    description: "Noble Silence: no speaking, devices, reading, or eye contact. The most advanced protocol for those who can sit with themselves fully.",
    longDescription: "The Void is the most advanced protocol at 7point83 Club. This retreat follows Noble Silence: no speaking, no devices, no reading, no eye contact. By removing external inputs—auditory, visual, social—the mind is allowed to reorganize. What remains is signal without noise.",

    trustbar: [
      "Experience Required",
      "Extremely Limited Acceptance",
      "Absolute Confidentiality",
      "No Guidance or Coaching"
    ],

    story: {
      eyebrow: "The Transcendence",
      heading: "When noise becomes unbearable",
      body: [
        "There is no coaching, guidance, or reassurance. This is a container for those who can sit with themselves fully.",
        "You will face everything you've been avoiding. The retreat does not provide answers—it provides the conditions for you to find them yourself."
      ]
    },

    outcomes: {
      heading: "What Changes",
      bullets: [
        "Heightened clarity on life and leadership decisions",
        "Emotional integration and release",
        "Reduced dependence on stimulation",
        "Renewed sensitivity to simple experiences"
      ]
    },

    whoFor: [
      "Leaders at major decision thresholds",
      "Individuals experienced with solitude and silence",
      "Those seeking clarity without external input",
      "Participants comfortable without guidance"
    ],

    whoNotFor: [
      "First-time retreat participants",
      "Anyone currently experiencing acute instability",
      "Individuals uncomfortable with silence or isolation",
      "Those seeking coaching, therapy, or instruction"
    ],

    applicationFlow: {
      heading: "Application Process",
      steps: [
        {
          title: "Experience Verification",
          items: [
            "Demonstrate prior retreat or meditation experience",
            "Describe your relationship with silence and solitude",
            "Share what you're seeking from this experience"
          ]
        },
        {
          title: "Readiness Interview",
          items: [
            "In-depth conversation about psychological readiness",
            "Assessment of current life circumstances and stability",
            "Review of expectations and container agreements"
          ]
        },
        {
          title: "Acceptance & Preparation",
          items: [
            "Extremely limited acceptances per cohort",
            "Receive detailed preparation guidelines",
            "Sign confidentiality and consent agreements"
          ]
        }
      ]
    },

    pricing: {
      heading: "Investment",
      body: [
        "Pricing disclosed in INR after acceptance.",
        "Includes all accommodation, meals, and container support.",
        "Limited to 6-8 participants per cohort."
      ],
      waitlist: [
        "Waitlist maintained for qualified, experienced applicants",
        "Cohorts run 1-2 times per year",
        "Acceptance based on experience and readiness, not timing"
      ]
    },

    faq: {
      heading: "Common Questions",
      items: [
        {
          q: "What happens in an emergency?",
          a: "Silent emergency protocols are in place. Staff are present and observant. You can signal for help at any time."
        },
        {
          q: "Can I leave early if it's too intense?",
          a: "Yes, but we encourage you to sit with discomfort first. Early departure is always an option."
        },
        {
          q: "Is this a meditation retreat?",
          a: "No. There is no formal meditation instruction. This is a container for silence, not a technique."
        },
        {
          q: "How do I know if I'm ready?",
          a: "If you're asking this question, you might not be. The Void is for those who know they need it."
        }
      ]
    },

    finalCta: {
      heading: "Ready to face the silence?",
      body: [
        "The Void is not for everyone. It is for those who have exhausted external solutions and are ready to turn inward.",
        "Applications are reviewed with extreme care. Acceptance is rare."
      ],
      ctas: [
        { label: "Apply for The Void", href: "/apply?retreat=void" },
        { label: "Explore Other Retreats", href: "/retreats" }
      ]
    },

    highlights: [
      "Noble Silence (no speaking, devices, reading, eye contact)",
      "Minimal external input",
      "Self-directed practice",
      "Emergency protocols in place",
      "Post-retreat integration support"
    ],
    dailyFlow: [
      { time: "All Day", activity: "Noble Silence - no fixed schedule" },
      { time: "Morning", activity: "Silent meals, personal practice, walking meditation" },
      { time: "Afternoon", activity: "Solitude, rest, self-inquiry" },
      { time: "Evening", activity: "Silent meals, early rest, darkness" }
    ],
    accommodation: "Private, isolated accommodations designed for complete solitude and silence.",
    inclusions: [
      "All accommodation and meals",
      "Silent container support",
      "Emergency protocols and staff presence",
      "Post-retreat integration session",
      "Lifetime confidentiality"
    ]
  },

  {
    id: "the-convergence",
    key: "convergence" as RetreatKey,
    title: "The Convergence",
    subtitle: "Biennial | Community Synchronization",
    heroTagline: "Isolation repairs the individual. Synchronization repairs the collective.",
    duration: "3 Days (Every 2 Years)",
    location: "Undisclosed (Apply to Learn)",
    price: "Apply for Pricing",
    image: "/images/retreat-convergence.jpg",
    description: "A large-scale community gathering for collective synchronization. The only large-scale retreat, held once every two years.",
    longDescription: "The 7.83 Convergence is the only large-scale gathering hosted by 7point83 Club. While all other retreats are intentionally small and inward-facing, the Convergence is about collective synchronization. This is not a festival. It is not a conference. It is a temporary village designed to recalibrate the individual through shared rhythm, shared silence, and shared presence.",

    trustbar: [
      "Once Every 2 Years",
      "Alumni Priority",
      "Large-Scale Coherence",
      "Invite or Apply-Only"
    ],

    story: {
      eyebrow: "The Biennial Gathering",
      heading: "When the collective needs recalibration",
      body: [
        "Held once every two years, the Convergence brings together past participants and approved applicants across all four protocols—Anchor, Flow, Forge, and Void—into a single, carefully structured, three-day experience.",
        "For three days, the nervous system experiences what regulated tribal living feels like. No hierarchy. No titles. No stages. Just shared rhythm, shared silence, and shared presence."
      ]
    },

    outcomes: {
      heading: "What Changes",
      bullets: [
        "Sustained reduction in loneliness post-event",
        "Heightened trust and openness with others",
        "Emotional release without catharsis or drama",
        "A felt sense of 'being part of something' without obligation",
        "Increased calm in social environments for weeks or months afterward"
      ],
      note: "Outcomes vary by individual baseline and readiness."
    },

    whoFor: [
      "Alumni of 7point83 retreats seeking reconnection",
      "Leaders who operate in isolation and want regulated community",
      "Individuals curious about collective coherence without chaos",
      "People who value depth over entertainment"
    ],

    whoNotFor: [
      "Those seeking a festival, party, or networking event",
      "Anyone uncomfortable in large groups without structure",
      "People needing constant stimulation or personal attention",
      "Individuals unwilling to surrender devices for extended periods"
    ],

    applicationFlow: {
      heading: "Application & Selection",
      steps: [
        {
          title: "Access Routes",
          items: [
            "Invitation to past retreat participants",
            "Application with readiness screening",
            "Cohort balancing for energy, experience, and stability"
          ]
        },
        {
          title: "Priority Criteria",
          items: [
            "Prior retreat alumni receive priority",
            "Demonstrated emotional regulation and self-responsibility",
            "Alignment with non-performative nature of gathering"
          ]
        },
        {
          title: "Acceptance & Waitlist",
          items: [
            "Pricing shared only after acceptance",
            "If capacity reached, priority waitlist opened",
            "Placement based on fit, not timestamp"
          ]
        }
      ]
    },

    pricing: {
      heading: "Investment",
      body: [
        "Pricing disclosed in INR after acceptance.",
        "Varies by logistics and location.",
        "No early-bird discounts or public tiers.",
        "Large cohort size, but capped to protect coherence."
      ],
      waitlist: [
        "Priority waitlist for qualified applicants",
        "Held once every 2 years",
        "Alumni receive priority access"
      ]
    },

    faq: {
      heading: "Common Questions",
      items: [
        {
          q: "Do I need to have attended a retreat before?",
          a: "Prior participation in a 7point83 retreat is preferred but not mandatory. Demonstrated readiness and alignment with our protocols is essential."
        },
        {
          q: "How is this different from a festival or conference?",
          a: "The Convergence is not entertainment or networking. It's a temporary village focused on collective nervous system regulation through shared rhythm and silence."
        },
        {
          q: "What does 'collective synchronization' mean?",
          a: "Through shared practices like synchronized breathing, movement, and extended silence, participants experience physiological and emotional coherence at scale."
        },
        {
          q: "Will there be speakers or workshops?",
          a: "No public schedule, no speaker list, no digital agenda. The experience is about embodied presence, not information consumption."
        },
        {
          q: "How large is the gathering?",
          a: "Large enough to create collective field effects, but capped to maintain coherence. Exact numbers are not disclosed publicly."
        }
      ]
    },

    finalCta: {
      heading: "Ready to experience collective coherence?",
      body: [
        "The internet connects minds. The Convergence reconnects nervous systems.",
        "For three days, the noise drops. The signal rises. And people remember what regulated humanity feels like."
      ],
      ctas: [
        { label: "Apply for The Convergence", href: "/apply?retreat=convergence" },
        { label: "Explore Other Retreats", href: "/retreats" }
      ]
    },

    highlights: [
      "Collective grounding practices",
      "Extended shared silence",
      "Synchronized movement & sound",
      "Temporary village living",
      "No hierarchy or stages"
    ],
    dailyFlow: [
      { time: "Day 1", activity: "Arrival, collective grounding, circadian alignment" },
      { time: "Day 2", activity: "Shared silence, synchronized movement, temporary village living" },
      { time: "Day 3", activity: "Integration practices, closing rituals, departure" }
    ],
    accommodation: "Temporary village-style accommodations designed for community living while maintaining personal space.",
    inclusions: [
      "All accommodation and meals",
      "Collective practices and facilitation",
      "Safety teams and protocols",
      "Post-event integration resources",
      "Alumni network access"
    ]
  }
];
