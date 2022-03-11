import { useEffect, useState } from "react";
import "./index.css";
import CreateNote from "./componant/CreateNote";
import Note from "./componant/Note";

function App() {
  useEffect(() => {
    document.title = `Note Items ${num}`;
  });
  const [num, setNum] = useState(0);
  const [adItem, setaddItem] = useState([]);
  const addNote = (note) => {
    setNum(num + 1);
    setaddItem((preData) => {
      return [...preData, note];
    });
  };
  const onDelete = (id) => {
    setNum(num - 1);
    setaddItem((preData) =>
      preData.filter((currData, index) => {
        return index !== id;
      })
    );
  };
  return (
    <div className="App bg-cyan-800 min-h-screen select-none">
      <div className="text-white text-center">
        <h3>Click to Show</h3>
        <h3>DubbleClick to Hide</h3>
      </div>

      <CreateNote passNote={addNote} />
      <section className="container flex flex-wrap mx-auto justify-center gap-2 pb-24">
        {adItem.map((value, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={value.title}
              content={value.content}
              deleteNote={onDelete}
              index={index + 1}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
