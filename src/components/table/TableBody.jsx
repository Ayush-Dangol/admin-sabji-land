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
                <button
                  onClick={() => {
                    del(data.id);
                  }}
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    preFilled(data.id);
                    update();
                  }}
                >
                  update
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
