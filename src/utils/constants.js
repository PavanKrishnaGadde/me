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


export const timelineData = [
    {
        id: 1,
        position: 'Applications Engineer at Oracle',
        time:'Septemer 2021 - present',
        description: 'I\'m working as full stack developer in Oracle Cloud Infrastructure team. My work includes building responsive applications using react framwork in front and RESTful micro-services in backend using SpringBoot framework.'
    },
    {
        id: 2,
        position: 'Associate Software Engineer at Amdocs',
        time:'July 2019 - Septemer 2021',
        description: 'I worked as full stack developer in digital team of Amdocs. My work includes building responsive applications using react framwork in front and RESTful APIs in backend using SpringBoot framework. I also good knowledge in using continous deployment and integration tools like perforce and jenkins'
    },
    {
        id: 3,
        position: 'Internship at SanDisk',
        time:'May 2018 - July 2018',
        description: 'I have done summer intership at SanDisk (Western Digital) as a Software and Hardware Intern in the Systems Design team. My major part work was on python and Verilog. I designed an application for fault detection and performance analysis'
    },
    {
        id: 4,
        position: 'Bachelor of Technology at NIT Warangal',
        time:'2015 - 2019',
        description: 'I am pursuing my under-graduation studies with major in E.C.E (Electronics & Communication Engineering). I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.I have also been part of S.B.G.(Student Body Govenance) scince my first year of college.'
    },
    {
        id: 5,
        position: 'Primary and Higher Education',
        time:'2003 - 2015',
        description: 'I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 98.6 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.'
    },

]

export const aboutData = [
    {
        id: 1,
        heading: 'Web Development',
        description: 'I have experience building websites and chrome extentions using JavaScript, React, HTML, CSS, Spring Boot, Hibernate, SQL',
        iconName: 'icon-bulb',
        iconColour: 'color-1'
    },
    {
        id: 2,
        heading: 'Data Structures & Algorithms',
        description: 'I have good knowledge over fundamental concepts of DSA and will always be enthusiastic to apply those concepts to solve real world problems',
        iconName: 'icon-phone3',
        iconColour: 'color-3'
    },
    {
        id: 3,
        heading: 'Machine Learning',
        description: 'I have a good understanding of various topics of machine learning. I have published a research paper on deep learning in TENCON 2019 IEEE Conference',
        iconName: 'icon-data',
        iconColour: 'color-5'
    }
]

export const introData = [
    {
        id: 1,
        introLine1: 'Hi! ',
        introLine2: 'I\'m Pavan',
        backgroundImage: 'url(images/pavan32.PNG)',
        buttonLabel: 'View CV',
        buttonLink: 'https://drive.google.com/file/d/168vIxEhan6dr0wkqBEl0K32bcxnrIS1l/view?usp=sharing',
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