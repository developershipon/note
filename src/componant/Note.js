import { MdDeleteSweep } from "react-icons/md";
const Note = (props) => {
  const { title, content, index } = props;
  const deleteNote = () => {
    props.deleteNote(props.id);
  };
  return (
    <>
      <div className=" w-80 overflow-hidden p-5 bg-cover bg-hero">
        <h1 className="text-3xl text-slate-800 font-bold mb-5">{title}</h1>
        <p className="text-slate-600">{content}</p>
        <p>{index}</p>
        <button className="float-right" onClick={deleteNote}>
          <MdDeleteSweep className="text-3xl text-white hover:text-black" />
        </button>
      </div>
    </>
  );
};

export default Note;
