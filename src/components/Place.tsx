interface Location {
    placeName: string;
    countryName: string;
}

interface PlaceProps {
    title: string;
    location: Location;
    imageURL: string;
    mapURL: string;
    description: string;
}

function Place(props: PlaceProps): JSX.Element {
    return (
        <>
            <img src={props.imageURL} />
            <h2>{props.title}</h2>
            <h3>{props.location.placeName}, {props.location.countryName}</h3>
            <p>{props.description}</p>
            <a href={props.mapURL}>Google Maps link</a>
        </>
    )
}