import React from "react";
import "./ContactList.css"; // Подключаем файл со стилями

const ContactList = ({ filtered, handleDelete }) => {
  return (
    <ul className="contact-list">
      {filtered.map((c) => (
        <li key={c.id} className="contact-item">
          <span className="contact-name">{c.name}</span> :{" "}
          <span className="contact-number"> {c.number}</span>
          <button className="delete-btn" onClick={() => handleDelete(c.id)}>
            del
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
