import { projectList } from "./types";

export const designData: projectList[] = [
    {
        title: "Most Recent Projects",
        list: [
            {
                id: 'zen-tank',
                path: '/projects/zen-tank',
                title: 'Zen Tank',
                img: '/zen-tank.png',
                description: 'A recent personal project of mine that allows you to visualize an ecosystem for your fish! Inspired by my want to own a fish paired with my lack of knowledge on how to properly care for one.  This app helps you build an AR model of your fish tank and figure out optimal communal tank additions and conditions',
                tags: [
                    'Figma', 'In-House SVGs', 'In-House 3D Models'
                ]
            },
            {
                id: 'tarot-ai',
                path: '/projects/tarot-ai',
                title: 'Tarot AI',
                img: '/tarot-ai.png',
                description: 'A personal project that allows you to identify any tarot card and get it’s associated meaning through AI image detection and text generation. Also includes a stretch goal of integrating AR to demonstrate your reading visually. ',
                tags: [
                    'Figma', 'In-House 3D Models'
                ]
            },
            {
                id: 'portfolio',
                path: '/projects/portfolio',
                title: 'My Portfolio',
                img: '/portfolio.png',
                description: 'The website you are currently on has been designed and built by me! Designed through figma, built on React and hosted on Vercel for everyone in the world to view and get to know more about ~yours truly~',
                tags: [
                    'Figma', 'In-House SVGs'
                ]
            },
        ]
    },
    {
        title: "User Case Studies",
        list: [
            {
                id: 'poliscope',
                path: '/projects/poliscope',
                title: 'PoliScope Case Study',
                img: '/poliscope.png',
                subtitle: 'A UX research case study focused on designing an app and responsive website that helps users easily find their state and federal government representatives based on their location. ',
                description: 'The project prioritized simplicity, cleanliness, and accessibility, incorporating features like language translation and text-to-speech to ensure inclusivity.',
                tags: [
                    'User Research', 'Usability Study', 'Low-Fidelity Designs'
                ]
            }
        ]
    }
]


