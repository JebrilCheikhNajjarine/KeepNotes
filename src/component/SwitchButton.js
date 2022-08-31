import { useEffect, useState } from "react";
function SwitchButton() {
  const [Theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [Theme]);
  function handleThemeSwitch() {
    setTheme(Theme === "dark" ? "light" : "dark");
  }
  return (
    <button
      className=" absolute text-4xl top-9 right-5"
      type="button"
      onClick={handleThemeSwitch}
    >
      {Theme === "dark" ? "🌚" : "🌝"}
    </button>
  );
}
export default SwitchButton;
