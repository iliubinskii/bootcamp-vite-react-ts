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
  person: { name, height, mass, birth_year, gender },
}) => {
  const email = name.replace(/\s/gu, ".") + "@starwars.com";

  const src = gravatar.url(email, {
    s: "150",
    d: "retro",
  });

  return (
    <div className="card rounded-md min-w-[600px] min-h-[300px] flex">
      <div className="image-container">
        <img
          alt={name}
          src={src}
          className="object-cover h-full w-auto rounded-l-md"
        />
      </div>
      <div className="card-info flex flex-col text-left pt-5 pl-4">
        <div className="text-white">
          <p className="card-title">{name}</p>
          <div className="card-after-title flex items-center">
            <span
              className={`inline-flex rounded-full h-2 w-2 mr-2 ${
                gender === "male"
                  ? "bg-blue-500"
                  : gender === "female"
                  ? "bg-pink-500"
                  : "bg-gray-400"
              }`}
            >
              {/* Add content for the icon here, e.g., an SVG or Tailwind utility class */}
            </span>
            <p>Gender - {gender}</p>
          </div>
          <ul>
            <li>
              <span className="card-description">
                Height:
                <br />
              </span>
              {height} cm
            </li>
            <li>
              <span className="card-description">
                Mass:
                <br />
              </span>
              {mass} kg
            </li>
            <li>
              <span className="text-gray-400">
                Birth Year:
                <br />
              </span>
              {birth_year}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
