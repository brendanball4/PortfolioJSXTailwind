// Auto-load images from src/PortfolioImages/projects/<slug>/.
// Drop files into a project's folder and they show up in filename order
// (use 01.png, 02.png, ... to control ordering). While a folder is empty,
// the fallback URLs (e.g. imgur) are used instead.
const imageModules = import.meta.glob('../PortfolioImages/projects/*/*.{png,jpg,jpeg,webp,gif}', { eager: true });

function imagesFor(slug, fallback = []) {
    const local = Object.keys(imageModules)
        .filter(path => path.includes(`/projects/${slug}/`))
        .sort()
        .map(path => imageModules[path].default);
    return local.length > 0 ? local : fallback;
}

export default [
    {
        id: 1,
        featured: true,
        title: 'Invoicer',
        title_ext: 'Invoicing Platform for Small Business',
        mini_desc: 'An invoicing app for small businesses and entrepreneurs. Create invoices, manage clients, and keep track of what\'s been paid, all in one place.',
        desc: 'An invoicing app aimed at small businesses and entrepreneurs who don\'t need a full accounting suite. It covers creating and sending invoices, managing clients, and tracking what\'s been paid and what\'s outstanding. The frontend runs on React and Next.js, with a C# Web API behind it handling the business logic and data.',
        images: imagesFor('invoicer'),
        stack: ['React', 'Next.js', 'C#', 'ASP.NET Web API', 'TypeScript'],
        link: '',
    },
    {
        id: 2,
        featured: true,
        title: 'Directus Collection Anonymizer',
        title_ext: 'Directus Collection Anonymizer Extension',
        mini_desc: 'A Directus extension that anonymizes existing data in a collection by replacing real values with fake ones. Built with Vue 3 for the latest Directus versions.',
        desc: 'A Directus extension for anonymizing data in an existing collection, useful when you need a copy of production data without real customer details in it (testing, demos, sharing a database). It replaces existing field values with anonymized ones, and only touches data that\'s already there; it doesn\'t fill empty fields. Built with Vue 3 and targets the latest Directus versions.',
        images: imagesFor('directus-collection-anonymizer'),
        stack: ['Directus', 'Vue 3', 'JavaScript'],
        link: '',
    },
    {
        id: 3,
        featured: true,
        title: 'Image Converter',
        title_ext: 'Cross-Platform Image Converter',
        mini_desc: 'A small desktop app for batch-converting images between formats, with everything processed locally. Built with Electron and Svelte.',
        desc: 'A desktop tool for converting images between common formats. You drag files in, pick an output format, and it converts them in a batch. All the processing happens locally, nothing gets uploaded anywhere. Electron handles the cross-platform desktop side, and the UI is built with Svelte.',
        images: imagesFor('image-converter'),
        stack: ['Electron', 'Svelte', 'JavaScript', 'Node.js'],
        link: '',
    },
    {
        id: 4,
        title: 'Restaurant Ordering Portal',
        title_ext: 'Online Restaurant Ordering Portal',
        mini_desc: 'An online ordering system for restaurants. Customers browse the menu, place an order, and pay through Stripe. Built with SvelteKit and a C# Web API.',
        desc: 'An online ordering system restaurants can run themselves instead of going through the big delivery platforms. Restaurants publish their menu, customers place orders, and payment goes through Stripe checkout. The customer side is built with SvelteKit, and a C# Web API handles the menus, orders, and payment flow underneath.',
        images: imagesFor('restaurant-ordering-portal'),
        stack: ['SvelteKit', 'C#', 'ASP.NET Web API', 'Stripe', 'TypeScript'],
        link: '',
    },
    {
        id: 5,
        title: 'Medicine Hat College Solar Monitoring',
        title_ext: 'Solar Car Canopy Monitoring System',
        mini_desc: 'A monitoring platform for Medicine Hat College\'s solar car canopy that pulls energy data from multiple sources into one real-time dashboard.',
        desc: 'Medicine Hat College has a solar car canopy with panels reporting through several different vendor systems, and checking each one separately got old fast. This platform pulls all of that data into a single real-time dashboard. It\'s built with C# and Blazor Server, with MudBlazor for the UI, EF Core for the data layer, and Selenium to scrape the vendor portals that don\'t offer an API. Hosted on Azure.',
        images: imagesFor('solar-monitoring', ['https://i.imgur.com/sR1vkMl.png', 'https://i.imgur.com/I9xxsUD.png']),
        stack: [ 'C#', 'Blazor Server', 'MudBlazor', 'EF Core 6', 'MSSQL', 'Azure Cloud Hosting'],
        link: 'https://github.com/brendanball4/solarmhc',
    },
    {
        id: 6,
        title: 'Practicum Management System',
        title_ext: 'Practicum Management Web Application',
        mini_desc: 'A web app for the Lethbridge College practicum program, with job postings, forms, timesheets, and management tools for students, employers, and admins.',
        desc: 'The Lethbridge College practicum program needed one place for students, employers, and admins to handle the whole placement process. Each role gets its own dashboard: employers post jobs, students apply and log timesheets, and admins keep an eye on everything through forms and management tools. Built with ASP.NET Core and Razor Pages following the MVC pattern.',
        images: imagesFor('practicum-management', ['https://i.imgur.com/1gm6nR9.png', 'https://i.imgur.com/dElJtvH.png', 'https://i.imgur.com/wQFUkMC.png', 'https://i.imgur.com/B1bpfno.png', 'https://i.imgur.com/g9CS7qj.png', 'https://i.imgur.com/HsQvdfA.png', 'https://i.imgur.com/F2OTKEB.png', 'https://i.imgur.com/Vr0OIej.png']),
        stack: ['C#', 'ASP.NET Core 6', 'MVC', 'Razor Pages', 'EF Core 6', 'MSSQL', 'Bootstrap 5'],
        link: 'https://github.com/brendanball4/CITPracticum'
    },
    {
        id: 7,
        title: 'HR Admin & Volunteer Management System',
        title_ext: 'HR Admin & Volunteer Management System',
        mini_desc: 'A volunteer management app for the local food bank. Scheduling and coordination for admins, shift sign-ups and availability for volunteers.',
        desc: 'Coordinating volunteers by phone and paper schedules doesn\'t scale, so this app gives the organization two dashboards: admins handle scheduling and coordination on one side, while volunteers set their availability, apply for shifts, and message the organization on the other. Built with C# and Blazor Server, backed by MariaDB, and shipped in Docker.',
        images: imagesFor('hr-volunteer-management', ['https://i.imgur.com/kTktNk6.png', 'https://i.imgur.com/T6qFccg.png', 'https://i.imgur.com/AW7Xg5J.png', 'https://i.imgur.com/s45a0yX.png', 'https://i.imgur.com/APa65oJ.png', 'https://i.imgur.com/nXazCE9.png', 'https://i.imgur.com/YexQx6b.png']),
        stack: [ 'C#', 'Blazor', 'Bootstrap 4', 'Entity Framework', 'MariaDB', 'Docker'],
        link: 'https://github.com/cdmoss/hrmanager-blazorapp',
    },
    {
        id: 8,
        title: 'Developer Portfolio',
        title_ext: 'Developer Portfolio Web Application',
        mini_desc: 'The site you\'re on right now. Built with React, Vite, and Tailwind, and hosted off a Raspberry Pi at home.',
        desc: 'The site you\'re looking at right now. Built with React, Vite, and Tailwind, partly as a portfolio and partly as an excuse to stay current with the frontend ecosystem. Bonus points: it\'s hosted on a Raspberry Pi running a web server at home.',
        images: imagesFor('developer-portfolio', ['https://i.imgur.com/cL2mqzk.png', 'https://i.imgur.com/TD7kcnb.png', 'https://i.imgur.com/d9mrgNW.png', 'https://i.imgur.com/I1PCGOj.png']),
        stack: ['JSX/React', 'Tailwind', 'Vite', 'Raspberry Pi'],
        link: 'https://github.com/brendanball4/PortfolioJSXTailwind',
    },
    {
        id: 9,
        title: 'Business Management System',
        title_ext: 'Business Management System',
        mini_desc: 'A customer, inventory, and invoicing system built with PHP and MySQL. A database class project that turned into a full management app.',
        desc: 'A database class project that grew into a proper management app, co-built with a colleague. It covers the basics a small business actually needs: customer records, invoicing, and inventory tracking, all tied together. PHP 8.1 and MySQL under the hood, with Bootstrap for the front end.',
        images: imagesFor('business-management', ['https://i.imgur.com/8Vrprho.png', 'https://i.imgur.com/SdzSeQ4.png', 'https://i.imgur.com/xw1Xm9A.png', 'https://i.imgur.com/W79wASw.png', 'https://i.imgur.com/Tgd54pZ.png', 'https://i.imgur.com/UxkoD9A.png', 'https://i.imgur.com/84OLbkC.png']),
        stack: ['PHP8.1', 'MySQL', 'Bootstrap 4', 'HTML/CSS'],
        link: 'https://github.com/cdmoss/3660-Project',
    },
    {
        id: 10,
        title: 'Souls-like created with Unity',
        title_ext: 'Souls-like created with Unity',
        mini_desc: 'A Dark Souls-style game project in Unity, with combat scripted in C# and the models and animations made in Blender.',
        desc: 'A long-running side project: a Dark Souls-style game in Unity, with combat scripted in C# and the art and animations made in Blender. There\'s also a 2D rogue-like in the pile, with every asset hand-drawn in MS Paint (intentionally). Neither is finished (game dev has a way of doing that), but they taught me a ton about Unity, game systems, and scope.',
        images: imagesFor('unity-souls-like', ['https://i.imgur.com/BDsCbKu.png']),
        stack: ['C#', 'Unity Game Engine', '3D Modelling', 'Graphic Design', 'System Design', 'Game Design'],
        link: 'https://github.com/brendanball4/DSTut',
    },
    {
        id: 11,
        title: 'Graphic Design & 3D Modelling',
        title_ext: 'Graphic Design & 3D Modelling using Blender',
        mini_desc: 'A collection of 3D work in Blender. Started as game assets, turned into a hobby of its own.',
        desc: 'What started as making assets for my game projects turned into a hobby of its own. This is a collection of Blender work: a couple of pieces that went into games, and a couple done purely for the challenge. The isometric room is my favourite, it has a look that tends to catch people\'s eye.',
        images: imagesFor('blender-3d', ['https://i.imgur.com/VJqlxcy.png', 'https://i.imgur.com/Ijh94tf.png', 'https://i.imgur.com/3tWtZmp.png', 'https://i.imgur.com/93ElFUT.png']),
        stack: ['Blender', 'Graphic Design', 'Art'],
        link: 'https://github.com/brendanball4/blender-projects',
    },
]
