import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Binian Gadol",
    description: "A very big building!",
    imgageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wikipedia-logo-v2-en.svg",
    address: "Jump st. 21 new ashton",
    location: {
      lat: 32.834722,
      lng: -83.651667,
    },
    creator: "u1",
  },

  {
    id: "p2",
    title: "Binian Gadol",
    description: "A very big building!",
    imgageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wikipedia-logo-v2-en.svg",
    address: "Jump st. 21 new ashton",
    location: {
      lat: 32.834722,
      lng: -83.651667,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
