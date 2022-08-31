import { SiGooglekeep } from "react-icons/si";
function Header() {
  return (
    <header className="bg-yellow-400 p-6 dark:bg-primary dark:border-b-2 dark:border-slate-400">
      <h1 className="flex items-center text-4xl sm:text-6xl text-white dark:text-yellow-400">
        <SiGooglekeep size="40" /> KeepNotes
      </h1>
    </header>
  );
}
export default Header;
