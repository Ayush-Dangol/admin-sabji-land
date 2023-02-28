import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function TableBody({
  tableData,
  columns,
  update,
  del,
  preFilled,
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
    const [show, setShow] = useState(false);

    return (
      <>
        <span
          onClick={() => {
            setShow(!show);
          }}
          className="table-menu-container"
        >
          <BsThreeDotsVertical />
        </span>
        {show ? (
          <div className="table-menu">
            <ul>
              <li
                onClick={() => {
                  del(props.id);
                }}
              >
                Delete
              </li>
              <hr />
              <li
                onClick={() => {
                  preFilled(props.id);
                  update();
                }}
              >
                Update
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }

  return (
    <>
      <tbody>
        {tableData?.map((data) => {
          return (
            <tr key={data.id} className="table-rows">
              {columns.map(({ accessor }) => {
                if (data[accessor] === "") {
                  return <td>--</td>;
                } else {
                  if (accessor === "image") {
                    return (
                      <td>
                        <img src={data[accessor]} alt="" />
                      </td>
                    );
                  } else {
                    return (
                      <>
                        <td key={accessor}>{data[accessor]}</td>
                      </>
                    );
                  }
                }
              })}
              <td>
                <Btn id={data.id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
