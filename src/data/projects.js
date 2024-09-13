import galleria from "@/assets/images/galleria.png";
import artbymaudsch from "@/assets/images/artbymaudsch.png";
import ageCalculator from "@/assets/images/age-calculator.png";
import tipCalculator from "@/assets/images/tip-calculator.png";
import eCommerceProductPage from "@/assets/images/e-commerce-product-page.png";
import restCountriesApp from "@/assets/images/rest-countries-app.png";
import rockPaperScissorsGame from "@/assets/images/rock-paper-scissors-game.png";
import todoReactApp from "@/assets/images/todo-react-app.png";
import ReactIcon from "@/assets/icons/React";
import NextjsIcon from "@/assets/icons/Nextjs";

const projects = [
  {
    title: "Galleria | An Unsplash clone",
    image: galleria,
    link: "https://galleria-unsplash-clone.vercel.app/",
    description:
      "Developed a website using Next.js where users can browse and download images from photographers and view their profiles. Integrated the Unsplash API to access a wide range of high-quality images.",
    year: 2024,
    platformIcon: NextjsIcon,
  },
  {
    title: "artbymaudsch | An E-Commerce website clone",
    image: artbymaudsch,
    link: "https://artbymaudsch-clone.vercel.app/",
    description:
      "Developed a Next.js-based clone of the e-commerce website ArtbyMaudsch, showcasing an online platform for purchasing artwork. The project replicates key features like product listings, shopping cart functionality, and a user-friendly interface.",
    year: 2024,
    platformIcon: NextjsIcon,
  },
  {
    title: "Age Calculator App",
    image: ageCalculator,
    link: "https://age-calculator-app-sukhdeep.vercel.app/",
    description:
      "Completed a Frontend Mentor challenge by building an age calculator app using React.js. The app accurately calculates and displays a user’s age based on their input, with a clean and responsive user interface.",
    year: 2024,
    platformIcon: ReactIcon,
  },
  {
    title: "Tip Calculator App",
    image: tipCalculator,
    link: "https://tip-calculator-app-sukhdeep.vercel.app/",
    description:
      "Built a tip calculator app using React.js for a Frontend Mentor challenge. The app allows users to quickly calculate tip amounts based on the bill and tip percentage, featuring a simple and intuitive interface.",
    year: 2024,
    platformIcon: ReactIcon,
  },
  {
    title: "Rest Countries App",
    image: restCountriesApp,
    link: "https://rest-countries-app-sukhdeep.vercel.app/",
    description:
      "Built a Rest Countries app using React.js for a Frontend Mentor challenge. It uses the REST Countries API to show details about countries like population, region, and capital, with a clean and easy-to-use interface.",
    year: 2024,
    platformIcon: ReactIcon,
  },
  {
    title: "E-Commerce Product Page",
    image: eCommerceProductPage,
    link: "https://e-commerce-product-page-sukhdeep.vercel.app/",
    description:
      "Created an e-commerce product page for a Frontend Mentor challenge. The page features product details, image galleries, and interactive elements, designed with a focus on user experience and responsiveness.",
    year: 2024,
    platformIcon: ReactIcon,
  },
  {
    title: "Rock Paper Scissors Game",
    image: rockPaperScissorsGame,
    link: "https://rock-paper-scissors-game-sukhdeep.vercel.app/",
    description:
      "Built a Rock Paper Scissors game where users can play against the computer. It features an easy-to-use interface with real-time results.",
    year: 2023,
    platformIcon: ReactIcon,
  },
  {
    title: "Todo React App",
    image: todoReactApp,
    link: "https://todo-app-sukhdeep.vercel.app/",
    description: "Created a Todo list app that lets users add, check off, and delete tasks. The app features a straightforward design for easy task management.",
    year: 2022,
    platformIcon: ReactIcon,
  },
];

export default projects;
