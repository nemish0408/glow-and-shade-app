
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
        title: 'Biomedical', 
        href: '/products/biomedical' 
      },
      { 
        title: 'Surgical', 
        href: '/products/surgical' 
      }
    ]
  },
  { 
    title: 'Services', 
    href: '/services' 
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
