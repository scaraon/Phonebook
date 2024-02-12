import React from "react";

const ContactList = ({ filtered, handleDelete }) => {
  return (
    <ul>
      {filtered.map((c) => (
        <li key={c.id}>
          {c.name} : {c.number}
          <button onClick={() => handleDelete(c.id)}>del</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
