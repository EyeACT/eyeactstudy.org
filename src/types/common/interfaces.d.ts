interface HeroContent {
  title: string;
  image: string;
  goal?: string;
  imageAlt?: string;
  tagline?: string;
  showButtons?: boolean;
  primaryButton?: string;
  secondaryButton?: string;
}

interface TextContent {
  title: string;
  text: string;
  showButtons?: boolean;
  primaryButton?: string;
}

interface TextWithImagesContent {
  title: string;
  text: string[];
  image1: string;
  image2: string;
}

interface EventItem {
  slug: string;
  timeToRead: number;

  frontMatter: {
    title: string;
    startDateTime: string;
    endDateTime: string;
    heroImage: string;
    subtitle: string;
    location: string;
    type: string;
    timezone: string;
  };

  content: string;
}

interface EventsLayoutProps {
  eventList: EventItem[];
}
