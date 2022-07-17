import Place from "./Place";
import { PlaceProps } from "../utils/interfaces";
import Navbar from "./Navbar";

const placesArray: PlaceProps[] = [
  {
    title: "Bathwick Fields",
    location: { placeName: "Bath", countryName: "UK" },
    image: {
      url: "https://lh3.googleusercontent.com/yhJpwB0eT4STImGgzA0u-9U6VHBk8Nu4ct08u_CUEAiNTcZBlg033VlgXuU3Tobvp5njQkAJOhxDFCB8p2v2vZFjxupduTnl3Pkj8sFJeJ1f7BG-W4jTdsWqM4fqYwWdyCoWAPJMVrs=w2400",
      alt: "Landscape of cloudy skies over a historical city centre, taken from a green hill.",
    },
    mapURL: "https://goo.gl/maps/ZaC5qhGDUTm3GQLY9",
    description: [
      "Beatiful views",
      "Wild rabbits",
      "Part of the Bath Skyline walk",
    ],
    id: "#bathwick-fields",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4384.0176913790165!2d-2.3458841600594225!3d51.376706308468805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487181a798319f4b%3A0x841b28819c1f2e97!2sBath%20Skyline!5e0!3m2!1sen!2suk!4v1658080940449!5m2!1sen!2suk",
  },
  {
    title: "Port Meadow",
    location: { placeName: "Oxford", countryName: "UK" },
    image: {
      url: "https://lh3.googleusercontent.com/q8o7BtHV8p6slQfQGXfoAR_QWizf2h6-uDATylSsgrQERAfYAdtKpdnrH2kl3q7hVFre5lH8GJ6RmAs4eqLbJhZfoDDnOtOakpxn_FJMwHAmXcbBST5b0ENMHbnzGBTGPY87r-sy8Cw=w2400",
      alt: "Grey skies and an orange sunset reflected in a lake",
    },
    mapURL: "https://goo.gl/maps/pgH2LLWywin6XZBw5",
    description: ["Beautiful sunsets", "Ponies", "Great for walks"],
    id: "#port-meadow",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.8830262713245!2d-1.2872741843536497!3d51.77174557967939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c4303b556f1f%3A0xe05f8b081a42329a!2sPort%20Meadow%2C%20Oxford!5e0!3m2!1sen!2suk!4v1658081614165!5m2!1sen!2suk",
  },
  {
    title: "Worcester College Dance Studio",
    location: { placeName: "Oxford", countryName: "UK" },
    image: {
      url: "https://lh3.googleusercontent.com/dX5DBOfWvHkgmeSUM2R23ct_L4drIxYFVzcAsIbhkNT4MEUq02kDkHvV04ObhNQUkkh0Mt1LUYkifXALDdnoUmCNn2dyykaSYvOfz87F6gFrOd1zNbRc-eD3HbksUPPn7C7qwZOuWgE=w2400",
      alt: "5 girls posing in front of a mirror in a dance studio.",
    },
    mapURL: "https://goo.gl/maps/dSCAZfdLQLrMj9VYA",
    description: [
      "Home to my best memories from uni",
      "Spent time there with amazing people",
      "Great place for dancing to Kpop",
    ],
    id: "#worcester-college-dance-studio",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8065231046853!2d-1.2654438843543334!3d51.75486137967652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a3d962436f%3A0x568b10070f0ce99d!2sWorcester%20College!5e0!3m2!1sen!2suk!4v1658081680896!5m2!1sen!2suk",
  },
  {
    title: "Madrid",
    location: { placeName: "Madrid", countryName: "Spain" },
    image: {
      url: "https://lh3.googleusercontent.com/H1sgHmp6DxSoSdvBPwE8rZeNDKBrrVE8slpwjS0xbeB0UBbjpG8scmemtLVMjXne8QoeGqwKlwwbTUh9Uz7UPRsDbJCOD_gDayOl4IOhiwyHrCbc8AGDgQU5n9CztYafqx3Kc-HpfM0=w2400",
      alt: "Lake filled with rowing boats, with a stone statue and greenery behind it",
    },
    mapURL: "https://goo.gl/maps/3jCpCio4bMpChqpi9",
    description: [
      "Incredible gothic architecture",
      "Fantastic art galleries",
      "Warm and sunny",
    ],
    id: "#madrid",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18882.827253614534!2d-3.6997783968734588!3d40.415385289559026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289ff511827b%3A0x9e6c2716b524a3ae!2sEl%20Retiro%20Park!5e0!3m2!1sen!2suk!4v1658081748376!5m2!1sen!2suk",
  },
];

function MainContent(): JSX.Element {
  return (
    <>
      <ul>{placesArray.map(Navbar)}</ul>
      {placesArray.map(Place)}
    </>
  );
}

export default MainContent;
