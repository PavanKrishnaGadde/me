import blog1 from '../images/blog1.jpg';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import click1 from '../images/click1.PNG';
import click2 from '../images/click2.PNG';
import click3 from '../images/click3.PNG';
import click4 from '../images/click4.PNG';
import click5 from '../images/click5.PNG';
import click6 from '../images/click6.PNG';

export const photographyData = [
    {
        id: 1,
        name: 'Art Work',
        imageUrl: click6,
    },
    {
        id: 2,
        name: 'Sunset',
        imageUrl: click1,
    },
    {
        id: 3,
        name: 'Martyrs',
        imageUrl: click2,
    },
    {
        id: 4,
        name: 'Matri Mandir',
        imageUrl: click3,
    },
    {
        id: 5,
        name: 'French Colony',
        imageUrl: click4,
    },
    {
        id: 6,
        name: 'Lotus',
        imageUrl: click5,
    }
]


export const blogData = [
    {
        id: 1,
        name: 'THE FUTURE',
        blogName: 'TECHNOZION',
        date: 'September 22, 2018',
        refUrl: 'https://blog.technozion.org/the-future/',
        imageUrl: blog1,
        description: 'What it is to meet the future? Do you think its doing space travel in a time machine, meeting future self and feeling astounding? It is all fictional which is not the engineers perspective. Meeting the future is not going in search of it, its essentially creating it'
    },
    {
        id: 2,
        name: 'GOING FOR GOLD',
        blogName: 'TECHNOZION',
        date: 'October 6, 2017',
        refUrl: 'https://blog.technozion.org/the-future/',
        imageUrl: blog2,
        description: '"GOLD IS A VALUABLE METAL.". Yes, we all know that.But whom should we appreciate for that metal? If we just rejoinder it as Mother Earth then we will be called as biased.'
    },
    {
        id: 3,
        name: 'Science as a hobby',
        blogName: 'SNH BLOG',
        date: 'December 9, 2018 ',
        refUrl: 'https://snhblog.home.blog/2018/12/09/science-as-a-hobby-art-of-life/',
        imageUrl: blog3,
        description: 'Science isn’t just a subject in College. It’s a part of our everyday lives. Science may be an integral part of your life and you may not even realize it. Science is all around us – it’s in our homes, the vehicles we drive, outside in nature and in the foods we eat. '
    }
]

export const profileLinks = {
    facebook: 'https://www.facebook.com/PavanKrishnaGadde',
    instagram: 'https://www.instagram.com/pavan_krishna._/',
    twitter: 'https://twitter.com/pkgadde',
    linkedin: 'https://www.linkedin.com/in/pavankrishnagadde/',
    github: 'https://github.com/PavanKrishnaGadde'
}


export const experienceData = [
    {
        id: 1,
        position: 'Applications Engineer at Oracle',
        time:'Septemer 2021 - present',
        descriptions: [
            'Developed various features in Open Storefront Framework (OSF), including server-side rendering, CLI tooling, SEO, configurable widgets using JS, React and nodeJS, and state management using Redux, along with creating unit tests in Jest to ensure robust and error-free code.',
            'Contributed to the development of design studio, which is a low-code platform with a drag-and-drop UI for creating page layouts. Developed multiple APIs to support the platform’s functionality using Java and Oracle ATG.',
            'Worked on multiple POCs to create diverse UI components, optimize caching using Redis, and explore innovative solutions in Generative AI-related projects.'
        ]
    },
    {
        id: 2,
        position: 'Associate Software Engineer at Amdocs',
        time:'July 2019 - Septemer 2021',
        descriptions: [
            'Contributed to the development of self-service and retail portals for telecommunications clients, utilizing React, Redux, and Adobe Experience Manager.',
            'Spearheaded the development of a critical change plan flow for a Customer Service Agent Application, working with a UK-based telecommunication client.',
            'Developed APIs for telecommunications self-service workflows, utilizing Java and the Spring framework to seamlessly integrate and consolidate data from multiple systems, including Amdocs CRM, Order Management System(OMS), and Billing, ensuring efficient data flow across platforms.'
        ]
    },
    {
        id: 3,
        position: 'Internship at SanDisk',
        time:'May 2018 - July 2018',
        descriptions: ['Developed an SD Protocol Packet parser to parse all SD protocol data packets exchanged between an SD host and SD card (memory card), eliminating the need for external parsing tools and reducing overall costs for the project.']
    }
]

export const educationData = [
    {
        id: 1,
        position: 'Bachelor of Technology - NIT Warangal',
        time:'2015 - 2019',
        descriptions: ['secured 7.67 CGPA']
    },
    {
        id: 2,
        position: 'Intetermediate - Sasi Junior College',
        time:'2013 - 2015',
        descriptions: ['secured 98.6%', 'AIR 2159 in JEE Mains 2015', 'State Rank 419 in AP EAMCET 2015']
    },
    {
        id: 3,
        position: 'SSC - Vidya Vikas School',
        time:'2013',
        descriptions: ['secured 9.7 GPA']
    }
]

