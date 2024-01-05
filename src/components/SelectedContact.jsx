import React, { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      async function fetchSelectedContact() {
        try {
          const response = await fetch(
            `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`
          );
          const result = await response.json();
          setContact(result);
        } catch (error) {
          console.error(error);
        }
      }

      fetchSelectedContact();
    }
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      ) : (
        <div>Loading contact details...</div>
      )}

      <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
    </div>
  );
}
