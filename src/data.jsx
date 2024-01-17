import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa'
import { FiFileText, FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

import Work1 from './assets/project-1.png'
import Work2 from './assets/project-2.png'
// import Work3 from './assets/project-3.jpeg'
// import Work4 from './assets/project-4.jpeg'
// import Work5 from './assets/project-5.jpg'
// import Work6 from './assets/project-6.jpg'

import Theme1 from './assets/purple.png'
import Theme2 from './assets/red.png'
import Theme3 from './assets/blueviolet.png'
import Theme4 from './assets/blue.png'
import Theme5 from './assets/goldenrod.png'
import Theme6 from './assets/magenta.png'
import Theme7 from './assets/yellowgreen.png'
import Theme8 from './assets/orange.png'
import Theme9 from './assets/green.png'
import Theme10 from './assets/yellow.png'

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
]

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Khan',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Rizwan',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '26 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'India',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Not-Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description:
      'No.113,M,K.Lala Compound,,60 Feet Road,, Mahim[],,Mumbai,Maharashtra-400017',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '7666047240',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'super047240@mail.com',
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'steve.milner',
  // },

  {
    id: 10,
    title: 'Langages : ',
    description: 'hindi, English',
  },
]

export const stats = [
  {
    id: 1,
    no: '0',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '2+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '0',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '0',
    title: ' Awards <br /> Won',
  },
]

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '0000',
    title: '----',
    desc: '----',
    // year: '2018 - PRESENT',
    // title: 'Web Developer <span> Envato </span>',
    // desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '0000',
    title: '----',
    desc: '----',
    // year: '2013 - 2018',
    // title: 'UI/UX Designer <span> Themeforest </span>',
    // desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '0000',
    title: '----',
    desc: '----',
    // year: '2005 - 2013',
    // title: 'Consultant <span> Videohive </span>',
    // desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    // title:
    //   'Diploma Mechanical Engineering <span> H.J  Theem College of Engineering </span>',
    // desc: 'University of Mumbai',
    title:
      "BscIT (persuing)<span>ANJUMAN-I-ISLAM'S AKBAR PEERBHOY COLLEGE</span>",
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'HSC (SCI) <span> ARYAN JUNIOR COLLEGE </span>',
    desc: 'Maharashtra State Board Of Secondary and Higher Secondary Education,Pune',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2013',
    title: 'SCC <span> ST.ANTHONY HIGH SCHOOL </span>',
    desc: 'Maharashtra State Board Of Secondary and Higher Secondary Education,Pune',
  },
]

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '75',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '60',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'React',
    percentage: '50',
  },

  {
    id: 5,
    title: 'Material UI',
    percentage: '75',
  },

  {
    id: 6,
    title: 'MongoDb',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Tailwind',
    percentage: '55',
  },

  {
    id: 8,
    title: 'Redux',
    percentage: '45',
  },
]

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'CURD',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Crud',
      },
      {
        icon: <FaGithub />,
        title: 'Git : ',
        desc: 'https://github.com/supergubber/crud',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Reactjs and Tailwind',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://crud-84810.web.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Amazon-clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaGithub />,
        title: 'Git : ',
        desc: 'https://github.com/supergubber/amazon.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS and Tailwind',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://amazon-zeta-five.vercel.app/',
      },
    ],
  },

  // {
  //   id: 3,
  //   img: Work3,
  //   title: 'Video Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Video',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Premium',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 4,
  //   img: Work4,
  //   title: 'Video Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Video',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Premium',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: 'Landing Page',
  //   details: [
  //     {
  //       title: 'Project : ',
  //       desc: 'Website',
  //     },
  //     {
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       title: 'Language : ',
  //       desc: 'React JS, Node JS',
  //     },
  //     {
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
]

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
]
