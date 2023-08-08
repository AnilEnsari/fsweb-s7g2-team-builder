import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const myMembers = [
    { isim: "Anıl", email: "anil@example.com", rol: "Fullstack Developer" },
    { isim: "Ali", email: "ali@example.com", rol: "Frontend Developer" },
    { isim: "Veli", email: "veli@example.com", rol: "Backend Developer" },
  ];
  const [teamMembers, setTeamMembers] = useState(myMembers);
  return (
    <div>
      <h1>Team Members</h1>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member.isim}-{member.email}-{member.rol}
          </li>
        ))}
      </ul>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
    </div>
  );
}

export default App;
