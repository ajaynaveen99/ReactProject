import TodoSearch from "./TodoSearch";
import { useState } from "react";

export default function TodoList() {
    const [inputValue, setInputValue] = useState("");
    const [id, setId] = useState(0);
    const [descript, setDescript] = useState([]);

    // --- New state for edit functionality ---
    const [editingId, setEditingId] = useState(null);    // id of the item currently being edited (null when none)
    const [editingValue, setEditingValue] = useState(""); // current text in the edit input

    return (
        <>
            <input
                type="text"
                id="list"
                className="list-add"
                onChange={(event) => {
                    setInputValue(event.target.value);
                }}
            />
            <button
                className="btn"
                onClick={(e) => {
                    e.preventDefault();
                    setId((prvId) => prvId + 1);
                    setDescript([
                        ...descript,
                        {
                            id: id + 1,
                            description: inputValue,
                            isCompleted: false,
                        },
                    ]);
                    //  setInputValue("")
                }}
            >
                {" "}
                Add{" "}
            </button>
            <TodoSearch />
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th className="discr">description</th>
                        <th>checkBox</th>
                    </tr>
                </thead>
                <tbody>
                    {descript.map((obj) => (
                        <tr key={obj.id}>
                            <td>{obj.id}</td>

                            {/* If this row is being edited, show an input bound to editingValue + Save button.
                  Otherwise show the normal description text and an Edit button. */}
                            <td>
                                {editingId === obj.id ? (
                                    // Edit mode: show input (controlled) so user can change text
                                    <input
                                        type="text"
                                        value={editingValue}
                                        onChange={(e) => setEditingValue(e.target.value)}
                                    />
                                ) : (
                                    // Display mode: show description text
                                    obj.description
                                )}
                            </td>

                            <td>
                                <input
                                    type="checkbox"
                                    checked={obj.isCompleted}
                                    onChange={(e) =>
                                        setDescript(
                                            descript.map((item) =>
                                                item.id === obj.id
                                                    ? { ...item, isCompleted: e.target.checked }
                                                    : item
                                            )
                                        )
                                    }
                                />
                            </td>

                            <td className="dlete-edit-btn">
                             
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (obj.isCompleted) {
                                            setDescript(
                                                descript.filter((deleteObj) => deleteObj.id !== obj.id)
                                            );
                                            setId((prvId) => prvId - 1);
                                        } else {
                                            alert(
                                                "Please check the checkbox first before deleting"
                                            );
                                        }
                                    }}
                                >
                                    delete
                                </button>

                                {/* Edit / Save logic:
                    - If not editing this item -> show Edit button that enables editing mode.
                    - If editing this item -> show Save button that saves changes into 'descript'. 
                    (You requested only a Save option; there's no separate Cancel button here.)
                */}
                                {editingId === obj.id ? (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // Save: update the description for the item being edited
                                            setDescript(
                                                descript.map((item) =>
                                                    item.id === obj.id
                                                        ? { ...item, description: editingValue }
                                                        : item
                                                )
                                            );
                                
                                            setEditingId(null);
                                            setEditingValue("");
                                        }}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // Enter edit mode: set editingId and initialize editingValue
                                            setEditingId(obj.id);
                                            setEditingValue(obj.description);
                                        }}
                                    >
                                        Edit
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
