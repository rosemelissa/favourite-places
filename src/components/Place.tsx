import { PlaceProps } from "../utils/interfaces";

function Place(props: PlaceProps): JSX.Element {
  return (
    <div className="place" id={props.id.slice(1)}>
      <h2>{props.title}</h2>
      <h3>
        {props.location.placeName}, {props.location.countryName}
      </h3>
      <img src={props.image.url} alt={props.image.alt} />
      <p>Why I like it:</p>
      <ul>
        <li>{props.description[0]}</li>
        <li>{props.description[1]}</li>
        <li>{props.description[2]}</li>
      </ul>
      <a href={props.mapURL}>Google Maps link</a>
    </div>
  );
}

export default Place;
