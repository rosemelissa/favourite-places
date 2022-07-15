import { PlaceProps } from "../utils/interfaces";

function Navbar(props: PlaceProps): JSX.Element {
  return (
    <li>
      <a href={props.id}>{props.title}</a>
    </li>
  );
}

export default Navbar;
