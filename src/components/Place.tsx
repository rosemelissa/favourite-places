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
      <iframe
        src={props.mapEmbed}
        title={props.title}
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Place;
