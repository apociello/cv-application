const person = {
  contact: {
    firstName: 'Ethan',
    lastName: 'Winters',
    phone: '+1 (617) 555-2847',
    email: 'ethan_winters@gmail.com',
    location: 'Boston, USA',
  },
  profile: {
    description: `Backend-focused software engineer with a strong foundation in
              distributed systems and software architecture. Experienced in
              designing scalable services and solving complex technical
              challenges, with a continuous drive to learn and apply new
              technologies.`,
  },
  education: [
    {
      id: crypto.randomUUID(),
      institution: 'Boston University',
      startYear: '2017',
      endYear: '2020',
      degree: 'Bachelor of Software Engineering',
      description: `Studied software development, databases, algorithms and
                  computer systems.`,
    },
    {
      id: crypto.randomUUID(),
      institution: 'Rice University',
      startYear: '2020',
      endYear: '2022',
      degree: 'MSc Software Architecture & Distributed Systems',
      description: `Specialized in large-scale system design, microservices
                  architecture, concurrency, distributed computing, and
                  performance optimization of backend systems.`,
    },
  ],
  experience: [
    {
      company: 'Nova Tech Solutions',
      startYear: '2022',
      endYear: '2023',
      position: 'Software Engineer Intern',
      description: `Built internal tools using React and Node.js, assisted in
                  migrating legacy services to a microservices architecture, and
                  gained hands-on experience with distributed systems concepts.`,
    },
    {
      company: 'Bright Path Systems',
      startYear: '2023',
      endYear: 'Present',
      position: 'Backend Engineer',
      description: `Designed and maintained scalable backend services using Java
                  and Spring Boot, optimized system performance under high load,
                  and collaborated on the migration to a distributed
                  microservices architecture across multiple teams.`,
    },
  ],
};

export default person;
