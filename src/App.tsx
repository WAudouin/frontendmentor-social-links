import "./App.css";
import avatar from "./assets/images/avatar-jessica.jpeg";
import SocialCard from "./components/SocialCard/SocialCard";

export interface Link {
  name: string;
  link: string;
}

const socialLinks: Link[] = [
  {
    name: "GitHub",
    link: "https://github.com/",
  },
  {
    name: "Frontend Mentor",
    link: "https://frontendmentor.io/",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/",
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
        name="Jessica Randall"
        location="London, United Kingdom"
        description="Front-end developer and avid reader."
        links={socialLinks}
      />
    </div>
  );
}

export default App;
