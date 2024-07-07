import { useState } from "react";
function Notes() {
    const [notes, setNotes] = useState(localStorage.getItem("notes"));
  return (
    <div>
      <h1>Notes</h1>
      <textarea
        value={notes}
        rows={10}
        cols={50}
        style={{
          maxHeight: "200px",
          maxWidth: "400px",
        }}
        onChange={(e) => {
          setNotes(e.target.value);
          localStorage.setItem("notes", e.target.value);
        }}
      ></textarea>
    </div>
  )
}

export default Notes