export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  category: string;
  image: string;
}

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'DevOps with Docker',
    description: 'Deploy and manage applications with Docker. Learn to containerize your apps and optimize your workflow.',
    level: 'advanced',
    duration: '40h',
    category: 'DevOps',
    image: 'https://picsum.photos/seed/shipping-containers/600/400'
  },
  {
    id: '2',
    title: 'Frontend with React',
    description: 'Develop modern interfaces with React. Master hooks, global state, and ecosystem best practices.',
    level: 'intermediate',
    duration: '60h',
    category: 'Frontend',
    image: 'https://picsum.photos/seed/web-design/600/400'
  },
  {
    id: '3',
    title: 'JavaScript Essentials',
    description: 'Master JavaScript for modern web development. From variables to asynchronous programming and ES6+.',
    level: 'beginner',
    duration: '45h',
    category: 'Development',
    image: 'https://picsum.photos/seed/code-js/600/400'
  },
  {
    id: '4',
    title: 'PHP Fundamentals',
    description: 'Learn the fundamentals of PHP, from variables to object-oriented programming. Ideal for backend beginners.',
    level: 'beginner',
    duration: '40h',
    category: 'Backend',
    image: 'https://picsum.photos/seed/backend-dev/600/400'
  },
  {
    id: '5',
    title: 'IT Programmer - Casa Pia de Lisboa',
    description: 'Complete professional course in IT programming. Combines software development with infrastructure.',
    level: 'intermediate',
    duration: '300h',
    category: 'Professional',
    image: 'https://picsum.photos/seed/it-professional/600/400'
  },
  {
    id: '6',
    title: 'RESTful API Development',
    description: 'Create professional REST APIs with PHP and security. Learn JWT authentication and design patterns.',
    level: 'intermediate',
    duration: '50h',
    category: 'Backend',
    image: 'https://picsum.photos/seed/api-network/600/400'
  },
  {
    id: '7',
    title: 'Web Security Best Practices',
    description: 'Protect your applications against common vulnerabilities. OWASP Top 10, encryption, and data security.',
    level: 'intermediate',
    duration: '30h',
    category: 'Security',
    image: 'https://picsum.photos/seed/cyber-security/600/400'
  },
  {
    id: '8',
    title: 'Software Development Technician - Casa Pia de Lisboa',
    description: 'Specialized technical course focused on full-stack software development, systems analysis, and database management.',
    level: 'intermediate',
    duration: '350h',
    category: 'Professional',
    image: 'https://picsum.photos/seed/software-engineer/600/400'
  }
];