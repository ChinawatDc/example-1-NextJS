import { MenuItem } from "../types/routes.model";

export const routes: MenuItem[] = [
  {
    url: "/example",
    label: "example",
    icon: 'pi pi-fw pi-video',
  },
  {
    url: "/Form",
    label: "Form",
    icon: 'pi pi-fw pi-calendar',
  },
  {
    label: "Settings",
    url: "settings",
    icon: 'pi pi-fw pi-cog',
    children: [
      {
        url: "Setting1",
        label: "Setting 1",
        children: [
          {
            url: "/Setting1/Setting11",
            label: "Setting 1.1",
          },
          {
            url: "/Setting1/Setting12",
            label: "Setting 1.2",
          },
        ],
      },
      {
        url: "Technology4",
        label: "Technology4",
        children: [
          {
            url: "/Technology4/Setting41",
            label: "Setting 4.1",
          },
          {
            url: "/Technology4/Setting42",
            label: "Setting 4.2",
          },
        ],
      },
    ],
  },
];