export default [
  {
    component: "CNavItem",
    name: "داشبورد",
    to: "/dashboard",
    icon: "cil-speedometer"
    //badge: {
    //  color: 'primary',
    //  text: 'NEW',
    //},
  },
  {
    component: "CNavTitle",
    name: "سامانه کارگزینی"
  },
  {
    component: "CNavGroup",
    name: "کاربران",
    to: "/base",
    icon: "cil-puzzle",
    items: [
      {
        component: "CNavItem",
        name: "افزودن کاربر جدید",
        to: "/user/create-user"
      },
      {
        component: "CNavItem",
        name: "لیست کاربران",
        to: "/user/user-list"
      }
    ]
  },
  {
    component: "CNavGroup",
    name: "دسترسی ها",
    to: "/access",
    icon: "cil-cursor",
    items: [
      {
        component: "CNavItem",
        name: "ایجاد دسترسی",
        to: "/access/create-access"
      },
      {
        component: "CNavItem",
        name: "لیست دسترسی ها",
        to: "/access/access-list"
      }
    ]
  }
];
