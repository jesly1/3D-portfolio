import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    luminar,
    cgi,
    regex2,
    tesla,
    shopify,
    ekartp,
    carrent,
    mediap,
    jobit,
    netflixp,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "React  Developer",
      icon: mobile,
    },
    {
      title: "Angular Developer",
      icon: backend,
    },
    {
      title: "Node JS Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "MEARN full stack Internship Trainee",
      company_name: "Luminar Technolab",
      icon: luminar,
      iconBg: "#383E56",
      date: "september 2023 - March 2024",
      points: [
        "I immersed myself in the dynamic world of MEARN stack development, gaining hands-on experience with key technologies such as React, Angular, Express.js, MongoDB, and Node.js.", 
        "I successfully applied my skills to create responsive and interactive web applications.",
        "In the front-end, I honed my expertise in React and Angular, leveraging their powerful capabilities to design intuitive user interfaces.",
        " Through collaboration with the back-end, powered by Node.js and Express.js, I contributed to the development of robust and scalable server-side logic. "
       
      ],
    },
    {
      title: "Web developer Internship Trainee",
      company_name: "Confederation of Global Innovators(CGI)",
      icon: cgi,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Developed a responsive and feature-rich e-commerce platform using React, integrating smooth navigation, user authentication, and seamless payment processing.",
        " Applied state management techniques for an enhanced user experience."
      ],
    },
    {
      title: "Frontline Campus Ambassdor",
      company_name: "Regex Software Services",
      icon: regex2,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "This role allowed me to bridge the gap between the organization and the student body, fostering a strong connection and collaboration.",
        "Collaborated with student organizations and faculty to ensure successful execution, fostering a positive association between the company and the academic community.",
        "Acted as a liaison between the student community and Regex Software Services, collecting valuable feedback on products and services",
       
      ],
    },
    // {
      // title: "Full stack Developer",
      // company_name: "Meta",
      // icon: meta,
      // iconBg: "#E6DEDD",
      // date: "Jan 2023 - Present",
      // points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-Kart Application",
      description:
        "Demonstrated expertise in cutting-edge technologies, including React, React Bootstrap, and Font Awesome.The application, successfully deployed on Netlify, presented a seamless and responsive e-commerce experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: ekartp,
      source_code_link: "https://github.com/jesly1/Ekart-App",
    },
    {
      name: "Mediaplayer",
      description:
        "Led the design and implementation of the front-end interface for the MediaPlayer Application using React.Effectively utilized Axios to establish communication between the React front end and the JSON-server backend",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Axios",
          color: "green-text-gradient",
        },
        {
          name: "JSON_Server",
          color: "pink-text-gradient",
        },
      ],
      image: mediap,
      source_code_link: "https://github.com/jesly1/Mediaplayer",
    },
    {
      name: "Netflix Clone",
      description:
        " React-based Netflix clone that encapsulates the essence of seamless streaming. Immerse yourself in a visually stunning interface designed to replicate the user experience of the beloved Netflix platform.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Netlify",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: netflixp,
      source_code_link: "https://github.com/jesly1/clone1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };