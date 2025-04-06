import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  DevicePhoneMobileIcon,
  ShieldExclamationIcon,
  UsersIcon,
  EnvelopeIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Inicio",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <DevicePhoneMobileIcon {...icon} />,
        name: "Mis Dispositivos",
        path: "/my_devices",
        element: <Profile />,
      },
      {
        icon: <ShieldExclamationIcon {...icon} />,
        name: "Mis Políticas",
        path: "/my_polices",
        element: <Home />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "Perfiles de Usuario",
        path: "/user_profiles",
        element: <Home />,
      },
      {
        icon: <EnvelopeIcon {...icon} />,
        name: "Mensajería",
        path: "/messaging",
        element: <Home />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: "notifications",
      //   path: "/notifications",
      //   element: <Notifications />,
      // },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <RectangleStackIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
