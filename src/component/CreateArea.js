import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function onChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        // bred hon object prevNote m3 esm jdid wl value [] => l btred value 72i2i
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    // he krml bas tkun button b form w ekbos
    // 3lha bw2fa ma t3mol refresh deyman
    event.preventDefault();
  }
  return (
    <div className="  flex items-center justify-start sm:justify-center m-2 px-10 pb-2  ">
      <form className="relative block p-6 rounded-lg shadow-md bg-white border-2 dark:border-slate-400 dark:bg-primary  max-w-sm items-center">
        <input
          name="title"
          onChange={onChange}
          className="block my-2 p-2 w-full text-lg text-gray-900 bg-white rounded-lg border-2 focus:ring-yellow-500  dark:bg-primary dark:text-yellow-400 dark:border-slate-400"
          placeholder="Title"
          value={note.title}
        />
        <div class="flex items-center   rounded-lg ">
          <textarea
            name="content"
            onChange={onChange}
            className="block  p-2 w-full text-lg text-gray-900 bg-white rounded-lg border-2 focus:ring-yellow-500  dark:bg-primary dark:text-yellow-400 dark:border-slate-400 "
            placeholder="Take a note..."
            rows="5"
            value={note.content}
          />
          <button
            onClick={submitNote}
            className="absolute -bottom-4 -right-4 rounded-full w-8 h-8 text-2xl font-bold bg-yellow-300 text-white dark:text-yellow-400  dark:bg-slate-700  cursor-pointer "
          >
            <span className="text-center">+</span>
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateArea;