export const aboutData = [
    {
        id: 1,
        heading: 'Frontend Development',
        descriptions: ['I have strong expertise in frontend development, particularly with React, Redux, and JavaScript, along with a solid foundation in HTML and CSS. I’ve worked extensively on building intuitive and high-performance user interfaces for self-service and retail portals, and I’m comfortable using frameworks like Adobe Experience Manager.', 'I’ve implemented complex features such as search filters, interactive tables, and data visualizations, and have successfully led key UI projects, including the integration of CPQ systems and critical workflows for customer applications. My focus is always on delivering responsive, user-friendly solutions, and I take pride in my adaptability and technical proficiency in frontend development.'],
        iconName: 'icon-document',
        iconColour: 'color-1'
    },
    {
        id: 2,
        heading: 'Backend Development',
        descriptions: ['I have substantial experience in backend development, primarily working with Java and Oracle ATG. I have developed custom APIs for telecommunications workflows, using the Spring framework to integrate data from various systems like Amdocs CRM, Order Management System (OMS), and Billing. I am skilled at extending core APIs and creating new ones to meet specific client requirements.', 'Additionally, I have worked with Spring Boot in side projects, which has given me a solid understanding of its architecture. My focus on seamless integration and optimized performance allows me to ensure efficient data flow and functionality across different platforms.'],
        iconName: 'icon-server',
        iconColour: 'color-2'
    },
    {
        id: 3,
        heading: 'Networking & Databases',
        descriptions: ['I have a strong understanding of the networks that connect various components in a system, including frontend applications, backend application servers, and databases. I’m well-versed in how these systems communicate and interact to ensure smooth data flow and performance.', 'Additionally, I have a solid grasp of Database Management Systems (DBMS), including key concepts like ACID properties, relationships, constraints, and how they impact the integrity and efficiency of database operations. This knowledge enables me to design and maintain robust, reliable systems that integrate all components effectively.'],
        iconName: 'icon-wi-fi',
        iconColour: 'color-3'
    },
    {
        id: 4,
        heading: 'System design and Architecture',
        descriptions: ['I possess a deep understanding of designing and developing large-scale systems capable of handling millions of users daily. I specialize in building highly optimized frontend applications that load rapidly, driving customer satisfaction and engagement. On the backend, I ensure systems scale efficiently to manage millions of concurrent requests per second. I am adept at optimizing data storage across various databases, leveraging replicas and caches to boost read performance, while maintaining consistency across distributed systems without sacrificing availability. Furthermore, I effectively employ asynchronous processes to handle non-critical tasks, enhancing system speed and scalability.'],
        iconName: 'icon-news2',
        iconColour: 'color-4'
    },
    {
        id: 5,
        heading: 'Machine Learning',
        descriptions: ['I have a solid foundation in various machine learning concepts, which I’ve deepened through academic research. I published a research paper on deep learning, which was presented at the prestigious TENCON 2019 IEEE Conference. My passion for machine learning drives me to continuously explore innovative solutions and stay current with the latest advancements in the field. I am also actively exploring generative AI tools, leveraging large language models (LLMs) to address complex challenges in the projects I’m currently working on.'],
        iconName: 'icon-chart-pie',
        iconColour: 'color-5'
    },
    {
        id: 6,
        heading: 'Data Structures and Algorithms (DSA)',
        descriptions: ['I have a strong grasp of fundamental concepts in Data Structures and Algorithms and am always enthusiastic about applying these principles to solve real-world problems. My problem-solving approach is driven by a solid understanding of algorithmic efficiency and data handling, which I incorporate into my work to develop optimized and scalable solutions.'],
        iconName: 'icon-code',
        iconColour: 'color-6'
    },
]

export const introData = [
    {
        id: 1,
        introLine1: 'Hi! ',
        introLine2: 'I\'m Pavan',
        backgroundImage: 'url(images/pavan32.PNG)',
        buttonLabel: 'View Resume ',
        buttonLink: 'https://drive.google.com/file/d/11jgIzdh2ogjmOjfkAJgTZZ1Q0C_OdO9-/view?usp=sharing',
        buttonIcon: 'icon-download4'
    },
    {
        id: 2,
        introLine1: 'I love building',
        introLine2: 'THINGS !!',
        backgroundImage: 'url(./images/pavan6.PNG)',
        buttonLabel: 'View Projects',
        buttonLink: 'https://github.com/PavanKrishnaGadde',
        buttonIcon: 'icon-briefcase3'
    },
    {
        id: 3,
        introLine1: 'I often ',
        introLine2: 'Write ...',
        backgroundImage: 'url(images/pavan22.PNG)',
        buttonLabel: 'View Blog ',
        buttonLink: 'https://snhblog.home.blog/',
        buttonIcon: 'icon-book'
    }
]