
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import './App.css'
export default function App() {
  const [users, setUsers] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(5);
  const [totalRecords, setTotalRecords] = useState(0);
  const [errormsg, setErrormsg] = useState({})
  const [error, setError] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: ""
  });

  const [editUser, setEditUser] = useState(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  function validate() {

    const empty = {}
    if (!formData.name) empty.name = "name is required"
    if (!formData.phone) empty.phone = "phone number is required"
    if (!formData.email) empty.email = "email is required"
    if (!formData.city) empty.city = "city name is required"
    return empty;
  }
  async function saveUser() {
    const msg = validate()
    // basic validation
    if (Object.keys(msg).length !== 0) {
      setErrormsg(msg)
      setError(true)
      return;
    }


    // UPDATE
    if (editUser) {
      const res = await fetch(`http://localhost:3000/users/${editUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: editUser.id })
      });

      const updated = await res.json();

      setUsers(users.map(u => (u.id === editUser.id ? updated : u)));
    }
    // CREATE
    else {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const saved = await res.json();
      setUsers([...users, saved]);
    }

    closeDialog();
  }
  async function deleteUser(id) {
    if (!window.confirm("Are you sure you want to delete?")) return;

    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    });

    setUsers(users.filter(u => u.id !== id));
  }

 function openEdit(user) {
  setEditUser(user);
  setFormData({
    name: user.name,
    phone: user.phone,
    email: user.email,
    city: user.city
  });
  setVisible(true);
}


  function closeDialog() {
    setVisible(false);
    setEditUser(null);
    setFormData({ name: "", phone: "", email: "", city: "" });
    // setErrormsg({});
  }

  useEffect(() => {
    let url = `http://localhost:3000/users?_page=${page}&_limit=${rows}`;

    if (globalFilter) {
      url += `&name_like=${globalFilter}`;
    }

    fetch(url)
      .then(res => {
        const total = res.headers.get("X-Total-Count");
        setTotalRecords(Number(total));
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => console.log(err));

  }, [page, rows, globalFilter]);
  function onPageChange(event) {
    setPage(event.page + 1);
    setRows(event.rows);
  }


  const actionTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-text"
          onClick={() => openEdit(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-text p-button-danger"
          onClick={() => deleteUser(rowData.id)}
        />
      </>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Basic DataTable</h2>
      <InputText
        placeholder="Search by Name..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setGlobalFilter(searchInput);
          }
        }}
        onBlur={() => {
          setGlobalFilter(searchInput);
        }}
      />

      <Button
        label="Add User"
        onClick={() => {
          setEditUser(null);
          setFormData({ name: "", phone: "", email: "", city: "" });
          setVisible(true);
        }}
      />

      <Dialog
        header="User Form"
        visible={visible}
        style={{ width: "30vw" }}
        onHide={() => {
          setErrormsg({})
          setVisible(false)
        }}
      >
        <div className="p-fluid">
          <InputText

            className={errormsg.name && !formData.name ? "error-border mb-2" : " mb-2"}
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />{
            !formData.name ? <p>{errormsg.name}</p> : ""
          }


          <InputText
            className={errormsg.phone && !formData.phone ? "error-border mb-2" : " mb-2"}
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {
            !formData.phone ? <p>{errormsg.phone}</p> : ""
          }

          <InputText
            className={errormsg.email && !formData.email ? "error-border mb-2" : " mb-2"}
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {
            !formData.email ? <p>{errormsg.email}</p> : ""
          }

          <InputText
            className={errormsg.city && !formData.city ? "error-border mb-2" : " mb-2"}
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          {
            !formData.city ? <p>{errormsg.city}</p> : ""
          }
          <Button
            label={editUser ? "Update" : "Save"}
            onClick={saveUser}
          />
        </div>

      </Dialog>
      <DataTable value={users} stripedRows
        showGridlines paginator
        lazy
        first={(page - 1) * rows}
        rows={rows}
        totalRecords={totalRecords}
        rowsPerPageOptions={[5, 10, 20]}
        onPage={onPageChange}
        sortable

      >
        <Column field="id" header="ID" sortable />
        <Column field="name" header="Name" sortable />
        <Column field="phone" header="Phone" sortable />
        <Column field="email" header="Email" sortable />
        <Column field="city" header="City" sortable />
        <Column header="Actions" body={actionTemplate} />

      </DataTable>
    </div>
  );
}
