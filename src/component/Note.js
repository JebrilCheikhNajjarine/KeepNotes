import { ImBin } from "react-icons/im";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="relative flex m-5 hover:animate-pulse group">
      <div className="  block my-2 p-2 w-full text-lg text-gray-900 bg-white rounded-lg border-2 focus:ring-yellow-500 focus:border-blue-500 dark:bg-primary dark:text-white dark:border-slate-400 ">
        <h1 className="text-gray-900 text-2xl leading-tight font-bold mb-2 dark:text-white capitalize group-hover:text-yellow-400 dark:group-hover:text-yellow-400 ">
          {props.title}
        </h1>
        <p className="text-gray-700 text-lg mb-2 dark:text-white ">
          {" "}
          {props.content}
        </p>

        <button
          className="absolute  -right-3 top-0 rounded-full w-8 h-8 text-xl 
          font-bold bg-yellow-300 text-white dark:text-yellow-400 
           dark:bg-slate-700  "
          onClick={handleClick}
        >
          <span className="absolute top-1 right-1 text-center">
            <ImBin />
          </span>
        </button>
      </div>
    </div>
  );
}
export default Note;
