
export const MENU_ITEMS = [
  { 
    title: 'Home', 
    href: '/' 
  },
  { 
    title: 'Products', 
    href: '/products',
    subMenu: [
      { 
        title: 'Biomedical Equipment', 
        href: '/products/biomedical-equipment' 
      },
      { 
        title: 'Surgical Accessories', 
        href: '/products/surgical-accessories' 
      }
    ]
  },
  { 
    title: 'Services', 
    href: '/services',
    subMenu: [
      { 
        title: 'Calibration', 
        href: '/calibration-service' 
      },
      { 
        title: 'Outsourcing', 
        href: '/outsourcing-service' 
      }
    ]
  },
  { 
    title: 'About', 
    href: '/about' 
  },
  { 
    title: 'Contact', 
    href: '/contact' 
  }
];
