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
        description: 'The website you are currently on has been designed and built by me! Designed through figma, built on React and hosted on AWS for everyone in the world to view and get to know more about ~yours truly~',
        projectDetails: {
            deliverables: "<div>Have a responsive website available to the public that demonstrates who I am as both a developer and a designer</div><br/><div>Showcase all my professional work over the years effectively and concisely as well as give an idea about who I am as a person </div><br/><div>Display everything in a clean, usable, and enjoyable UI</div>",
            date: "December 2024 - January 2025 ",
            role: "Lead Designer & Developer",
            techStack: ['React', 'NextJS', 'TypeScript', 'Vercel'],
            designStack: ['Figma']
        },
        approach: [
            {
                title: 'Design',
                description: '<div>Of all my designs this one I had the most pressure around. I’ve never had my own website and I wanted it to make a lasting impression. I took it slow with the design process and really tried to consider multiple layouts and ideas in order to get the best result.</div>'
            },
            {
                title: 'Iterate',
                description: '<div>Even when I finally had High Fidelity designs for my portfolio I still had to constantly iterate. I found myself working on pages until I liked it only to return the next day and scrap entire sections. It was hard to impress my worst critique - myself.</div>'
            },
            {
                title: 'Launch',
                description: '<div>After all that design iteration, the development ended up being the easiest part! The website itself is technically very simple, being a static website hosted on Vercel. But the goal was really to focus on my fundamentals and get something out to the public that I am proud of - and I’m glad to say that I am!</div>'
            }
        ], 
        more: {
            description: 'This project is up and running (you’re reading this aren’t you :P)  - if you want to get a more in depth look at my work, check out the source!',
            links: [
                {
                    title: 'Github',
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
        id: 'poliscope',
        title: 'PoliScope',
        tags: ['User Case Study'],
        img: '/poliscope.png',
        description: 'A UX research case study focused on designing an app and responsive website that helps users easily find their state and federal government representatives based on their location. The project prioritized simplicity, cleanliness, and accessibility, incorporating features like language translation and text-to-speech to ensure accessibility for its large audience (the US Voting population)',
        projectDetails: {
            deliverables: "<div>Full case study that encompasses user research, competitive analysis, user profiles and stories, as well as a map of the wire-frames to high fidelity designs</div><br/><div>Include designs that work for both web and mobile screens</div><br/><div>Focus on accessibility features and simplicity.  Features like language translation, text-to-speech / speech-to-text, and geo-location will be integral in creating a truly accessible platform</div><br/><div>Stretch Goal: Get someone to help me build this project! I am looking for a primarily backend engineer who can help me collect and manage all of the political data that I would need for this project (there is a lot). </div>",
            date: "November 2024",
            role: "Lead Researcher & Designer",
            techStack: ['To Be Determined'],
            designStack: ['Figma']
        },
        approach: [
            {
                title: 'Research',
                description: '<div>This idea came about as a part of my Google UX Design Course, being a prompt that I was interested in. </div><br/><div>While researching other solutions, I found that accessibility and simplicity were two aspects that tend to be missing from competitors. These sites are generally very cluttered and hard to read. As well as filled with ads or outside links that don’t really pertain to the goal of the user experience. </div><br/><div>I wanted to make sure my solution would be as straightforward as possible and mitigate the common pain points for the user.</div>'
            },
            {
                title: 'Design',
                description: '<div>This was my first design that truly embodied the product development lifecycle process. Since I was following a course, I was given a lot more structure than in previous designs. And it’s something that I have applied to my other projects moving forward. </div><br/><div>This project deals with a lot more data than the other projects I have dealt with. Not only is it a lot of data but it needs to be up to date and accurate.</div><br/><div>While designing I had to always be aware of the content I was balancing. The goal was simplicity so I had to be very deliberate with my layout and the data I would display.</div>'
            },
            {
                title: 'Test & Iterate',
                description: '<div>This product has been going through a lot of usability testing and iteration. Currently it is still in a low - fidelity design state, however user feedback is being gathered on it as we speak. </div> <br/> <div>This design is unique in that it caters to a very large and diverse audience (the general US voting population). As such I am making a very conscious effort to put it through more usability studies in order to work out as many design and accessibility flaws as possible. </div>'
            }
        ], 
        more: {
            description: 'This project is currently on pause since I need help to build this out properly. But if you are curious, check out how far I’ve gotten! Most of the research and design work has been done, you can view the case study below',
            links: [
                {
                    title: 'Case Study',
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
    }
]
