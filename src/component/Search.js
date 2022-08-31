import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div className="relative dark:bg-primary">
      <input
        type="text"
        name="search"
        placeholder=""
        class="  m-2 px-9 py-3  text-gray-800 text-start w-20 text-lg rounded-lg  border-2
         dark:border-slate-400 dark:bg-primary dark:text-yellow-400  max-w-md 
        focus:outline-0 focus:w-11/12 duration-500 "
      ></input>
      <span className="absolute top-5 left-3 text-3xl text-yellow-400 text-center ">
        <AiOutlineSearch />
      </span>
    </div>
  );
}
export default Search;
