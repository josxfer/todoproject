import { MdTaskAlt } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export const publicRoutes = [
  {
    name: "Iniciar sesión",
    path: "/login",
  },
  {
    name: "Regístrate",
    path: "/register",
  },
  {
    name: "Acerca de",
    path: "/about",
  },
]

export const privateRoutes = [
  {
    name: "Tareas",
    path: "/tasks",
    icon: <MdTaskAlt className="w-5 h-5 text-slate-300" />,
  },
  {
    name: "Nueva tarea",
    path: "/tasks/new",
    icon: <MdAddTask className="w-5 h-5 text-slate-300" />,
  },
  {
    name: "Perfil de usuario",
    path: "/profile",
    icon: <FaRegUser className="w-5 h-5 text-slate-300" />,
  },
];