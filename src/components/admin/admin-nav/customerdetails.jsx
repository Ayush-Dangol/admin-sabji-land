import Table from "../../table/Table";
import users from "../../data/users.json";
import { useState, useEffect } from "react";
import guest from "../../data/guest.json";
import AddCustomers from "../update/addCustomer";

export default function Customers() {
  const [columns, setColumns] = useState([]);
  const [urlData, setUrlData] = useState("users");
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);
  const [update, setUpdate] = useState(false);

  const [id, setId] = useState(1);
  const [userName, setUserName] = useState("");
  const [cNumb, setCNumb] = useState();
  const [address, setAddress] = useState("");
  const [sNumb, setSNumb] = useState();
  const [email, setEmail] = useState();
  const [img, setImg] = useState();
  // const [category, setCategory] = useState("");
  // const [family, setFamily] = useState("");
  // const [type, setType] = useState("");

  const url = `http://localhost:4002/${urlData}`; //url for the json file

  const toggleAdd = () => {
    setAdd(true);
    setUpdate(false);
  };
  const toggleUpdate = () => {
    setUpdate(true);
    setAdd(false);
  };
  const closeAdd = () => {
    setAdd(false);
  };
  const closeUpdate = () => {
    setUpdate(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    if (user) {
      uTable();
    }

    fetchData();
  }, [urlData]);

  // useEffect(() => {

  //   cTable();
  // }, []);

  useEffect(() => {
    preFilled(id);
  }, [id]);

  const preFilled = (sno) => {
    setId(sno);
    let item = data[sno - 1];
    if (user) {
      setUserName(item?.user);
    } else {
      setUserName(item?.guest);
    }

    setCNumb(item?.contact);
    setAddress(item?.address);
    setEmail(item?.email);
    setSNumb(item?.sNumb);
    console.log(item);
  };

  function uTable() {
    const columns = [
      { label: "#", accessor: "id", sortable: true },
      { label: "", accessor: "image", sortable: false },
      { label: "Customer", accessor: "user", sortable: true },
      { label: "Contact No.", accessor: "contact", sortable: true },
      { label: "Address", accessor: "address", sortable: true },
      { label: "Email", accessor: "email", sortable: true },
      { label: "Created Date", accessor: "date", sortable: true },
    ];
    setColumns(columns);
    setUrlData("users");
  }

  function gTable() {
    const columns = [
      { label: "#", accessor: "id", sortable: true },
      { label: "Customer", accessor: "guest", sortable: true },
      { label: "Contact No.", accessor: "contact", sortable: true },
      { label: "Address", accessor: "address", sortable: true },
      { label: "Email", accessor: "email", sortable: true },
      { label: "Created Date", accessor: "date", sortable: true },
    ];
    setColumns(columns);
    setUrlData("guests");
  }

  const [user, setUser] = useState(true);
  const [guest, setGuest] = useState(false);

  return (
    <>
      {add ? (
        <AddCustomers
          url={url}
          lastid={data.at(-1).id}
          call="POST"
          close={closeAdd}
          type={user ? "user" : "guest"}
        />
      ) : (
        ""
      )}

      {update ? (
        <AddCustomers
          url={url}
          name={userName}
          cnum={cNumb}
          snum={sNumb}
          cAddress={address}
          cEmail={email}
          id={id}
          call="PUT"
          close={closeUpdate}
          type={user ? "user" : "guest"}
        />
      ) : (
        ""
      )}

      {/* {add ? (
        <AddCategory
          url={url}
          data="Category Name"
          type="text"
          class="add-category-input"
          name={
            seeCategory ? "category" : pFamily ? "productFamily" : "productType"
          }
          placeholder="eg: Vegetables"
          lastid={data.at(-1).id}
          call="POST"
          close={closeAdd}
        />
      ) : (
        ""
      )}

       */}
      <div className={add || update ? "category-container" : ""}>
        <div className={add || update ? "dim-bg" : ""}></div>
        <h1>Customer Details</h1>
        <ul className="category-nav">
          <li
            onClick={() => {
              setUser(true);
              setGuest(false);
              uTable();
            }}
            className={user ? "category-nav-active" : ""}
          >
            User
          </li>
          <li
            onClick={() => {
              setUser(false);
              setGuest(true);
              gTable();
            }}
            className={guest ? "category-nav-active" : ""}
          >
            Guest
          </li>
        </ul>
        <div>
          <Table
            url={url}
            columns={columns}
            data={data}
            searchName={user ? "user" : "guest"}
            idNum="id"
            add={toggleAdd}
            update={toggleUpdate}
            searchPlaceholder={user ? "Search by Users" : "Search by Guests"}
            preFilled={preFilled}
          />
        </div>
      </div>
    </>
  );
}

// function UserTable() {
//   const columns = [
//     { label: "#", accessor: "id", sortable: true },
//     { label: "", accessor: "image", sortable: false },
//     { label: "Customer", accessor: "customer", sortable: true },
//     { label: "Contact No.", accessor: "contact", sortable: true },
//     { label: "Address", accessor: "address", sortable: true },
//     { label: "Email", accessor: "email", sortable: true },
//     { label: "Created Date", accessor: "date", sortable: true },
//   ];
//   const data = users;
//   return (
//     <Table
//       columns={columns}
//       data={data}
//       searchName="customer"
//       idNum="id"
//       searchPlaceholder="Search by Customer name and ID"
//     />
//   );
// }

// function GuestTable() {
//   const columns = [
//     { label: "#", accessor: "id", sortable: true },
//     { label: "Customer", accessor: "guest", sortable: true },
//     { label: "Contact No.", accessor: "contact", sortable: true },
//     { label: "Address", accessor: "address", sortable: true },
//     { label: "Email", accessor: "email", sortable: true },
//     { label: "Created Date", accessor: "date", sortable: true },
//   ];
//   const data = guest;
//   return (
//     <Table
//       columns={columns}
//       data={data}
//       searchName="guest"
//       idNum="id"
//       searchPlaceholder="Search by Guests"
//     />
//   );
// }

// export default function Categories() {
//   const [user, setUser] = useState(true);
//   const [guest, setGuest] = useState(false);

//   return (
//     <>
//       <h1>Customer Details</h1>
//       <ul className="category-nav">
//         <li
//           onClick={() => {
//             setUser(true);
//             setGuest(false);
//           }}
//           className={user ? "category-nav-active" : ""}
//         >
//           User
//         </li>
//         <li
//           onClick={() => {
//             setUser(false);
//             setGuest(true);
//           }}
//           className={guest ? "category-nav-active" : ""}
//         >
//           Guest
//         </li>
//       </ul>
//       <div>{user ? <UserTable /> : <GuestTable />}</div>
//     </>
//   );
// }
