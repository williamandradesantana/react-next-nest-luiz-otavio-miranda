import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      return nextTheme;
    });
  }

  return (
    <nav className={`${styles.menu}`}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a home"
        title="Ir para a home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
