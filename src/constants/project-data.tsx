import { projectData } from "./types";

export const allProjectData: projectData[] = [
    {
        id: 'zen-tank',
        title: 'Zen Tank',
        img: '/zen-tank.png',
        tags: ['Demo Ready'],
        description: 'A recent personal project of mine that allows you to visualize an ecosystem for your fish! Inspired by my want to own a fish paired with my lack of knowledge on how to properly care for one.  This app helps you build an AR model of your fish tank and figure out optimal communal tank additions and conditions',
        projectDetails: {
            deliverables: "<div>Create an app that allows users to visualize their own fish tank by browsing a database of aquarium fish and plants and adding what they think suits their tank best.</div><br/><div>CRUD operations on the tanks, basic user account sign in / storage ,  compare info on fish and plants and add / remove from tank, care instructions for personalized tank.</div><br/><div>Stretch Goal: integrate AR so user can fully visualize their tank in their space</div>",
            date: "November 2024 - Present",
            role: "Lead Designer & Developer",
            techStack: ['React Native', 'Supabase', 'React Native Paper Library (Components & Theme)'],
            designStack: ['Figma', 'Blender']
        },
        approach: [
            {
                title: 'Research',
                description: '<div>Aside from the AR goal, the biggest thing for this was creating and maintaining an accurate database of plants, users, and - of course - fish. </div> <br/> <div>While I admit ChatGPT helped me out in creating a starting list, I still had to go back and double check all the data it found since a large part of this app is really just giving care instructions for the fish. After all, the last thing anyone wants is a dead fish</div>'
            },
            {
                title: 'Design',
                description: '<div>I tried to not overthink the design, I would have a lot of content so I had to focus on grouping things in a way that wasn’t overwhelming. </div><br/> <div>The biggest thing I noticed with similar apps to this was the overuse of color and icons as well. To differentiate, I wanted a sleeker, clean feel - think Apple branding.. but for fish </div>'
            },
            {
                title: 'Develop',
                description: '<div>I wanted to refresh myself with React Native which was one of the main goals with this project. </div><br/> <div>The other goal was to keep everything organized. When working alone there’s always the temptation to take shortcuts, but I plan on putting this on the app store eventually so it has to be production level. </div>'
            }
        ], 
        more: {
            description: 'This project is a work in progress, check it out how far I’ve gotten! You can view my project code on github as well as click around the figma designs and prototype! We still have yet to crack the AR but everything else (user account creation, tank CRUD operations, add / remove fish and plants) is up and running.',
            links: [
                {
                    title: 'GitHub',
                    img: '/github.png',
                    link: 'link',
                },
                {
                    title: 'Figma Designs',
                    img: '/figma-light-blue.png',
                    link: 'link',
                },
                {
                    title: 'Figma Prototype',
                    img: '/figma-orange.png',
                    link: 'link',
                }
            ]
        }
    },
    {
        id: 'tarot-ai',
        title: 'Tarot AI',
        tags: ['AI in Training'],
        img: '/tarot-ai.png',
        description: 'A personal project that allows you to identify any tarot card and get it’s associated meaning through AI image detection and text generation. Also includes a stretch goal of integrating AR to demonstrate your reading visually.',
        projectDetails: {
            deliverables: "<div>Use AI image detection to correctly obtain the name and description of the current tarot card  in the user’s phone camera</div><br/><div>If multiple tarot cards are captured in the camera, use AI to generate a reading that builds off the descriptions of the cards</div><br/><div>Package it all in a usable and enjoyable UI!</div><br/><div>Stretch Goal: Generate an AR image that visualizes your card / reading</div>",
            date: "January 2025 - Present",
            role: "Lead Interaction Designer & Developer",
            techStack: ['iOS - Swift', 'Supabase', 'Apple CoreML (AI Library)'],
            designStack: ['Figma', 'Blender']
        },
        approach: [
            {
                title: 'Plan',
                description: '<div>This idea has been around for a few years now but it wasn’t until recently that AI technologies could make this possible for a personal project such as this so first thing I had to do was research the best way to train an AI. </div><br/><div>I decided on Xcode because I wanted a Swift refresher as well as chance to play with the apple Core ML kits. </div>'
            },
            {
                title: 'Train AI',
                description: '<div>While training the AI seemed like a really daunting task, I knew that there were libraries out there for doing it. In fact Apple has their very own AI that you can train a subset of - perfect! </div><br/><div>It required a lot of labeling of tarot cards, but after some helpful youtube videos (and a LOT of pictures of tarot cards) I was able to get it up and running!</div>'
            },
            {
                title: 'Make it Pretty',
                description: '<div>The AI is doing most of the heavy lifting at this point - I just need to format everything in a more visually pleasing way! </div><br/><div>A stretch goal is to integrate an AR visual of the reading as well but that will require a little more time to build the assets</div>'
            }
        ], 
        more: {
            description: 'This project is a work in progress, check it out how far I’ve gotten! You can view my project code on github as well as click around the figma designs and prototype! We still have yet to crack the AR but everything else (user account creation, tank CRUD operations, add / remove fish and plants) is up and running.',
            links: [
                
                {
                    title: 'Figma Designs',
                    img: '/figma-dark-blue.png',
                    link: 'link',
                },
                {
                    title: 'Figma Prototype',
                    img: '/figma-light-blue.png',
                    link: 'link',
                }
            ]
        }
    },
    {
        id: 'portfolio',
        title: 'My Portfolio',
        tags: ['Live Website'],
        img: '/portfolio.png',
        description: 'A personal project that allows you to identify any tarot card and get it’s associated meaning through AI image detection and text generation. Also includes a stretch goal of integrating AR to demonstrate your reading visually.',
        projectDetails: {
            deliverables: "<div>Use AI image detection to correctly obtain the name and description of the current tarot card  in the user’s phone camera</div><br/><div>If multiple tarot cards are captured in the camera, use AI to generate a reading that builds off the descriptions of the cards</div><br/><div>Package it all in a usable and enjoyable UI!</div><br/><div>Stretch Goal: Generate an AR image that visualizes your card / reading</div>",
            date: "January 2025 - Present",
            role: "Lead Interaction Designer & Developer",
            techStack: ['iOS - Swift', 'Supabase', 'Apple CoreML (AI Library)'],
            designStack: ['Figma', 'Blender']
        },
        approach: [
            {
                title: 'Plan',
                description: '<div>This idea has been around for a few years now but it wasn’t until recently that AI technologies could make this possible for a personal project such as this so first thing I had to do was research the best way to train an AI. </div><br/><div>I decided on Xcode because I wanted a Swift refresher as well as chance to play with the apple Core ML kits. </div>'
            },
            {
                title: 'Train AI',
                description: '<div>While training the AI seemed like a really daunting task, I knew that there were libraries out there for doing it. In fact Apple has their very own AI that you can train a subset of - perfect! </div><br/><div>It required a lot of labeling of tarot cards, but after some helpful youtube videos (and a LOT of pictures of tarot cards) I was able to get it up and running!</div>'
            },
            {
                title: 'Make it Pretty',
                description: '<div>The AI is doing most of the heavy lifting at this point - I just need to format everything in a more visually pleasing way! </div><br/><div>A stretch goal is to integrate an AR visual of the reading as well but that will require a little more time to build the assets</div>'
            }
        ], 
        more: {
            description: 'This project is a work in progress, check it out how far I’ve gotten! You can view my project code on github as well as click around the figma designs and prototype! We still have yet to crack the AR but everything else (user account creation, tank CRUD operations, add / remove fish and plants) is up and running.',
            links: [
                
                {
                    title: 'Figma Designs',
                    img: '/figma-dark-blue.png',
                    link: 'link',
                },
                {
                    title: 'Figma Prototype',
                    img: '/figma-light-blue.png',
                    link: 'link',
                }
            ]
        }
    }
]
