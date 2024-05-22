import React from "react";
import PersonCard from "./PersonCard";

export interface Person {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

interface PersonsCatalogueProps {
  people: Person[]; // Assuming your card data structure
  imageUrl: string; // Path to the image (from App.tsx)
}

const PersonsCatalogue: React.FC<PersonsCatalogueProps> = ({
  people,
  imageUrl,
}) => {
  return (
    <div className="p-5 flex flex-col items-center w-full">
      <div className="flex flex-row flex-wrap gap-5">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} imageUrl={imageUrl} /> // Pass imageUrl and spread card props
        ))}
      </div>
    </div>
  );
};

export default PersonsCatalogue;
