// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import LogoArgentBank from "./images/argentBankLogo.png";
import LogoNina from "./images/nina.jpg";
import LogoKasa from "./images/p8.png";
import LogoBluel from "./images/p6.png";
import LogoPrint from "./images/print.png";
import LogoFood from "./images/ohmyfood.png";
import LogoBooki from "./images/booki.png";
import Logo77Events from "./images/77events.png";

// Hero Images (add your images to the /images directory with the same names)
import LightValley from "./images/valley.jpg";
import DarkWay from "./images/night.jpg";
// If you change the import names above then you need to change the export names below
export { LightValley as Light };
export { DarkWay as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "MorganDourdoigne";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Je suis un développeur web passionné, fraîchement diplômé d’une formation intensive. J’ai acquis une solide expérience en JavaScript et développé une expertise dans l’utilisation de React et Redux pour créer des applications web interactives et performantes.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
   {
    id: 6,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 7,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 8,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["argent-bank", "Projet-9", "Projet-8", "Projet-6", "Projet-5", "Projet-4", "Projet_3", "Projet-10"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "argent-bank",
    image: LogoArgentBank,
  },
  {
    name: "Projet-9",
    image: LogoNina,
  },
  {
    name: "Projet-8",
    image: LogoKasa,
  },
  {
    name: "Projet-6",
    image: LogoBluel,
  },
  {
    name: "Projet-5",
    image: LogoPrint,
  },
  {
    name: "Projet-4",
    image: LogoFood,
  },
  {
    name: "Projet_3",
    image: LogoBooki,
  },
  {
    name: "Projet-10",
    image: Logo77Events,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mzblwrea";
