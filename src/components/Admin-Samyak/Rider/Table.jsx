import React, { useState, useEffect } from "react";
import Entry from "./Entry";
// import data from "./riderData";

function createEntry(empTerm) {
  return (
    <Entry
      key={empTerm.id}
      id={empTerm.id}
      image={empTerm.image}
      uname={empTerm.username}
      title={empTerm.title}
      contact={empTerm.contact}
      address={empTerm.address}
      email={empTerm.email}
    />
  );
}

function Table() {
  const [data, setdata] = useState([]);
  const url = `http://localhost:4007/data`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setdata(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="admin-tableContainer">
      <table>
        <tr>
          <th>E.ID.</th>
          <th>Image</th>
          <th>E.Name</th>
          <th>Job Title</th>
          <th>Contact No.</th>
          <th>Address</th>
          <th>Email</th>
          <th></th>
        </tr>
        {data?.map(createEntry)}
      </table>
    </div>
  );
}

export default Table;
