import { Link } from "../../App";
import "./SocialCard.scss";

export interface SocialCardProps {
  avatar: string;
  name: string;
  location: string;
  description: string;
  links: Link[];
}

const SocialCard = ({
  avatar,
  name,
  location,
  description,
  links,
}: SocialCardProps) => {
  return (
    <div className="socialCard">
      <img src={avatar} alt={name} className="socialCard__avatar" />
      <div className="socialCard__infos">
        <span className="socialCard__infos-name">{name}</span>
        <span className="socialCard__infos-location">{location}</span>
      </div>
      <div className="socialCard__description">{`"${description}"`}</div>
      <div className="socialCard__socials">
        {links.map(({ name, link }) => {
          return (
            <a
              className="socialCard__socials-link"
              href={link}
              target="_blank"
              rel="noreferrer"
              key={name}
            >
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialCard;
