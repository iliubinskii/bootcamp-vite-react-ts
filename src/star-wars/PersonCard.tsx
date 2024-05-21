import React from "react";

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
  return (
    <div className="card bg-gray-900 border border-yellow-300 rounded-md min-w-96 min-h-48 max-w-md">
      <img alt={name} className="card-image" />
      <div className="card-info p-4 flex flex-col">
        <div className="info-text text-yellow-300">
          <h2>{name}</h2>
          <ul>
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
