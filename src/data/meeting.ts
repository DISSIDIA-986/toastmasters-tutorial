export const meetingSteps = [
  { id: 1, title: "Opening & Introductions", description: "Meet and greet, round table introductions, and introduction of meeting support roles (Timer, Grammarian, Ah-Counter)", icon: "🎯" },
  { id: 2, title: "Prepared Speeches", description: "Typically 3 speakers deliver 5-7 minute speeches based on their Pathways projects, with evaluators providing feedback after each speech", icon: "📝" },
  { id: 3, title: "Table Topics", description: "Impromptu speaking practice where the Table Topics Master poses interesting questions and members respond on the spot (1-2 minutes each)", icon: "💡" },
  { id: 4, title: "Evaluations & Reports", description: "Table Topics Evaluator provides feedback, General Evaluator summarizes the meeting, and support roles (Timer, Grammarian, Ah-Counter) share their observations", icon: "💬" },
  { id: 5, title: "Closing", description: "Guest comments, announcements, recognition of achievements, and meeting adjournment", icon: "🏆" }
];

export const meetingRoles = [
  {
    title: "Toastmaster of the Meeting",
    description: "The meeting's host and conductor. Welcomes attendees, introduces speakers and their projects, maintains the meeting schedule, and ensures smooth transitions between segments.",
    responsibilities: ["Welcome attendees and set the meeting tone", "Introduce each speaker and their Pathways project", "Keep the meeting flowing on schedule", "Fill time gaps and maintain positive energy"],
    benefits: ["Leadership skills", "Hosting and presentation abilities", "Confidence building", "Event management"],
    icon: "👑"
  },
  {
    title: "Prepared Speaker",
    description: "Delivers a 5-7 minute speech based on your Pathways project, applying specific speaking techniques and seeking feedback from evaluators.",
    responsibilities: ["Prepare and practice your speech thoroughly", "Deliver your presentation with confidence", "Apply techniques from your Pathways project", "Accept feedback graciously and implement suggestions"],
    benefits: ["Overcome fear of public speaking", "Develop presentation skills", "Build confidence", "Apply leadership communication techniques"],
    icon: "🎤"
  },
  {
    title: "Table Topics Master",
    description: "Leads the impromptu speaking session by asking thought-provoking questions that members answer on the spot, creating a fun and supportive atmosphere.",
    responsibilities: ["Prepare interesting and thought-provoking topics", "Invite participants to speak spontaneously", "Keep responses within 1-2 minute time limits", "Create an encouraging and positive atmosphere"],
    benefits: ["Creative thinking", "Quick thinking and adaptability", "Leadership in group dynamics", "Facilitation skills"],
    icon: "💭"
  },
  {
    title: "Evaluator (Speech Evaluator)",
    description: "Provides constructive feedback on a speaker's presentation, highlighting strengths and offering specific suggestions for improvement in a 2-3 minute evaluation.",
    responsibilities: ["Listen carefully to the assigned speech", "Note specific strengths and areas for improvement", "Deliver a structured 2-3 minute evaluation", "Use the Commend-Recommend-Commend structure"],
    benefits: ["Critical thinking", "Communication skills", "Constructive feedback delivery", "Mentoring ability"],
    icon: "📊"
  },
  {
    title: "Table Topics Evaluator",
    description: "Provides feedback on impromptu speakers' Table Topics responses, recognizing their quick thinking and areas for improvement.",
    responsibilities: ["Observe Table Topics responses carefully", "Provide feedback on impromptu speaking", "Recognize strong quick-thinking moments", "Offer constructive suggestions"],
    benefits: ["Observation skills", "Feedback expertise", "Recognition of strengths", "Mentoring abilities"],
    icon: "�"
  },
  {
    title: "General Evaluator",
    description: "Oversees the evaluation team and provides feedback on the entire meeting, including meeting flow, logistics, and overall effectiveness.",
    responsibilities: ["Evaluate the evaluators' performances", "Comment on meeting flow and organization", "Note what went well and improvement areas", "Lead and coordinate the evaluation team"],
    benefits: ["Strategic thinking", "Leadership and team coordination", "Comprehensive analysis skills", "Big-picture perspective"],
    icon: "🎯"
  },
  {
    title: "Timer",
    description: "Tracks time for each speaker and role, providing visual signals (green, yellow, red) to help speakers stay within time limits and manage their presentations effectively.",
    responsibilities: ["Time all speakers and reports accurately", "Display timing signals at appropriate intervals", "Provide a comprehensive timing report", "Help speakers develop time management skills"],
    benefits: ["Time management mastery", "Attention to detail", "Responsibility and accountability", "Precision in execution"],
    icon: "⏱️"
  },
  {
    title: "Ah-Counter",
    description: "Counts filler words and sounds (um, ah, like, you know) and unnecessary repetitions, helping speakers become aware of and eliminate speech habits.",
    responsibilities: ["Track filler words and unnecessary sounds", "Note specific speakers and frequency", "Provide a detailed report with examples", "Help speakers develop cleaner speech patterns"],
    benefits: ["Linguistic awareness", "Observation skills", "Speech pattern recognition", "Supportive coaching"],
    icon: "👂"
  },
  {
    title: "Grammarian",
    description: "Introduces a 'Word of the Day,' tracks its usage throughout the meeting, and notes excellent language use or grammatical improvements.",
    responsibilities: ["Select and introduce an interesting Word of the Day", "Track and note usage of the word", "Recognize excellent vocabulary and phrasing", "Comment on grammar and language improvements"],
    benefits: ["Language mastery", "Vocabulary expansion", "Attention to detail", "Teaching and mentoring"],
    icon: "�"
  }
];