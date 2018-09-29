export const navItems = [
  {
    name: 'Rusia',
    url: '/dashboard',
    icon: 'icon-location-pin',
    badge: {
      variant: 'info',
      text: 'Bienvenido!'
    }
  },
  
  {
    title: true,
    name: 'Mi itinerario'
  },
  {
    name: 'Detalle',
        url: '/base/collapses',
        icon: 'icon-menu'
  },
  {
    title: true,
    name: 'Ayudas'
  },
  {
    name: 'Google Maps',
    url: '/google-maps',
    icon: 'icon-map',
    children: [
      {
        name: 'Moscú',
        url: '/google-maps',
        icon: 'icon-map'
      },
      {
        name: 'San Petersburgo',
        url: '/google-maps1',
        icon: 'icon-map'
      },
      
    ]
  },
  
  {
    name: 'Mapa de Metro',
    url: '/notifications',
    icon: 'fa fa-subway fa-lg mt-4',
    children: [
      {
        name: 'Moscú',
        url: '/notifications/alerts',
        icon: 'fa fa-subway fa-lg mt-4'
      },
      {
        name: 'San Petersburgo',
        url: '/notifications/modals',
        icon: 'fa fa-subway fa-lg mt-4'
      },
      
    ]
  },
  
];
