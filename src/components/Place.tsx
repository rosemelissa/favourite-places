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
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <>
      <img src={props.image.url} alt={props.image.alt} />
      <h2>{props.title}</h2>
      <h3>
        {props.location.placeName}, {props.location.countryName}
      </h3>
      <p>Why I like it:</p>
      <ul>
        <li>{props.description[0]}</li>
        <li>{props.description[1]}</li>
        <li>{props.description[2]}</li>
      </ul>
      <a href={props.mapURL}>Google Maps link</a>
    </>
  );
}

export default Place;
