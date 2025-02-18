import { projectList } from "./types";

export const devData: projectList[] = [
    {
        title: "Most Recent Projects",
        list: [
            {
                id: 'zen-tank',
                path: '/projects/zen-tank',
                title: 'Zen Tank',
                img: '/zen-tank.png',
                description: 'An iOS and Android app that allows you to visualize an ecosystem for your fish! Build an AR model of your fish tank and figure out optimal communal tank additions and conditions for your own custom aquascape.',
                tags: [
                    'React Native', 'Supabase'
                ]
            },
            {   
                id: 'tarot-ai',
                path: '/projects/tarot-ai',
                title: 'Tarot AI',
                img: '/tarot-ai.png',
                description: 'An iOS app that allows you to identify any tarot card and get it’s associated meaning through AI image detection and text generation, with the ultimate goal of integrating AR to demonstrate your reading visually.',
                tags: [
                    'Swift', 'Apple CoreML', 'Custom AI Model'
                ]
            },
            {
                id: 'portfolio',
                path: '/projects/portfolio',
                title: 'My Portfolio',
                img: '/portfolio.png',
                description: 'The website you are currently on has been designed and built by me! Designed through figma, built on React and hosted on Vercel for everyone in the world to view and get to know more about ~yours truly~',
                tags: [
                    'React', 'NextJS', 'TypeScript'
                ]
            },
        ]
    },
    {
        title: "My Work at Cisco",
        list: [
            {   id: 'cx-px-cloud',
                path: '/projects/cx-px-cloud',
                title: 'CX & PX Cloud',
                img: '/cisco.png',
                subtitle: 'An interface for Cisco customers / partners to gather insights across Cisco’s entire product portfolio. ',
                description: 'Featured enhanced analytics throughout the product’s lifecycle as well as permission based information access across clearance levels.',
                tags: [
                    'Angular', 'REST APIs', 'Node'
                ]
            },
            {
                id: 'xdstudio',
                path: '/projects/xdstudio',
                title: 'XDStudio & CMS',
                img: '/cisco.png',
                description: 'An internal site intended to monitor of the various changes and updates within CX / PX Cloud, powered by our own Content Management System (CMS) allowing designers and other admins to update XDStudio as they see fit.',
                tags: [
                    'React', 'AWS CloudFront'
                ]
            },
            {   
                id: 'cx-platform',
                path: '/projects/cx-platform',
                title: 'CX Platform',
                img: '/cisco.png',
                subtitle: 'A platform for both Cisco customers and partners to access information about all their Cisco products and services throughout Cisco’s portfolio. ',
                description: 'It included insights through data visualization, modular dashboard layouts, and AI assisted search functionality',
                tags: [
                    'React', 'GraphQL'
                ]
            },
        ]
    }, 
    {
        title: "My Previous Business",
        list: [
            {   
                id: 'houseme',
                path: '/projects/houseme',
                title: 'HouseMe Networks LLC',
                img: '/houseme.png',
                description: 'An ambitious personal project turned start-up - a social network dedicated to helping you with all your rental needs! From search, to sign, and beyond we are a platform dedicated to helping both renters and landlords throughout every step of the process.',
                tags: [
                    'React', 'Supabase', 'GraphQL'
                ]
            }
        ]
    }
]