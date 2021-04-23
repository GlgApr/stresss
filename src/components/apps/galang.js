import React, { Component } from "react";
import ReactGA from "react-ga";

export class AboutGalang extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      education: <Education />,
      skills: <Skills />,
      projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.pageview(`/${screen}`);

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <div>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="about galang"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Galang' education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Galang' skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Galang' projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="Galang's resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen ubuntu-font">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutGalang;

export const displayAboutGalang = () => {
  return <AboutGalang />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <img
          className="w-full"
          src="./images/logos/xixi.jpg"
          alt="Galang Aprilian Logo"
        />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          Hello, my name is <span className="font-bold">Galang Aprilian</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a <span className="text-pink-600 font-bold">Web Developer!</span>
        </div>
      </div>
      <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc">
          I'm a graduate of{" "}
          <span className=" font-medium">Informatics Engineering</span> from the
          National Institute Technology of Malang{" "}
          <a href="https://www.itn.ac.id/" rel="noreferrer" target="_blank">
            Malang, Indonesia
          </a>
        </li>
        <li className=" mt-3 list-building">
          {" "}
          I enjoy building awesome softwares that solve practical problems.
        </li>
        <li className=" mt-3 list-time">
          {" "}
          When I am not coding my next project, I like to spend my time reading
          tech news especially piracy , finish my course or watching{" "}
          <a
            href="https://www.youtube.com/channel/UC8wZnXYK_CGKlBcZp-GxYPA"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            NeuralNine's videos.
          </a>
        </li>
        <li className=" mt-3 list-star">
          {" "}
          And I also have interest in Blockchain, Deep Learning & Computer
          Vision!
        </li>
      </ul>
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            National Institute Technology of Malang - ITN MALANG
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2017 - 2021</div>
          <div className=" text-sm md:text-base">
            Computer Science & Engineering
          </div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            GPA &nbsp; 3.55/4.00
          </div>
        </li>
        <li className="list-disc mt-5">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Class 12<sup>th</sup> (Pvocational High School)
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2013 - 2016</div>
          <div className=" text-sm md:text-base">Multimedia, Informatics</div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            Location &nbsp; Tanjung Selor, Indonesia
          </div>
        </li>
      </ul>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          I've worked with a wide variety of programming languages & frameworks.
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise are{" "}
            <strong className="text-ubt-gedit-orange">
              Front-end Development, Back-end development, FullStack
              Development, & Computer Vision!
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
              alt="galang javascript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
              alt="galang c++"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
              alt="galang python"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"
              alt="galang dart"
            />
            <a
              href="https://www.google.com/search?q=is+html+a+language%3F"
              target="_blank"
              rel="noreferrer"
            >
              <img
                title="yes it's a language! haha!"
                className="m-1"
                src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff"
                alt="galang HTML"
              />
            </a>
            <img
              src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
              alt="galang php"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
              alt="galang git"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
              alt="galang codeigniter"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white"
              alt="galang flutter"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
              alt="galang tailwind css"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="galang bootstrap css"
            />
            <img
              src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
              alt="galang jquery"
              className="m-1"
            />
          </div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span> And ofcourse,</span>{" "}
          <img
            className=" inline ml-1"
            src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"
            alt="galang windows"
          />{" "}
          <span>!</span>
        </li>
      </ul>
    </>
  );
}

function Projects() {
  const project_list = [
    {
      name: "Ikomez",
      date: "Mar 2021",
      link: "https://github.com/GlgApr/TokoPaedi-LupaBapak-Store",
      description: [
        "A Open-Source E-Commerce Website, build with JS, PHP, and integrate with Payment Gateway!",
      ],
      domains: ["laravel", "vue-js", "midtrans", "sentry"],
    },
    {
      name: "System Information Digital Printing in Malang",
      date: "Feb 2021",
      link: "https://github.com/GlgApr/SIPO",
      description: [
        "System Information about Digital Printing Service in Malang City, Indonesian.",
      ],
      domains: ["Codeigniter", "MySQL", "Bootstrap"],
    },
    {
      name: "Detection Masker Using Haar Cascade Metode with OpenCV Python",
      date: "Jan 2021",
      link: "https://github.com/GlgApr/",
      description: ["My contribution for fighting covid-19."],
      domains: ["python", "haar-cascade"],
    },
    {
      name: "Grafika Computer",
      date: "Dec 2020",
      link: "https://github.com/GlgApr/Belajar-Grafika-Komputer",
      description: [
        "All of my Project with C++ implementation on Grafika Computer.",
      ],
      domains: ["c++", "gl"],
    },
    {
      name: "Delphi Project",
      date: "Nov 2019",
      link: "https://github.com/GlgApr/All-Delphi-Projects",
      description: ["All of my Project with Delphi."],
      domains: ["Delphi", "MySQL", "AlphaSkin"],
    },
    {
      name: "Image Processing Matlab",
      date: "Sep 2029",
      link: "https://github.com/GlgApr/Image-Processing-with-Matlab",
      description: ["All of my Project on Image Processing with Matlab."],
      domains: ["matlab", "image-processing"],
    },
    {
      name: "TM2GD",
      date: "Okt 2019",
      link: "https://github.com/GlgApr/TorrentMega2GoogleDrive",
      description: [
        "Telegram bot for mirroring downloading torrent, mega.nz, direct link, streaming service (youtube, etc) and uploading to Team/Shared Drive on Google Drive",
      ],
      domains: ["python", "aria2"],
    },
  ];

  const tag_colors = {
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    html5: "pink-600",
    sass: "pink-400",
    tensorflow: "yellow-600",
    django: "green-600",
    python: "green-200",
    "codeforces-api": "gray-300",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      {project_list.map((project, index) => {
        return (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex w-full flex-col px-4"
          >
            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
              <div className="flex flex-wrap justify-between items-center">
                <div className=" text-base md:text-lg">
                  {project.name.toLowerCase()}
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                {project.description.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc mt-1 text-gray-100">
                      {desc}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-2">
                {project.domains
                  ? project.domains.map((domain, index) => {
                      let tag_color = tag_colors[domain];
                      return (
                        <span
                          key={index}
                          style={{ borderWidth: "1pt" }}
                          className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}
                        >
                          {domain}
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/Galang-Aprilian-Resume.pdf"
      title="Galang Aprilian Resume"
      frameBorder="0"
    ></iframe>
  );
}
