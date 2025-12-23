
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
export default function App() {
  const [users, setUsers] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [visible, setVisible] = useState(false);
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
async function saveUser() {
  // basic validation
  if (!formData.name || !formData.phone || !formData.email || !formData.city) {
    alert("All fields are required");
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
  setFormData(user);
  setVisible(true);
}

function closeDialog() {
  setVisible(false);
  setEditUser(null);
  setFormData({ name: "", phone: "", email: "", city: "" });
}






  useEffect(() => {
    fetch("http://localhost:3000/users")
        
      .then(res =>{
         console.log(res.ok);     // false
    console.log(res.status); 
        return res.json()})
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);
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
  placeholder="Search..."
  value={globalFilter}
  onChange={(e) => setGlobalFilter(e.target.value)}
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
  onHide={() => setVisible(false)}
>
 <div className="p-fluid">
  <InputText
    className="mb-2"
    name="name"
    placeholder="Name"
    value={formData.name}
    onChange={handleChange}
  />

  <InputText
    className="mb-2"
    name="phone"
    placeholder="Phone"
    value={formData.phone}
    onChange={handleChange}
  />

  <InputText
    className="mb-2"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
  />

  <InputText
    className="mb-2"
    name="city"
    placeholder="City"
    value={formData.city}
    onChange={handleChange}
  />

  <Button
    label={editUser ? "Update" : "Save"}
    onClick={saveUser}
  />
</div>

</Dialog>
      <DataTable value={users}   filterDisplay="row" stripedRows 
      showGridlines  paginator rows={5} 
     rowsPerPageOptions={[5, 10, 20]} sortable
       globalFilter={globalFilter} 
      >
        <Column field="id" header="ID"  sortable filter/>
        <Column field="name" header="Name" sortable filter />
        <Column field="phone" header="Phone" sortable filter />
        <Column field="email" header="Email" sortable filter />
        <Column field="city" header="City" sortable  filter/>
        <Column header="Actions" body={actionTemplate} />

      </DataTable>
    </div>
  );
}
