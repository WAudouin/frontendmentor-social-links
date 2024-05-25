import "./App.css";
import avatar from "./assets/images/avatar.jpg";
import SocialCard from "./components/SocialCard/SocialCard";

export interface Link {
  name: string;
  link: string;
}

const socialLinks: Link[] = [
  {
    name: "GitHub",
    link: "https://github.com/WAudouin",
  },
  {
    name: "Frontend Mentor",
    link: "https://www.frontendmentor.io/profile/WAudouin",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wilfreed-audouin/",
  },
  {
    name: "Twitter",
    link: "https://x.com/",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/",
  },
];

function App() {
  return (
    <div className="main">
      <SocialCard
        avatar={avatar}
        name="Wilfreed Audouin"
        location="Niort, France"
        description="Front-end developer and avid sports viewer."
        links={socialLinks}
      />
    </div>
  );
}

export default App;
