import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "./components/Button";

type Themes = "dark" | "light";

export function App() {
  const [theme, setTheme] = useState<Themes>(
    (localStorage.getItem("theme") as Themes) || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList[theme === "dark" ? "add" : "remove"](
      "dark"
    );
  }, [theme]);

  function handleToggleTheme() {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <nav className="z-10 sticky overflow-x-scroll backdrop-blur-xl flex gap-2 w-full left-0 top-0 right-0 px-2 md:px-8 py-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "dark:bg-zinc-800 bg-zinc-200" : ""
          }
        >
          <Button>Início</Button>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "dark:bg-zinc-800 bg-zinc-200" : ""
          }
        >
          <Button>Projetos</Button>
        </NavLink>
        <NavLink
          to="/communities"
          className={({ isActive }) =>
            isActive ? "dark:bg-zinc-800 bg-zinc-200" : ""
          }
        >
          <Button>Comunidades</Button>
        </NavLink>
        <Button onClick={handleToggleTheme}>
          <Icon
            path={mdiWeatherSunny}
            size={1}
            className="text-zinc-400 dark:block hidden"
          />
          <Icon
            path={mdiWeatherNight}
            size={1}
            className="text-zinc-400 block dark:hidden"
          />
        </Button>
      </nav>
      <div className="transition-colors p-4 md:p-10 select-none">
        <header className="flex justify-between">
          <h1 className="text-7xl md:text-8xl font-bold mb-5 dark:text-zinc-300 text-zinc-800">
            Olá, sou o
            <br />
            Vitoo.
          </h1>
        </header>
        <div className="transition-colors bg-zinc-100 border-2 border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 rounded text-zinc-600 dark:text-zinc-400 fill-zinc-600 dark:fill-zinc-400 p-4 md:p-10 shadow-2xl text-base">
          <Outlet />
        </div>
      </div>
    </>
  );
}
