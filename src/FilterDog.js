import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const FilterDog = (dogs) => {
  const { name } = useParams();
  if (name) {
    const CurrentDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dogs={CurrentDog} />;
  }

  return null;
};

export default FilterDog;
