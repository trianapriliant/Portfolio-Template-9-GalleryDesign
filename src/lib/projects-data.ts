export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'UI/UX' | 'Print' | 'Digital Art' | 'Web Design';
  image: string;
  description: string;
  tools: string[];
  insights: string;
  gallery: string[];
  year: string;
  client: string;
}

export const projects: Project[] = [
  {
    id: 'modern-branding-identity',
    title: 'Identitas Brand Modern',
    category: 'Branding',
    image: '/images/project-branding-1.jpg',
    description: 'Pengembangan identitas visual komprehensif untuk startup teknologi dengan pendekatan minimalis dan modern.',
    tools: ['Adobe Illustrator', 'Figma', 'Adobe Photoshop'],
    insights: 'Fokus pada kesederhanaan dan fleksibilitas untuk aplikasi digital dan cetak.',
    gallery: ['/images/project-branding-1.jpg', '/images/project-branding-2.jpg'],
    year: '2024',
    client: 'TechStart Inc.'
  },
  {
    id: 'mobile-app-uiux',
    title: 'Aplikasi Mobile E-Commerce',
    category: 'UI/UX',
    image: '/images/project-uiux-1.png',
    description: 'Desain antarmuka aplikasi mobile untuk platform e-commerce dengan fokus pada pengalaman pengguna yang intuitif.',
    tools: ['Figma', 'Sketch', 'Principle'],
    insights: 'Implementasi design system yang konsisten dan user flow yang efisien.',
    gallery: ['/images/project-uiux-1.png', '/images/project-uiux-2.jpg'],
    year: '2024',
    client: 'ShopEasy'
  },
  {
    id: 'poster-campaign-design',
    title: 'Kampanye Poster Lingkungan',
    category: 'Print',
    image: '/images/project-print-1.jpg',
    description: 'Serangkaian poster untuk kampanye kesadaran lingkungan dengan visual impact yang kuat.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'InDesign'],
    insights: 'Menggunakan tipografi bold dan imagery yang emotif untuk mengkomunikasikan pesan.',
    gallery: ['/images/project-print-1.jpg', '/images/project-print-2.jpg'],
    year: '2023',
    client: 'Green Future Foundation'
  },
  {
    id: 'digital-illustration-art',
    title: 'Ilustrasi Digital Karakter',
    category: 'Digital Art',
    image: '/images/project-digital-1.png',
    description: 'Koleksi ilustrasi karakter digital untuk game mobile dengan style semi-realistis.',
    tools: ['Procreate', 'Adobe Photoshop', 'Clip Studio Paint'],
    insights: 'Eksplorasi teknik shading dan color theory untuk menciptakan depth dan personality.',
    gallery: ['/images/project-digital-1.png'],
    year: '2024',
    client: 'Indie Game Studio'
  },
  {
    id: 'responsive-web-design',
    title: 'Website Corporate Responsif',
    category: 'Web Design',
    image: '/images/project-web-1.png',
    description: 'Desain website corporate yang bersih dan profesional dengan fokus pada konversi.',
    tools: ['Figma', 'Adobe XD', 'Webflow'],
    insights: 'Implementasi grid system yang fleksibel dan hierarchy yang jelas.',
    gallery: ['/images/project-web-1.png'],
    year: '2024',
    client: 'Corporate Solutions Ltd.'
  },
  {
    id: 'logo-design-restaurant',
    title: 'Logo Restaurant Artisan',
    category: 'Branding',
    image: '/images/project-branding-2.jpg',
    description: 'Desain logo dan brand identity untuk restaurant artisan dengan nuansa premium.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    insights: 'Menggabungkan elemen tradisional dengan sentuhan modern untuk target pasar premium.',
    gallery: ['/images/project-branding-2.jpg'],
    year: '2023',
    client: 'Artisan Bistro'
  },
  {
    id: 'mobile-banking-app',
    title: 'Aplikasi Mobile Banking',
    category: 'UI/UX',
    image: '/images/project-uiux-2.jpg',
    description: 'Redesign aplikasi mobile banking dengan fokus pada keamanan dan kemudahan penggunaan.',
    tools: ['Figma', 'Sketch', 'InVision'],
    insights: 'Balance antara security indicators yang jelas dengan interface yang user-friendly.',
    gallery: ['/images/project-uiux-2.jpg'],
    year: '2024',
    client: 'SecureBank'
  },
  {
    id: 'packaging-design-organic',
    title: 'Packaging Produk Organik',
    category: 'Print',
    image: '/images/project-print-2.jpg',
    description: 'Desain kemasan untuk rangkaian produk organik dengan pendekatan sustainable design.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Dimension'],
    insights: 'Menggunakan material eco-friendly dan color palette yang mencerminkan nilai natural.',
    gallery: ['/images/project-print-2.jpg'],
    year: '2023',
    client: 'Organic Harvest'
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

export const categories = ['All', 'Branding', 'UI/UX', 'Print', 'Digital Art', 'Web Design'];