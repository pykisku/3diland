import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Senior Full Stack Developer",
        company_name: "Sterling DCS",
        icon: react,
        iconBg: "#accbe1",
        date: "October 2023 - Present",
        points: [
            "At Sterling, I played a crucial role as a Full Stack Developer in developing and maintaining the Sterling Cost and Carbon estimating platform.",
            "Utilizing my expertise in .NET, NodeJS, React, JavaScript, TypeScript, MartenDB, API, MongoDB, and GraphQL, I actively contributed to the end-to-end development of our SaaS solution." ,
            "I am passionate about building scalable and intuitive software solutions, and I am excited about the opportunity to bring my skills and enthusiasm to a new challenge."
        ],
    },
    {
        title: "AR/VR (XR) Developer",
        company_name: "AirCards Co",
        icon: nodejs,
        iconBg: "#fbc3bc",
        date: "June 2023 - July 2023",
        points: [
            "Ad-hoc Full-Stack Developer support services across a variety of different projects.",
            "This could include a mix of some 3D, AR, Front-end and Back-end support tasks.",
            "I worked as a XR Developer / for web based multi-user XR experience",
        ],
    },
  
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/OzgeToptas',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/adaozge/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'My Little Cute Dexy',
        description: 'I have poured my heart and soul into this project, and now I am thrilled to share it with all of you. The GitHub repository and the link for you to dive in and have some fun are just a click away',
        link: 'https://adaozge.co.uk/dexy',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'My company website',
        description: 'I transformed my company website into a modern masterpiece using the latest technologies such as Next13, React, Tailwind CSS and Framer Motion. I invite you to discover the revamped version, complete with a fascinating introduction video!',
        link: 'https://www.linkedin.com/posts/adaozge_webdevelopment-interactivedesign-threejs-activity-7119707787516895233-5vbZ?utm_source=share&utm_medium=member_desktop',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'My Online CV',
        description: 'I transformed my old online CV into a modern masterpiece using the latest technologies such as Three.js, React, Tailwind CSS and Framer Motion. I invite you to discover the revamped version, complete with a fascinating introduction video!',
        link: 'https://www.linkedin.com/posts/adaozge_webdevelopment-interactivedesign-threejs-activity-7117064096142766080-WGq_?utm_source=share&utm_medium=member_desktop',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: '3D Ada Room Project',
        description: 'On my journey of self-improvement in the world of game art, I have added my beloved Three.js and WebGL alongside Blender. I have also included a small video before the upcoming release. (I am just talking about adding it to github and publishing it on my website) 😉',
        link: 'https://www.linkedin.com/posts/adaozge_threejs-3d-reactjs-activity-7127954202156240896-AuIy?utm_source=share&utm_medium=member_desktop',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Happy Halloween!',
        description: '3D is my passion, and I couldn not resist creating a new character just in time for the upcoming Halloween season. Allow me to introduce you to Witchy! 🎃',
        link: 'https://www.linkedin.com/posts/adaozge_3d-characterdesign-halloween-activity-7118373572711968769-sTLR?utm_source=share&utm_medium=member_desktop',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'My All Projects',
        description: 'I did not bother to write one by one, you can find all my projects here. Of course only the ones I want to share :)',
        link: 'https://github.com/OzgeToptas',
    }
];