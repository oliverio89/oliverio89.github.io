const translations = {
  es: {
    titulo: "Víctor Moreno García",
    subtitulo: "Lead Full-Stack Developer & Platform Architect",
    descripción:
      "Desarrollador Full-Stack especializado en plataformas SaaS, arquitecturas cloud y automatización con IA. Construyo sistemas que conectan tecnología con problemas reales.",
    descriptionAbout:
      "Lead Full-Stack Developer actualmente arquitectando Di-Mo, una plataforma SaaS para el sector de la construcción. Especializado en Node.js, React, Firebase y automatización con IA. Ex co-formador en Factoría F5, donde formé a más de 100 desarrolladores.",
    AcercaDeMí: "Acerca de mí",
    Habilidades: "Habilidades",
    Proyectos: "Proyectos",
    ExperienciaLaboral: "Experiencia",
    EducaciónCertificaciones: "Formación",
    TestimoniosReferencias: "Referencias",
    Contacto: "Contacto",
    Stack: "Tecnologías",
    Aplicaciones: "Proyectos desarrollados",

    // Hero
    disponible: "Disponible para proyectos",
    heroRoles: [
      "Lead Full-Stack Developer",
      "Platform Architect",
      "Automatización & IA",
      "SaaS Builder",
    ],
    heroSubtitle:
      "Diseño sistemas que conectan tecnología con problemas reales.",
    heroSubtitle2:
      "Desde arquitecturas SaaS en la nube hasta automatizaciones con IA.",
    verExperiencia: "Ver mi experiencia",
    contactar: "Contactar",
    anosExp: "Años de experiencia",
    empresas: "Empresas",
    stacksDominados: "Stacks dominados",

    // About
    sobreMiEyebrow: "Sobre mí",
    aboutTitle: "Construyo sistemas,",
    aboutTitleGradient: "no solo código.",
    aboutBio1:
      "Soy desarrollador Full-Stack especializado en arquitecturas cloud, plataformas SaaS y automatización con IA. Me mueve construir sistemas que resuelvan problemas reales — no solo implementar features, sino diseñar soluciones completas desde la base de datos hasta la interfaz.",
    aboutBio2:
      "Actualmente lidero el desarrollo de Di-Mo, una plataforma SaaS para el sector de la arquitectura que sincroniza datos en tiempo real entre una app móvil en Unity y la nube. Antes de eso, formé a más de 100 desarrolladores en Factoría F5 y trabajé en múltiples proyectos web con Vue, Laravel y React.",
    aboutBio3:
      "Lo que más me interesa ahora: la intersección entre desarrollo backend, infraestructura cloud y automatización con IA para crear flujos que eliminan trabajo manual.",
    aboutStackAutomatizacion: "Automatización",
    aboutLocation: "Motril, España",
    aboutRole: "Lead Full-Stack @ Di-Mo",
    Frontend: "Frontend",
    Backend: "Backend",
    "Cloud & Infra": "Cloud & Infra",

    // Experience
    trayectoriaEyebrow: "Trayectoria",
    expTitle: "Experiencia",
    expTitleGradient: "profesional.",
    expDesc:
      "3+ años construyendo plataformas, enseñando y resolviendo problemas reales con tecnología.",
    loQueHice: "Lo que hice:",
    verEnProduccion: "Ver en producción:",
    actual: "Actual",
    experienceData: [
      {
        id: "dimo",
        role: "Lead Full-Stack Developer & Platform Architect",
        company: "JJendémico — Di-Mo",
        period: "Ene 2026 – Actualidad",
        location: "Málaga, Híbrido",
        type: "Jornada completa",
        featured: true,
        summary:
          "Di-Mo es una plataforma SaaS para el sector de la arquitectura y la construcción. Diseñé y desarrollé toda la infraestructura cloud que da soporte a la app móvil en Unity: backend, panel web y sincronización en tiempo real.",
        what: [
          "Diseñé la arquitectura completa del backend API REST con Node.js + TypeScript desde cero.",
          "Estructuré la capa de datos en Firebase Firestore y Google Cloud Storage, optimizando para sincronización en tiempo real entre la app Unity y la nube.",
          "Desarrollé el panel de administración web completo con React, TypeScript, Vite y Material UI.",
          "Implementé el sistema de autenticación con Firebase Auth y Google Sign-In.",
          "Diseñé el motor de exportación de proyectos en PDF, DXF y bundles de archivos.",
          "Coordiné técnicamente con el equipo de Unity y gestioné integraciones con empresas externas.",
        ],
        stack: [
          "Node.js",
          "TypeScript",
          "React",
          "Firebase",
          "Firestore",
          "GCS",
          "Docker",
          "Vite",
          "Material UI",
        ],
      },
      {
        id: "ingenero",
        role: "Programador Informático",
        company: "Asociación In Género",
        period: "Ene 2025 – Dic 2025",
        location: "Melilla, Remoto",
        type: "Autónomo · 1 año",
        featured: false,
        summary:
          "Gestión y mantenimiento de la infraestructura tecnológica de la organización. Desarrollo de soluciones digitales para apoyo a proyectos sociales y garantía de cumplimiento GDPR.",
        what: [
          "Administré la infraestructura de servidores, redes y sistemas de seguridad de la organización.",
          "Implementé herramientas tecnológicas que mejoraron la eficiencia operativa interna.",
          "Desarrollé soluciones digitales de apoyo a los proyectos sociales de la asociación.",
          "Aseguré la protección de datos y el cumplimiento de normativas GDPR.",
          "Capacité al personal en el uso de nuevas herramientas digitales.",
        ],
        stack: ["Linux", "WordPress", "Nginx", "GDPR", "Soporte técnico"],
        links: [
          { label: "nosotras.app", url: "https://nosotras.app/" },
          {
            label: "App Android",
            url: "https://play.google.com/store/apps/details?id=com.app.nosotras&hl=es_419",
          },
        ],
      },
      {
        id: "f5",
        role: "Co-Formador — Bootcamp Full Stack",
        company: "Factoría F5",
        period: "Oct 2023 – Dic 2024",
        location: "Madrid, Híbrido",
        type: "Jornada completa · 1 año 3 meses",
        featured: false,
        summary:
          "Diseñé y entregué el programa de desarrollo web full stack para más de 100 estudiantes. Mentoring técnico, feedback personalizado y preparación para el mercado laboral.",
        what: [
          "Diseñé junto al equipo el programa educativo de desarrollo web full stack.",
          "Lideré sesiones de aprendizaje de frontend y backend: React, Node.js, Express, bases de datos.",
          "Mentoring personalizado a +100 estudiantes con distintos puntos de partida.",
          "Preparé a los alumnos para entrevistas técnicas y el mercado laboral real.",
          "Me mantuve al día con tendencias del sector para actualizar el contenido continuamente.",
        ],
        stack: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "SQL",
          "Git",
          "Metodologías Ágiles",
        ],
      },
      {
        id: "people",
        role: "Desarrollador Web Full Stack",
        company: "PEOPLE EXPERTS Psicólogos Empresariales",
        period: "May 2023 – Oct 2023",
        location: "Madrid, Híbrido",
        type: "Jornada completa · 6 meses",
        featured: false,
        summary:
          "Primer trabajo en empresa. Desarrollé aplicaciones web completas con Vue.js en el frontend y Laravel en el backend, colaborando con diseñadores y analistas.",
        what: [
          "Desarrollé el frontend con Vue.js siguiendo arquitectura MVC.",
          "Construí el backend con Laravel / PHP con endpoints RESTful.",
          "Escribí tests unitarios e integración para garantizar calidad del software.",
          "Colaboré con diseñadores y analistas en la planificación y entrega de soluciones.",
        ],
        stack: ["Vue.js", "Laravel", "PHP", "MySQL", "REST APIs", "Git"],
      },
      {
        id: "clickgenius",
        role: "Desarrollador Web",
        company: "Click Genius",
        period: "Oct 2022 – Jun 2023",
        location: "Madrid, Remoto",
        type: "Jornada completa · 9 meses",
        featured: false,
        summary:
          "Primer contacto con el mundo profesional. Desarrollé apps y sitios web personalizados para distintos clientes, gestionando proyectos de forma autónoma.",
        what: [
          "Desarrollé aplicaciones web, sitios y sistemas de bases de datos a medida.",
          "Colaboré con clientes para entender requisitos y ofrecer soluciones efectivas.",
          "Gestioné proyectos de forma autónoma cumpliendo plazos de entrega.",
        ],
        stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      },
    ],

    // Stack
    stackEyebrow: "Stack",
    stackDesc: "Tecnologías con las que construyo productos reales a diario.",

    // Projects
    proyectosEyebrow: "Proyectos",
    proyectosDesc:
      "Cada proyecto cuenta el problema que resolvía, mi rol y las decisiones técnicas que tomé.",
    queConstrue: "Qué construí",
    verProyecto: "Ver proyecto",
    featuredBadge: "Destacado",
    projectsData: [
      {
        title: "Di-Mo Platform",
        subtitle: "SaaS — Node.js · TypeScript · React · Firebase",
        description:
          "Plataforma SaaS para el sector de la arquitectura y la construcción. Diseñé y desarrollé toda la infraestructura cloud: API REST con Node.js + TypeScript, panel de administración en React/Vite, sincronización en tiempo real entre app Unity y Firebase Firestore, y sistema de exportación de proyectos en PDF y DXF.",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        link: "https://github.com/oliverio89",
        what: "Backend API REST, arquitectura Firebase Firestore + GCS, panel web React/Vite, auth Firebase, exportación PDF/DXF.",
        role: "Lead Full-Stack Developer & Platform Architect",
      },
      {
        title: "Dungeonize",
        subtitle: "Primer proyecto personal — MERN Stack",
        description:
          "Uno de mis primeros proyectos no profesionales. Una herramienta para crear mapas de mazmorras para juegos de rol. Con él aprendí React, Node.js y MongoDB de forma práctica, y me sirvió para entender cómo estructurar una app full-stack de principio a fin.",
        image: "https://i.imgur.com/XPTXAWE.png",
        link: "https://dungeonize.fly.dev/",
        what: "Frontend React, backend Node.js, base de datos MongoDB, editor visual de mapas.",
        role: "Proyecto personal de aprendizaje",
        hideProjectLink: true,
      },
      {
        title: "Circle — Red Social Geolocalizada",
        subtitle: "Primer proyecto en equipo — MERN Stack",
        description:
          "Primer proyecto colaborativo en equipo internacional. Combinamos red social y geolocalización (como Facebook + Tinder). Un reto enorme en ese momento: coordinación del equipo, Git en paralelo, integración de APIs externas. Aprendí más en esas dos semanas que en meses.",
        image: "https://i.imgur.com/nfvTz9E.png",
        link: "https://circle0.netlify.app/",
        what: "Backend Express, MongoDB, API geolocalización, trabajo en equipo internacional con Git.",
        role: "Proyecto de bootcamp en equipo",
        hideProjectLink: true,
      },
      {
        title: "Portal Empleo Paradores + SaaS Interno",
        subtitle:
          "Trabajo profesional en PEOPLE EXPERTS — Laravel · PHP · Vue.js",
        description:
          "Durante mi etapa en PEOPLE EXPERTS desarrolló el portal de empleo corporativo de Paradores y el backend del SaaS interno de la empresa. El portal gestiona candidaturas, filtros de búsqueda y panel de RRHH. El SaaS interno centralizaba la gestión de los procesos psicológicos empresariales de la compañía.",
        image: "",
        link: "https://paradores.portaldelcandidato.es/paradores",
        what: "Backend Laravel/PHP, MySQL, Vue.js frontend, panel RRHH, sistema de candidaturas, SaaS interno empresarial.",
        role: "Full-Stack Developer en PEOPLE EXPERTS (may–oct 2023)",
        hideAllLinks: true,
        hideImage: true,
      },
    ],

    // Contact
    contactEyebrow: "Contacto",
    contactTitle: "¿Tienes un proyecto?",
    contactTitleGradient: "Hablemos.",
    contactDesc:
      "Estoy disponible para freelance, colaboraciones o posiciones senior. Escríbeme y te respondo en 24h.",
    contactSuccessTitle: "¡Mensaje enviado!",
    contactSuccessDesc:
      "Te responderé lo antes posible. Gracias por contactarme.",
    contactAnotherMessage: "Enviar otro mensaje",
    contactNameLabel: "Nombre",
    contactNamePlaceholder: "Tu nombre",
    contactEmailLabel: "Correo electrónico",
    contactEmailPlaceholder: "tu@email.com",
    contactMessageLabel: "Mensaje",
    contactMessagePlaceholder: "Cuéntame en qué puedo ayudarte...",
    contactError: "Algo salió mal. Escríbeme a oliverio89@gmail.com",
    contactSending: "Enviando...",
    contactSend: "Enviar",
    contactConnect: "Conectemos",
    contactConnectDesc:
      "Siempre abierto a nuevas oportunidades, proyectos y charlas sobre tecnología.",
    contactLocation: "Motril, España",

    // Footer
    inicio: "Inicio",
    hechoConAmor: "Hecho con",
    footerTagline: "Full-Stack Developer · Platform Architect · AI Automation",
  },
  en: {
    titulo: "Víctor Moreno García",
    subtitulo: "Lead Full-Stack Developer & Platform Architect",
    descripción:
      "Full-Stack Developer specializing in SaaS platforms, cloud architectures and AI automation. I build systems that connect technology with real-world problems.",
    descriptionAbout:
      "Lead Full-Stack Developer currently architecting Di-Mo, a SaaS platform for the construction sector. Specialized in Node.js, React, Firebase and AI automation. Former co-trainer at Factoría F5, where I trained 100+ developers.",
    AcercaDeMí: "About me",
    Habilidades: "Skills",
    Proyectos: "Projects",
    ExperienciaLaboral: "Experience",
    EducaciónCertificaciones: "Education",
    TestimoniosReferencias: "References",
    Contacto: "Contact",
    Stack: "Tech Stack",
    Aplicaciones: "Projects I have built",

    // Hero
    disponible: "Available for projects",
    heroRoles: [
      "Lead Full-Stack Developer",
      "Platform Architect",
      "Automation & AI",
      "SaaS Builder",
    ],
    heroSubtitle:
      "I design systems that connect technology with real-world problems.",
    heroSubtitle2: "From SaaS cloud architectures to AI automations.",
    verExperiencia: "View my experience",
    contactar: "Contact",
    anosExp: "Years of experience",
    empresas: "Companies",
    stacksDominados: "Stacks mastered",

    // About
    sobreMiEyebrow: "About me",
    aboutTitle: "I build systems,",
    aboutTitleGradient: "not just code.",
    aboutBio1:
      "I'm a Full-Stack developer specialized in cloud architectures, SaaS platforms and AI automation. I'm driven to build systems that solve real problems — not just implement features, but design complete solutions from the database to the interface.",
    aboutBio2:
      "I currently lead the development of Di-Mo, a SaaS platform for the architecture sector that syncs data in real time between a Unity mobile app and the cloud. Before that, I trained 100+ developers at Factoría F5 and worked on multiple web projects with Vue, Laravel and React.",
    aboutBio3:
      "What interests me most now: the intersection between backend development, cloud infrastructure and AI automation to create workflows that eliminate manual work.",
    aboutStackAutomatizacion: "Automation",
    aboutLocation: "Motril, Spain",
    aboutRole: "Lead Full-Stack @ Di-Mo",
    Frontend: "Frontend",
    Backend: "Backend",
    "Cloud & Infra": "Cloud & Infra",

    // Experience
    trayectoriaEyebrow: "Career",
    expTitle: "Professional",
    expTitleGradient: "experience.",
    expDesc:
      "3+ years building platforms, teaching and solving real problems with technology.",
    loQueHice: "What I did:",
    verEnProduccion: "Live:",
    actual: "Current",
    experienceData: [
      {
        id: "dimo",
        role: "Lead Full-Stack Developer & Platform Architect",
        company: "JJendémico — Di-Mo",
        period: "Jan 2026 – Present",
        location: "Málaga, Hybrid",
        type: "Full-time",
        featured: true,
        summary:
          "Di-Mo is a SaaS platform for the architecture and construction sector. I designed and developed the entire cloud infrastructure that supports the Unity mobile app: backend, web panel, and real-time synchronization.",
        what: [
          "Designed the complete REST API backend architecture with Node.js + TypeScript from scratch.",
          "Structured the data layer in Firebase Firestore and Google Cloud Storage, optimizing for real-time synchronization between the Unity app and the cloud.",
          "Developed the full web admin panel with React, TypeScript, Vite, and Material UI.",
          "Implemented authentication system with Firebase Auth and Google Sign-In.",
          "Designed the project export engine in PDF, DXF, and file bundles.",
          "Technically coordinated with the Unity team and managed integrations with external companies.",
        ],
        stack: [
          "Node.js",
          "TypeScript",
          "React",
          "Firebase",
          "Firestore",
          "GCS",
          "Docker",
          "Vite",
          "Material UI",
        ],
      },
      {
        id: "ingenero",
        role: "Software Developer",
        company: "In Género Association",
        period: "Jan 2025 – Dec 2025",
        location: "Melilla, Remote",
        type: "Freelance · 1 year",
        featured: false,
        summary:
          "Management and maintenance of the organization's technological infrastructure. Development of digital solutions to support social projects and ensure GDPR compliance.",
        what: [
          "Managed the server infrastructure, networks, and security systems of the organization.",
          "Implemented technological tools that improved internal operational efficiency.",
          "Developed digital solutions to support the association's social projects.",
          "Ensured data protection and compliance with GDPR regulations.",
          "Trained staff in the use of new digital tools.",
        ],
        stack: ["Linux", "WordPress", "Nginx", "GDPR", "Technical Support"],
        links: [
          { label: "nosotras.app", url: "https://nosotras.app/" },
          {
            label: "Android App",
            url: "https://play.google.com/store/apps/details?id=com.app.nosotras&hl=es_419",
          },
        ],
      },
      {
        id: "f5",
        role: "Co-Trainer — Full Stack Bootcamp",
        company: "Factoría F5",
        period: "Oct 2023 – Dec 2024",
        location: "Madrid, Hybrid",
        type: "Full-time · 1 year 3 months",
        featured: false,
        summary:
          "Designed and delivered the full stack web development program for 100+ students. Technical mentoring, personalized feedback, and preparation for the job market.",
        what: [
          "Designed the full stack web development educational program with the team.",
          "Led learning sessions on frontend and backend: React, Node.js, Express, databases.",
          "Provided personalized mentoring to 100+ students with different starting points.",
          "Prepared students for technical interviews and the real job market.",
          "Stayed up to date with industry trends to continuously update content.",
        ],
        stack: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "SQL",
          "Git",
          "Agile Methodologies",
        ],
      },
      {
        id: "people",
        role: "Full Stack Web Developer",
        company: "PEOPLE EXPERTS Business Psychologists",
        period: "May 2023 – Oct 2023",
        location: "Madrid, Hybrid",
        type: "Full-time · 6 months",
        featured: false,
        summary:
          "First corporate job. Developed full web applications with Vue.js on the frontend and Laravel on the backend, collaborating with designers and analysts.",
        what: [
          "Developed the frontend with Vue.js following MVC architecture.",
          "Built the backend with Laravel / PHP with RESTful endpoints.",
          "Wrote unit and integration tests to ensure software quality.",
          "Collaborated with designers and analysts in planning and delivery of solutions.",
        ],
        stack: ["Vue.js", "Laravel", "PHP", "MySQL", "REST APIs", "Git"],
      },
      {
        id: "clickgenius",
        role: "Web Developer",
        company: "Click Genius",
        period: "Oct 2022 – June 2023",
        location: "Madrid, Remote",
        type: "Full-time · 9 months",
        featured: false,
        summary:
          "First contact with the professional world. Developed custom web apps and sites for various clients, managing projects autonomously.",
        what: [
          "Developed custom web applications, sites, and database systems.",
          "Collaborated with clients to understand requirements and offer effective solutions.",
          "Managed projects autonomously meeting delivery deadlines.",
        ],
        stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      },
    ],

    // Stack
    stackEyebrow: "Stack",
    stackDesc: "Technologies I use to build real products every day.",

    // Projects
    proyectosEyebrow: "Projects",
    proyectosDesc:
      "Each project tells the problem it solved, my role and the technical decisions I made.",
    queConstrue: "What I built",
    verProyecto: "View project",
    featuredBadge: "Featured",
    projectsData: [
      {
        title: "Di-Mo Platform",
        subtitle: "SaaS — Node.js · TypeScript · React · Firebase",
        description:
          "SaaS platform for the architecture and construction sector. I designed and developed the entire cloud infrastructure: REST API with Node.js + TypeScript, office admin panel in React/Vite, real-time synchronization between Unity app and Firebase Firestore, and PDF/DXF project export system.",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        link: "https://github.com/oliverio89",
        what: "REST API Backend, Firebase Firestore + GCS architecture, React/Vite web panel, Firebase auth, PDF/DXF export.",
        role: "Lead Full-Stack Developer & Platform Architect",
      },
      {
        title: "Dungeonize",
        subtitle: "First personal project — MERN Stack",
        description:
          "One of my first non-professional projects. A tool for creating dungeon maps for role-playing games. With it, I learned React, Node.js and MongoDB hands-on, and it helped me understand how to structure a full-stack app from start to finish.",
        image: "https://i.imgur.com/XPTXAWE.png",
        link: "https://dungeonize.fly.dev/",
        what: "React frontend, Node.js backend, MongoDB database, visual map editor.",
        role: "Personal learning project",
        hideProjectLink: true,
      },
      {
        title: "Circle — Social Network",
        subtitle: "First team project — MERN Stack",
        description:
          "First collaborative project in an international team. We combined a social network with geolocation (like Facebook + Tinder). A huge challenge at the time: team coordination, parallel Git, integration of external APIs. I learned more in those two weeks than in months.",
        image: "https://i.imgur.com/nfvTz9E.png",
        link: "https://circle0.netlify.app/",
        what: "Express backend, MongoDB, geolocation API, international teamwork with Git.",
        role: "Team bootcamp project",
        hideProjectLink: true,
      },
      {
        title: "Portal Empleo Paradores + Internal SaaS",
        subtitle:
          "Professional work at PEOPLE EXPERTS — Laravel · PHP · Vue.js",
        description:
          "During my time at PEOPLE EXPERTS I developed the corporate job portal for Paradores and the backend of the company's internal SaaS. The portal manages applications, search filters and HR panel. The internal SaaS centralized the management of the company's business psychological processes.",
        image: "",
        link: "https://paradores.portaldelcandidato.es/paradores",
        what: "Laravel/PHP backend, MySQL, Vue.js frontend, HR panel, application system, internal corporate SaaS.",
        role: "Full-Stack Developer at PEOPLE EXPERTS (May–Oct 2023)",
        hideAllLinks: true,
        hideImage: true,
      },
    ],

    // Contact
    contactEyebrow: "Contact",
    contactTitle: "Have a project?",
    contactTitleGradient: "Let's talk.",
    contactDesc:
      "I'm available for freelance, collaborations or senior positions. Write me and I'll reply within 24h.",
    contactSuccessTitle: "Message sent!",
    contactSuccessDesc:
      "I'll get back to you as soon as possible. Thanks for reaching out.",
    contactAnotherMessage: "Send another message",
    contactNameLabel: "Name",
    contactNamePlaceholder: "Your name",
    contactEmailLabel: "Email address",
    contactEmailPlaceholder: "your@email.com",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "How can I help you?",
    contactError:
      "Something went wrong. Email me directly at oliverio89@gmail.com",
    contactSending: "Sending...",
    contactSend: "Send",
    contactConnect: "Let's connect",
    contactConnectDesc:
      "Always open to new opportunities, interesting projects and tech conversations.",
    contactLocation: "Motril, Spain",

    // Footer
    inicio: "Home",
    hechoConAmor: "Made with",
    footerTagline: "Full-Stack Developer · Platform Architect · AI Automation",
  },
};

export default translations;
