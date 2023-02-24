import Table from "../../table/Table";
import users from "../../data/users.json";
import { useState } from "react";
import guest from "../../data/guest.json";

function UserTable() {
  const columns = [
    { label: "#", accessor: "id", sortable: true },
    { label: "", accessor: "image", sortable: false },
    { label: "Customer", accessor: "customer", sortable: true },
    { label: "Contact No.", accessor: "contact", sortable: true },
    { label: "Address", accessor: "address", sortable: true },
    { label: "Email", accessor: "email", sortable: true },
    { label: "Created Date", accessor: "date", sortable: true },
  ];
  const data = users;
  return (
    <Table
      columns={columns}
      data={data}
      searchName="customer"
      idNum="id"
      searchPlaceholder="Search by Customer name and ID"
    />
  );
}

function GuestTable() {
  const columns = [
    { label: "#", accessor: "id", sortable: true },
    { label: "Customer", accessor: "guest", sortable: true },
    { label: "Contact No.", accessor: "contact", sortable: true },
    { label: "Address", accessor: "address", sortable: true },
    { label: "Email", accessor: "email", sortable: true },
    { label: "Created Date", accessor: "date", sortable: true },
  ];
  const data = guest;
  return (
    <Table
      columns={columns}
      data={data}
      searchName="guest"
      idNum="id"
      searchPlaceholder="Search by Guests"
    />
  );
}

export default function Categories() {
  const [user, setUser] = useState(true);
  const [guest, setGuest] = useState(false);

  return (
    <>
      <h1>Customer Details</h1>
      <ul className="category-nav">
        <li
          onClick={() => {
            setUser(true);
            setGuest(false);
          }}
          className={user ? "category-nav-active" : ""}
        >
          User
        </li>
        <li
          onClick={() => {
            setUser(false);
            setGuest(true);
          }}
          className={guest ? "category-nav-active" : ""}
        >
          Guest
        </li>
      </ul>
      <div>{user ? <UserTable /> : <GuestTable />}</div>
    </>
  );
}
