import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const myMembers = [
    { isim: "Mauro Icardi", email: "mauro@galatasaray.com", rol: "Striker" },
    {
      isim: "Wilfred Zaha",
      email: "zaha@galatasaray.com",
      rol: "Inside Forward",
    },
    {
      isim: "Fernando Muslera",
      email: "nando@galatasaray.com",
      rol: "GoalKeeper",
    },
  ];
  const [teamMembers, setTeamMembers] = useState(myMembers);
  const [duzenlenecekUye, setDuzenlenecekUye] = useState({
    isim: "",
    email: "",
    rol: "",
  });
  const addMembers = (member) => {
    setTeamMembers([...teamMembers, member]);
  };
  return (
    <div className="App">
      <h1>Team Members</h1>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member.isim}-{member.email}-{member.rol}
            <button onClick={() => setDuzenlenecekUye(member)}>Düzenle</button>
            {console.log(duzenlenecekUye)}
          </li>
        ))}
      </ul>
      <Form
        addMembers={addMembers}
        duzenlenecekUye={duzenlenecekUye}
        setDuzenlenecekUye={setDuzenlenecekUye}
      />
    </div>
  );
}

export default App;
