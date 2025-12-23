import { useEffect, useState } from "react";

function App() {
  const API_URL = "http://localhost:3001/users";

  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: ""
  });
  const [editId, setEditId] = useState(null);

  // ======================
  // READ (GET)
  // ======================
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // ======================
  // HANDLE INPUT
  // ======================
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // ======================
  // CREATE / UPDATE
  // ======================
  async function handleSubmit() {
    if (!form.name || !form.phone || !form.email || !form.city) {
      alert("All fields required");
      return;
    }

    // UPDATE
    if (editId) {
      const res = await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editId, ...form })
      });

      const updated = await res.json();

      setUsers(users.map(u => (u.id === editId ? updated : u)));
      resetForm();
      return;
    }

    // CREATE
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const saved = await res.json();
    setUsers([...users, saved]);
    resetForm();
  }

  // ======================
  // DELETE
  // ======================
  async function handleDelete(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setUsers(users.filter(u => u.id !== id));
  }

  // ======================
  // EDIT
  // ======================
  function handleEdit(user) {
    setEditId(user.id);
    setForm({
      name: user.name,
      phone: user.phone,
      email: user.email,
      city: user.city
    });
  }

  function resetForm() {
    setEditId(null);
    setForm({ name: "", phone: "", email: "", city: "" });
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>User CRUD (Stable Version)</h2>

      {/* FORM */}
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="city" placeholder="City" value={form.city} onChange={handleChange} />

      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      {editId && <button onClick={resetForm}>Cancel</button>}

      {/* TABLE */}
      <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
