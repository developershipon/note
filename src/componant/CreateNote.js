import { useState } from "react";
import { MdAddCircle } from "react-icons/md";

const CreateNote = (props) => {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;

    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    props.passNote(note);
  };
  return (
    <section
      className="w-1/2 md:w-2/6 xl:w-1/6 flex items-center mx-auto pt-16 mb-52"
      onDoubleClick={() => setShow(false)}
    >
      <form className="w-full h-full bg-white rounded-xl">
        {show ? (
          <input
            type="text"
            value={note.title}
            name="title"
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
            className="outline-none w-full h-16 px-2 bg-transparent"
          />
        ) : null}
        <div className="relative" onClick={() => setShow(true)}>
          <textarea
            value={note.content}
            name="content"
            onChange={InputEvent}
            placeholder="Write a note......"
            className="outline-none w-full h-32 p-2 bg-transparent"
          />
          {show ? (
            <div className="bottom-2 right-0 absolute" onClick={addEvent}>
              <MdAddCircle className="text-3xl text-slate-600 hover:text-teal-500" />
            </div>
          ) : null}
        </div>
      </form>
    </section>
  );
};

export default CreateNote;
