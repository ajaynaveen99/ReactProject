import { useState } from 'react';

export default function EditFromGpt() {
  // object where data is saved
  const [user, setUser] = useState({ name: '' });

  // input field value
  const [inputValue, setInputValue] = useState('');

  // edit mode flag
  const [isEdit, setIsEdit] = useState(false);

  function handleSave() {
    setUser({ name: inputValue });
    setInputValue('');
  }

  function handleEdit() {
    // put object value back into input
    setInputValue(user.name);
    setIsEdit(true);
  }

  function handleUpdate() {
    setUser({ name: inputValue });
    setInputValue('');
    setIsEdit(false);
  }

  return (
    <>
      <h3>Edit Example</h3>

      <input
        type="text"
        value={inputValue}
        placeholder="Enter name"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <br />
      <br />

      {/* Button changes based on edit mode */}
      {!isEdit ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}

      <button onClick={handleEdit} disabled={!user.name}>
        Edit
      </button>

      <hr />

      <p>
        <strong>Saved Object:</strong>
      </p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
