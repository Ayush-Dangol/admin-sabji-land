import { IoAddCircleOutline } from "react-icons/io5";

export default function Btns({ add, ex, addClass, exClass }) {
  return (
    <>
      <div className="btns-container">
        <button onClick={ex} className={`btns btns-ex ${exClass}`}>
          Export
        </button>
        <button onClick={add} className={`btns btns-add ${addClass}`}>
          Add{" "}
          <span>
            <IoAddCircleOutline />
          </span>
        </button>
      </div>
    </>
  );
}
