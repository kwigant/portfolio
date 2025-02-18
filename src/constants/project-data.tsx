import { projectData } from "./types";

export const allProjectData: projectData[] = [
    {
        id: 'zen-tank',
        title: 'Zen Tank',
        img: '/zen-tank.png',
        tags: ['Demo Ready'],
        description: 'A recent personal project of mine that allows you to visualize an ecosystem for your fish! Inspired by my want to own a fish paired with my lack of knowledge on how to properly care for one.  This app helps you build an AR model of your fish tank and figure out optimal communal tank additions and conditions',
        projectDetails: {
            deliverables: "<p>Create an app that allows users to visualize their own fish tank by browsing a database of aquarium fish and plants and adding what they think suits their tank best.</p><br/><p>CRUD operations on the tanks, basic user account sign in / storage ,  compare info on fish and plants and add / remove from tank, care instructions for personalized tank.</p><br/><p>Stretch Goal: integrate AR so user can fully visualize their tank in their space</p>",
            date: "November 2024 - Present",
            role: "Lead Designer & Developer",
            techStack: ['React Native', 'Supabase', 'React Native Paper Library (Components & Theme)'],
            designStack: ['Figma', 'Blender']
        },
        approach: [
            {
                title: 'Research',
                description: '<p>Aside from the AR goal, the biggest thing for this was creating and maintaining an accurate database of plants, users, and - of course - fish. </p> <br/> <p>While I admit ChatGPT helped me out in creating a starting list, I still had to go back and double check all the data it found since a large part of this app is really just giving care instructions for the fish. After all, the last thing anyone wants is a dead fish</p>'
            },
            {
                title: 'Design',
                description: '<p>I tried to not overthink the design, I would have a lot of content so I had to focus on grouping things in a way that wasn’t overwhelming. </p><br/> <p>The biggest thing I noticed with similar apps to this was the overuse of color and icons as well. To differentiate, I wanted a sleeker, clean feel - think Apple branding.. but for fish </p>'
            },
            {
                title: 'Develop',
                description: '<p>I wanted to refresh myself with React Native which was one of the main goals with this project. </p><br/> <p>The other goal was to keep everything organized. When working alone there’s always the temptation to take shortcuts, but I plan on putting this on the app store eventually so it has to be production level. </p>'
            }
        ], 
        more: {
            description: 'This project is a work in progress, check it out how far I’ve gotten! You can view my project code on github as well as click around the figma designs and prototype! We still have yet to crack the AR but everything else (user account creation, tank CRUD operations, add / remove fish and plants) is up and running.',
            links: [
                {
                    title: 'GitHub Repo',
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
        }, 
        imgs: [
            '/zen-tank-1.svg',
            '/zen-tank-2.svg'
        ]
    },
    {
        id: 'tarot-ai',
        title: 'Tarot AI',
        tags: ['AI in Training'],
        img: '/tarot-ai.png',
        description: 'A personal project that allows you to identify any tarot card and get it’s associated meaning through AI image detection and text generation. Also includes a stretch goal of integrating AR to demonstrate your reading visually.',
        projectDetails: {
            deliverables: "<p>Use AI image detection to correctly obtain the name and description of the current tarot card  in the user’s phone camera</p><br/><p>If multiple tarot cards are captured in the camera, use AI to generate a reading that builds off the descriptions of the cards</p><br/><p>Package it all in a usable and enjoyable UI!</p><br/><p>Stretch Goal: Generate an AR image that visualizes your card / reading</p>",
            date: "January 2025 - Present",
            role: "Lead Interaction Designer & Developer",
            techStack: ['iOS - Swift', 'Supabase', 'Apple CoreML (AI Library)'],
            designStack: ['Figma', 'Blender']
        },
        approach: [
            {
                title: 'Plan',
                description: '<p>This idea has been around for a few years now but it wasn’t until recently that AI technologies could make this possible for a personal project such as this so first thing I had to do was research the best way to train an AI. </p><br/><p>I decided on Xcode because I wanted a Swift refresher as well as chance to play with the apple Core ML kits. </p>'
            },
            {
                title: 'Train AI',
                description: '<p>While training the AI seemed like a really daunting task, I knew that there were libraries out there for doing it. In fact Apple has their very own AI that you can train a subset of - perfect! </p><br/><p>It required a lot of labeling of tarot cards, but after some helpful youtube videos (and a LOT of pictures of tarot cards) I was able to get it up and running!</p>'
            },
            {
                title: 'Make it Pretty',
                description: '<p>The AI is doing most of the heavy lifting at this point - I just need to format everything in a more visually pleasing way! </p><br/><p>A stretch goal is to integrate an AR visual of the reading as well but that will require a little more time to build the assets</p>'
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
                },

                {
                    title: '',
                    img: '',
                    link: '',
                }
            ]
        },
        imgs: [
            '/tarot-ai-1.png',
            '/tarot-ai-2.svg',
        ]
    },
    {
        id: 'portfolio',
        title: 'My Portfolio',
        tags: ['Live Website'],
        img: '/portfolio.png',
        description: 'The website you are currently on has been designed and built by me! Designed through figma, built on React and hosted on AWS for everyone in the world to view and get to know more about ~yours truly~',
        projectDetails: {
            deliverables: "<p>Have a responsive website available to the public that demonstrates who I am as both a developer and a designer</p><br/><p>Showcase all my professional work over the years effectively and concisely as well as give an idea about who I am as a person </p><br/><p>Display everything in a clean, usable, and enjoyable UI that's also mobile friendly</p>",
            date: "December 2024 - January 2025 ",
            role: "Lead Designer & Developer",
            techStack: ['React', 'NextJS', 'TypeScript', 'Vercel'],
            designStack: ['Figma']
        },
        approach: [
            {
                title: 'Design',
                description: '<p>Of all my designs this one I had the most pressure around. I’ve never had my own website and I wanted it to make a lasting impression. I took it slow with the design process and really tried to consider multiple layouts and ideas in order to get the best result.</p>'
            },
            {
                title: 'Iterate',
                description: '<p>Even when I finally had High Fidelity designs for my portfolio I still had to constantly iterate. I found myself working on pages until I liked it only to return the next day and scrap entire sections. It was hard to impress my worst critique - myself.</p>'
            },
            {
                title: 'Launch',
                description: '<p>After all that design iteration, the development ended up being the easiest part! The website itself is technically very simple, being a static website hosted on Vercel. But the goal was really to focus on my fundamentals and get something out to the public that I am proud of - and I’m glad to say that I am!</p>'
            }
        ], 
        more: {
            description: 'This project is up and running (you’re reading this aren’t you :P)  - if you want to get a more in depth look at my work, check out the source!',
            links: [
                {
                    title: 'Github Repo',
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
        },
        imgs: [
            '/portfolio-1.svg',
            '/portfolio-2.svg',
        ]
    },
    {
        id: 'poliscope',
        title: 'PoliScope',
        tags: ['User Case Study'],
        img: '/poliscope.png',
        description: 'A UX research case study focused on designing an app and responsive website that helps users easily find their state and federal government representatives based on their location. The project prioritized simplicity, cleanliness, and accessibility, incorporating features like language translation and text-to-speech to ensure accessibility for its large audience (the US Voting population)',
        projectDetails: {
            deliverables: "<p>Full case study that encompasses user research, competitive analysis, user profiles and stories, as well as a map of the wire-frames to high fidelity designs</p><br/><p>Include designs that work for both web and mobile screens</p><br/><p>Focus on accessibility features and simplicity.  Features like language translation, text-to-speech / speech-to-text, and geo-location will be integral in creating a truly accessible platform</p><br/><p>Stretch Goal: Get someone to help me build this project! I am looking for a primarily backend engineer who can help me collect and manage all of the political data that I would need for this project (there is a lot). </p>",
            date: "November 2024",
            role: "Lead Researcher & Designer",
            techStack: ['To Be Determined'],
            designStack: ['Figma']
        },
        approach: [
            {
                title: 'Research',
                description: '<p>This idea came about as a part of my Google UX Design Course, being a prompt that I was interested in. </p><br/><p>While researching other solutions, I found that accessibility and simplicity were two aspects that tend to be missing from competitors. These sites are generally very cluttered and hard to read. As well as filled with ads or outside links that don’t really pertain to the goal of the user experience. </p><br/><p>I wanted to make sure my solution would be as straightforward as possible and mitigate the common pain points for the user.</p>'
            },
            {
                title: 'Design',
                description: '<p>This was my first design that truly embodied the product development lifecycle process. Since I was following a course, I was given a lot more structure than in previous designs. And it’s something that I have applied to my other projects moving forward. </p><br/><p>This project deals with a lot more data than the other projects I have dealt with. Not only is it a lot of data but it needs to be up to date and accurate.</p><br/><p>While designing I had to always be aware of the content I was balancing. The goal was simplicity so I had to be very deliberate with my layout and the data I would display.</p>'
            },
            {
                title: 'Test & Iterate',
                description: '<p>This product has been going through a lot of usability testing and iteration. Currently it is still in a low - fidelity design state, however user feedback is being gathered on it as we speak. </p> <br/> <p>This design is unique in that it caters to a very large and diverse audience (the general US voting population). As such I am making a very conscious effort to put it through more usability studies in order to work out as many design and accessibility flaws as possible. </p>'
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
        },
        imgs: [
            '/poliscope-1.svg',
            '/poliscope-2.svg'
        ]
    },
    {
        id: 'cx-px-cloud',
        title: 'CX & PX Cloud',
        tags: ['Cisco Owned'],
        img: '/cisco.png',
        description: 'An interface for Cisco customers / partners to gather insights across Cisco’s entire product portfolio. Featured enhanced analytics throughout the product’s lifecycle as well as permission based information access across clearance levels.',
        projectDetails: {
            deliverables: "<p>Collaborated with cross-functional teams to develop design-accurate prototypes for customer and partner demos under tight 1-3 month deadlines.</p><br/><p>Delivered 4-6 web flow prototypes, showcased to 16,000 in-person and 1M online attendees at Cisco Live, receiving highly positive feedback.</p><br/><p>Implemented and aided in the task management of the frontend development and backend API integration, collaborating with 12 designers/developers using SCRUM/agile methodologies.</p>",
            date: "September 2020 - June 2024",
            role: "UX Engineer; XDI Team Member",
            techStack: ['Angular', 'TypeScript', 'REST APIs', 'Nodejs', 'In-House Component Library', 'D3.js Data Visualizations']
        },
        approach: [
            {
                title: 'Get Design Specs',
                description: '<p>Given finalized specs from the Cisco CX Design Team for implementation</p>'
            },
            {
                title: 'Divide & Conquer',
                description: '<p>Work with team to divide specs into development tasks and create working features</p>'
            },
            {
                title: 'Deliver Prototype',
                description: '<p>Pass off finalized working prototype to be demoed to Customers and Stakeholders </p>'
            }
        ], 
        more: {
            description: 'This project is owned by Cisco and as a result I can’t show any code or visuals associated with this product. However if you would like to chat more about my experience at Cisco and this project in particular then let’s connect!',
        },
        imgs: [
        ]
    },
    {
        id: 'xdstudio',
        title: 'XDStudio & CMS',
        tags: ['Cisco Owned'],
        img: '/cisco.png',
        description: 'An internal site intended to monitor of the various changes and updates within CX / PX Cloud, powered by our own Content Management System (CMS) allowing designers and other admins to update XDStudio as they see fit.',
        projectDetails: {
            deliverables: "<p>With a small team, built a scalable CMS with React and AWS for internal site management, improving efficiency for admins and designers through streamlined content updates, saving time and money.</p><br/><p>Using the CMS, created an internal blog site to keep track of updates on the customer and partner portals. </p>",
            date: "January 2022 - December 2023",
            role: "UX Engineer; XDI Team Member",
            techStack: ['React', 'TypeScript', 'AWS', 'Nodejs', 'REST APIs']
        },
        approach: [
            {
                title: 'Determine Priorities',
                description: '<p>This was a new internal tool that we were building with a small subset of the design team. As a result, specifications would change from time to time. It was our job as developers to pick the tasks that were core to the functionality and not get too caught up with the design and any sudden changes associated. </p>'
            },
            {
                title: 'Divide & Conquer',
                description: '<p>Within a small team of about three developers we would divide the tasks in order to efficiently implement the product. We focused on core functionality such as CMS page creation and management,  CMS components, and data asset management. </p>'
            },
            {
                title: 'Launch & Maintain',
                description: '<p>Once the CMS was ready we were able to host our new blog site. We got the functionality to the point where users could create their own page and customize / update it all on their own. After launching all that was left was general maintenance for the site, something I personally did not oversee.  </p>'
            }
        ], 
        more: {
            description: 'This project is owned by Cisco and as a result I can’t show any code or visuals associated with this product. However if you would like to chat more about my experience at Cisco and this project in particular then let’s connect!',
        },
        imgs: [
        ]
    },
    {
        id: 'cx-platform',
        title: 'CX Platform',
        tags: ['Cisco Owned'],
        img: '/cisco.png',
        description: 'A platform for both Cisco customers and partners to access information about all their Cisco products and services throughout Cisco’s portfolio. It included insights through data visualization, modular dashboard layouts, and AI assisted search functionality',
        projectDetails: {
            deliverables: "<p>Collaborated with team to quickly develop a clickable prototype within about a 5 week deadline</p>",
            date: "August 2024 - September 2024",
            role: "UX Engineer; XDI Team Member",
            techStack: ['React', 'TypeScript', 'GraphQL']
        },
        approach: [
            {
                title: 'Get Specs',
                description: '<p>This was a new internal tool that we were building with a small subset of the design team. As a result, specifications would change from time to time. It was our job as developers to pick the tasks that were core to the functionality and not get too caught up with the design and any sudden changes associated. </p>'
            },
            {
                title: 'Divide & Conquer',
                description: '<p>Within a small team of about three developers we would divide the tasks in order to efficiently implement the product. We focused on core functionality such as CMS page creation and management,  CMS components, and data asset management. </p>'
            },
            {
                title: 'Deliver Prototype',
                description: '<p>Once the CMS was ready we were able to host our new blog site. We got the functionality to the point where users could create their own page and customize / update it all on their own. After launching all that was left was general maintenance for the site, something I personally did not oversee.  </p>'
            }
        ], 
        more: {
            description: 'This project is owned by Cisco and as a result I can’t show any code or visuals associated with this product. However if you would like to chat more about my experience at Cisco and this project in particular then let’s connect!',
        },
        imgs: [
        ]
    },
    {
        id: 'houseme',
        title: 'HouseMe Network LLC',
        tags: ['My Startup'],
        img: '/houseme.png',
        description: 'An ambitious personal project turned start-up - a social network dedicated to helping you with all your rental needs! From search, to sign, and beyond we are a platform dedicated to helping both renters and landlords throughout every step of the process.',
        projectDetails: {
            deliverables: "<p>Potential Tenants can search (either in a group or individually) for their future listing, apply, and hear back all on the site</p><br/><p>Landlord and Tenant dedicated portals to help specific user types fulfill their needs.</p><br/><p>Tenants and landlords can each view their current rental and manage any household chores / notifications / messages between housing group and/or landlord</p><br/><p>Stretch Goal: referral system for tenants to recommend other tenants to a property with hopes of mitigating landlord struggle of filling a place quickly.</p>",
            date: "April 2019 - March 2024",
            role: "CEO, Co-Founder, Lead Frontend Engineer & Designer, Head of Finance & Business Operations, Recruiter & Trainer",
            techStack: ['React', 'TypeScript', 'GraphQL']
        },
        approach: [
            {
                title: 'Ideate',
                description: '<p>The idea for HouseMe came from my co-founder and I struggling to find affordable housing as college juniors. Frustrated by the challenges in our town, we decided to create a platform to solve the problem.</p><br/><p> We spent countless hours brainstorming, how to tackle the issues we faced. While the vision was clear, our approach constantly evolved as we learned more.</p><br/><p>Fortunately, finding help was relatively easy at first. Many in our college community sympathized. Though even with help the task was still daunting.</p>'
            },
            {
                title: 'Learn & Iterate',
                description: '<p>We quickly realized the scale of the challenge. </p><br/><p>I had just switched my major to computer science  and have never built something this big. Google and YouTube became our go-to teachers as we juggled coursework and life.</p><br/><p>Progress was slow, but every win felt monumental. Our small team grew stronger, and we constantly improved the project. </p><br/><p>Even after graduation and the pandemic, we remained committed to making it work.</p>'
            },
            {
                title: 'Test',
                description: '<p>Over 4+ years, we developed multiple prototypes—Android, React Native, and web—and secured $20k in investments. Each prototype went through usability studies, but we struggled to find a stable direction.</p><br/><p>In hindsight, we could have been a lot more efficient. We started with an app idea but ended up with a website. Expertise was limited, and we had to become our own experts.</p><br/><p>While HouseMe didn’t pan out, I’m proud of what we accomplished. It gave me the confidence to take on any project and a deeper understanding of startup culture.</p>'
            }
        ], 
        more: {
            description: 'Since this company is no longer active and our servers are no longer up and running, it’s a little difficult to give a live demo of the product. Our designs and research are rather large so I would want to give a proper walk through of the findings if interested. Let’s connect if you would like to discuss HouseMe with me more!',
        },
        imgs: [
            '/houseme-1.svg',
            '/houseme-2.svg',
        ]
    }
]
