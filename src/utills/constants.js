import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import LeetCodeWhite from "../assets/LeetCodeWhite.svg";
import LeetCodeBlack from "../assets/LeetCodeBlack.svg";
export const getAccounts = (mode) => {
  let leetCodeImage = mode === "dark" ? LeetCodeWhite : LeetCodeBlack;
  return [
    {
      name: "GitHub",
      link: "https://github.com/Vinayak097",
      icon: (
        <GitHubIcon
          sx={{ fontSize: 30, color: mode === "light" ? "#212121" : "white" }}
        />
      ),
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/leetrank/",
      icon: (
        <img
          style={{ width: 30, height: 30 }}
          src={leetCodeImage}
          alt="LeetCode"
        />
      ),
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/vinay721",
      icon: <LinkedInIcon sx={{ fontSize: 30, color: "#0072b1" }} />,
    },
    {
      name: "Twitter",
      link: "https://x.com/VInay78138/",
      icon: <TwitterIcon sx={{ fontSize: 30, color: "#00acee" }} />,
    },
    
  ];
};

export const ProjectDetails = [
  {
    name: "Blog-site",
    image:
      "https://res.cloudinary.com/dtxmdxizu/image/upload/fl_preserve_transparency/v1718342130/blogsnipe_gaq8kj.jpg?_s=public-apps",
    websiteLink: "https://blogging-app-seven-psi.vercel.app/",
    gitHubLink: "https://github.com/Vinayak097/bloging_app",

    about:
      "A Designed a user-friendly interface allowing users to create,blog posts & add , Built with React and Node.js, utilizing RESTful APIs for seamless integration with the back-end server .",
  },
  {
    name: "Todo-app",
    image:
      "https://res.cloudinary.com/dtxmdxizu/image/upload/v1718342429/todosnip_zmtsjy.png",
    websiteLink: "https://frontendtodo-tau.vercel.app/",
    gitHubLink: "https://github.com/Vinayak097/frontendtodo.git",

    about:
    "Designed and developed a pastel theme to-do app with CRUD functionality with React, Express.js and MongoDB , Implemented pagination and categories for better user experience , Utilized bootstrap components to create visually appealing and accessible UI components"

  },
  {
    name: "paytm",
    image:
      "images/paytmsnip.png",
    websiteLink: "https://res.cloudinary.com/dtxmdxizu/image/upload/v1718342492/paytmsnip_rgn8xs.png",
    gitHubLink: "https://github.com/Vinayak097/paytmsmproject.git",

    about:
      "Designed and developed a payment website to send and receive dummy money codes with React,Express.js and MongoDB  Implemented a secure end-to-end payment system by leveraging MongoDB’s database transactions  Utilized Bcrypt encryption to hash and salt user credentials,for securing sensitive user credentials",
  },
  

  
];

export const Skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Bootstrap",
  "Material UI",
  "Axios",
  "Node.js",
  "Express.js",
  "Postman",
  "postgresSQL",
  "PrismaORM",
  "MongoDB",
  "Nextjs" ,
  "RESTful APIs",
  "Git",
  
  "GitHub",
  "grpc",
  "Vercel",
];
