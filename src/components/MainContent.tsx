import Place from "./Place";
import { PlaceProps } from "../utils/interfaces";

const placesArray: PlaceProps[] = [
  {
    title: "Bathwick fields",
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
  },
];

function MainContent(): JSX.Element {
  return <>{placesArray.map(Place)}</>;
}

export default MainContent;
