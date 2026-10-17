/**
 * Traditional Tamil Valaikappu Invitation Configuration
 * Authoritative source for all ceremonial text, date, venue, audio, and map links.
 */

export interface EventDetailsConfig {
  title: string;
  subtitle: string;
  invitationMessage: string;
  bride: {
    name: string;
    qualification: string;
    role: string;
  };
  groom: {
    name: string;
    qualification: string;
    role: string;
  };
  eventDateText: string;
  eventDayTimeText: string;
  fullDateISO: string; // 25 October 2026
  startDate: Date;
  endDate: Date;
  venue: {
    label: string;
    name: string;
    street: string;
    town: string;
    fullAddress: string;
    mapsUrl: string;
  };
  audio: {
    youtubeVideoId: string;
    title: string;
    youtubeUrl: string;
    defaultVolume: number;
  };
  video: {
    src: string;
    title: string;
    description: string;
  };
  uiLabels: {
    openInvitation: string;
    skipIntro: string;
    playMusic: string;
    pauseMusic: string;
    eventDetails: string;
    venueHeading: string;
    viewDirections: string;
    openGoogleMaps: string;
    scanOrTapQR: string;
    addToCalendar: string;
    downloadICS: string;
    shareInvitation: string;
    shareWhatsApp: string;
    copyLink: string;
    copiedNotice: string;
    replayOpening: string;
    loading: string;
    musicError: string;
    openSong: string;
    coupleBlessing: string;
    blessingsTitle: string;
    sendBlessing: string;
    rsvpTitle: string;
    rsvpYes: string;
    guestNamePlaceholder: string;
    guestBlessingPlaceholder: string;
    blessingSentSuccess: string;
    watchVideo: string;
    playVideo: string;
    pauseVideo: string;
    muteVideo: string;
    unmuteVideo: string;
    fullScreen: string;
    viewFullCard: string;
    close: string;
    countdownTitle: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    guestsCount: string;
    brideBadge: string;
    groomBadge: string;
  };
}

export const INVITATION_DATA: EventDetailsConfig = {
  title: "வளைகாப்பு விழா!",
  subtitle: "மங்கல திருவிழா",
  invitationMessage: "தாய்மையின் இனிய பயணத்தில் ஒரு அழகான தருணம் எங்கள் வளைகாப்பு விழாவிற்கு அன்புடன் அழைக்கிறோம்!",
  bride: {
    name: "சு. சுபமதி",
    qualification: "B.E.,",
    role: "மணமகள்",
  },
  groom: {
    name: "லெ. முரளிதரன்",
    qualification: "DCE., BBA.,",
    role: "மணமகன்",
  },
  eventDateText: "வருகிற அக்டோபர் 25ம் தேதி",
  eventDayTimeText: "ஞாயிற்றுக்கிழமை காலை 11:00 மணி முதல் 12:00 வரை நடைபெற உள்ளது.",
  fullDateISO: "2026-10-25T11:00:00+05:30",
  startDate: new Date("2026-10-25T11:00:00+05:30"),
  endDate: new Date("2026-10-25T12:00:00+05:30"),
  venue: {
    label: "நிகழ்விடம்:",
    name: "ஆறுமுக நாவலர் நிலையம்",
    street: "மாலைகட்டி தெரு",
    town: "சிதம்பரம்",
    fullAddress: "ஆறுமுக நாவலர் நிலையம், மாலைகட்டி தெரு, சிதம்பரம்.",
    mapsUrl: "https://maps.app.goo.gl/R3uA7Aarg9AJAoVH8",
  },
  audio: {
    youtubeVideoId: "SiORnQvqA98",
    title: "தாய்மை பாடல் (Thaimai Song)",
    youtubeUrl: "https://youtu.be/SiORnQvqA98?si=hNfxSve-R3hvhcHX",
    defaultVolume: 70,
  },
  video: {
    src: "/invitation-video.mp4",
    title: "வளைகாப்பு விழா வீடியோ அழைப்பிதழ்",
    description: "சுபமதி & முரளிதரன் வளைகாப்பு விழா சிறப்பு வீடியோ அழைப்பிதழ்",
  },
  uiLabels: {
    openInvitation: "Open Invitation",
    skipIntro: "Direct View",
    playMusic: "Play Music",
    pauseMusic: "Pause Music",
    eventDetails: "Event Details",
    venueHeading: "Ceremony Venue",
    viewDirections: "Get Directions",
    openGoogleMaps: "Open in Google Maps",
    scanOrTapQR: "Tap or Scan QR for Google Maps",
    addToCalendar: "Add to Calendar",
    downloadICS: "Download iCal / Outlook",
    shareInvitation: "Share Invitation",
    shareWhatsApp: "Share via WhatsApp",
    copyLink: "Copy Link",
    copiedNotice: "Invitation link copied to clipboard!",
    replayOpening: "Replay Curtain Reveal",
    loading: "Loading...",
    musicError: "Unable to play audio. Tap to listen on YouTube.",
    openSong: "Listen on YouTube",
    coupleBlessing: "தாயும் சேயும் நலம் பெற வாழ்த்துகிறோம்",
    blessingsTitle: "Guest Blessings & RSVP",
    sendBlessing: "Send Blessing",
    rsvpTitle: "RSVP Confirmation",
    rsvpYes: "Will attend with joy",
    guestNamePlaceholder: "Your Full Name",
    guestBlessingPlaceholder: "Write your heartfelt blessing...",
    blessingSentSuccess: "Your blessing has been shared with the family!",
    watchVideo: "Watch Video Invitation",
    playVideo: "Play Video",
    pauseVideo: "Pause Video",
    muteVideo: "Mute",
    unmuteVideo: "Unmute",
    fullScreen: "Full Screen",
    viewFullCard: "View Full Card",
    close: "Close",
    countdownTitle: "Countdown to Ceremony",
    days: "Days",
    hours: "Hours",
    minutes: "Mins",
    seconds: "Secs",
    guestsCount: "Number of Guests:",
    brideBadge: "Bride",
    groomBadge: "Groom",
  },
};
