import React, { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId }) {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      // Fetch the details of the selected contact based on selectedContactId
      async function fetchSelectedContact() {
        try {
          const response = await fetch(
            `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`
          );
          const result = await response.json();
          setSelectedContact(result);
        } catch (error) {
          console.error(error);
        }
      }

      fetchSelectedContact();
    }
  }, [selectedContactId]);

  return (
    <div>
      {selectedContact ? (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
        </div>
      ) : (
        <div>No contact selected</div>
      )}
    </div>
  );
}
