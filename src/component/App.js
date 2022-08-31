import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";
import SideNavBar from "./SideNavBar";
import Search from "./Search";
//import SwitchButton from "./SwitchButton";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // bkun b3tlu li nkatab bl note 3a shk object newNote hwe note nafsu
    // console.log(note);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <Search />
      <div className="flex flex-row dark:bg-primary ">
        <SideNavBar />
        <div className="block w-10/12 font-Montserrat  h-full bg-white dark:bg-primary  ">
          <CreateArea onAdd={addNote} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 xl:grid-cols-4  xl:gap-12  justify-between ">
            {notes.map((noteItem, index) => {
              if (noteItem.title !== "" && noteItem.content !== "") {
                return (
                  <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
