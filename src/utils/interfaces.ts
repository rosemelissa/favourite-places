interface Location {
  placeName: string;
  countryName: string;
}

interface Image {
  url: string;
  alt: string;
}

interface PlaceProps {
  title: string;
  location: Location;
  image: Image;
  mapURL: string;
  description: [string, string, string];
  id: string;
  mapEmbed: string;
}

export type { Location, Image, PlaceProps };
