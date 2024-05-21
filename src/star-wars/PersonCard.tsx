import React from "react";
import gravatar from "gravatar";

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

interface PersonCardProps {
  person: Person;
  imageUrl: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  person: {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
  },
}) => {
  const email = name.replace(/\s/gu, ".") + "@starwars.com";

  const src = gravatar.url(email, {
    s: "150",
    d: "retro",
  });

  return (
    <div className="card bg-gray-700 border border-yellow-300 rounded-md min-w-[600px] min-h-[60px] flex p-5 gap-5">
      <div className="image-container">
        <img
          alt={name}
          src={src}
          className="object-cover h-full w-auto rounded-md"
        />
      </div>
      <div className="card-info flex flex-col text-left">
        <div className="info-text text-yellow-300 font-sans">
          {" "}
          {/* Added font-sans for apple-system */}
          <h2 className="text-white font-bold text-3xl">{name}</h2>{" "}
          {/* Name with white text */}
          <ul className="text-white">
            {" "}
            {/* Labels with gray text */}
            <li>Height: {height} cm</li>
            <li>Mass: {mass} kg</li>
            <li>Hair Color: {hair_color}</li>
            <li>Skin Color: {skin_color}</li>
            <li>Eye Color: {eye_color}</li>
            <li>Birth Year: {birth_year}</li>
            <li>Gender: {gender}</li>
            <li>
              Homeworld:{" "}
              {homeworld && (
                <a href={homeworld} target="_blank" rel="noreferrer">
                  Link
                </a>
              )}
            </li>
            {/* <li>
                Films: {films.length > 0 ? films.join(', ') : 'None'}
              </li>
              <li>
                Species: {species.length > 0 ? species.join(', ') : 'Unknown'}
              </li>
              <li>
                Vehicles: {vehicles.length > 0 ? vehicles.join(', ') : 'None'}
              </li>
              <li>
                Starships: {starships.length > 0 ? starships.join(', ') : 'None'}
              </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
