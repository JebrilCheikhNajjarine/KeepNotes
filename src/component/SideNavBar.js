import { CgNotes } from "react-icons/cg";
import { BsClockFill } from "react-icons/bs";
import { IoMdArchive } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
function SideNavBar() {
  return (
    <div className="  h-full w-20 flex flex-col bg-white m-2 py-2 rounded-xl text-gray-800 shadow-lg border-2 dark:border-slate-400 dark:bg-primary">
      <SideBarIcons icon={<CgNotes size="28" />} text="Notes" />
      <SideBarIcons icon={<BsClockFill size="28" />} text="Reminders" />
      <SideBarIcons icon={<IoMdArchive size="28" />} text="Archive" />
      <SideBarIcons icon={<RiDeleteBin5Fill size="28" />} text="Bin" />
    </div>
  );
}
function SideBarIcons({ icon, text }) {
  return (
    <div className="sidebar-icon group z-20">
      {icon}
      <span className="sidebar-Tip group-hover:scale-100">{text}</span>
    </div>
  );
}
export default SideNavBar;
