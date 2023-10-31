import { MenuItem } from './menu.model';

export const AdminMENU: MenuItem[] = [
  
  {
    id: 2,
    label: 'Dashboard',
    icon: 'ri-dashboard-2-line',
    link: '/dashboard',
  },
  {
    id: 8,
    label: 'Coupon',
    icon: 'ri-apps-2-line',
    link: '/admin/coupon',
  },

  {
    id: 55,
    label: 'Users',
    icon: 'ri-account-circle-line',
    link: '/admin/users',
  },
  {
    id: 55,
    label: 'Booking',
    icon: 'bx bx-shopping-bag fs-22',
    link: '/admin/bookings',
  },
  {
    id: 55,
    label: 'Drivers',
    icon: 'bx bx-shopping-bag fs-22',
    link: '/admin/drivers',
  },
]

export const UserMENU: MenuItem[] = [
  {
 
  id: 2,
  label: 'Dashboard',
  icon: 'ri-dashboard-2-line',
  link: '/dashboard',
},
{
  id: 8,
  label: 'Coupon',
  icon: 'ri-apps-2-line',
  link: '/admin/add-coupon',
},

// {
//   id: 55,
//   label: 'Users',
//   icon: 'ri-account-circle-line',
//   link: '/admin/users',
// },
// {
//   id: 55,
//   label: 'Booking',
//   icon: 'bx bx-shopping-bag fs-22',
//   link: '/admin/bookings',
// },
// {
//   id: 55,
//   label: 'Drivers',
//   icon: 'bx bx-shopping-bag fs-22',
//   link: '/admin/drivers',
// },

]