import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.img}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(createCard)}

      {/*<Card
        name={contacts[0].name}
        img={contacts[0].img}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />

      <Card
        name={contacts[3].name}
        img={contacts[3].img}
        phone={contacts[3].phone}
        email={contacts[3].email}
      />

      <Card
        name={contacts[4].name}
        img={contacts[4].img}
        phone={contacts[4].phone}
        email={contacts[4].email}
      />

      <Card
        name={contacts[5].name}
        img={contacts[5].img}
        phone={contacts[5].phone}
        email={contacts[5].email}
      />*/}
    </div>
  );
}

export default App;
