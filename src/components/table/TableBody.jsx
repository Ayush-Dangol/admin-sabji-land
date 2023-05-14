import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function TableBody({
  tableData,
  columns,
  update,
  del,
  preFilled,
  page,
  selected,
  totalData,
}) {
  const deleteEntry = (id) => {
    fetch(`http://localhost:4000/tabledata/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp");
        console.log(del);
        del(1);
      });
    });
  };

  function Btn(props) {
    const ref = useRef();
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    const [show, setShow] = useState(false);

    return (
      <div ref={ref} className="table-menu-container">
        <span
          onClick={() => {
            setShow(!show);
          }}
        >
          <BsThreeDotsVertical />
        </span>
        {show ? (
          <div className="table-menu">
            <ul>
              <li
                onClick={() => {
                  del(props.id);
                  setShow(false);
                }}
              >
                Delete
              </li>
              <hr />
              <li
                onClick={() => {
                  preFilled(props.id);
                  update();
                  setShow(false);
                  console.log("here", props.id);
                }}
              >
                Update
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  return (
    <>
      <tbody>
        {tableData?.map((data) => {
          return (
            <tr key={data._id} className="table-rows">
              {columns?.map(({ accessor }) => {
                if (data[accessor] === "") {
                  return <td>--</td>;
                } else {
                  if (accessor === "image") {
                    return (
                      <td>
                        <img src={data[accessor]} alt="" />
                      </td>
                    );
                  }
                  if (accessor === "id") {
                    return <td>{totalData?.indexOf(data) + 1}</td>;
                  } else {
                    return (
                      <>
                        <td key={accessor}>{data[accessor]}</td>
                      </>
                    );
                  }
                }
              })}
              <td key={data._id}>
                <Btn id={data._id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
