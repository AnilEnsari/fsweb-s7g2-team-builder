import React, { useState, useEffect } from "react";

function Form(props) {
  const { addMembers, duzenlenecekUye, setDuzenlenecekUye } = props;
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRol, setFormRol] = useState("");
  useEffect(() => {
    {
      setDuzenlenecekUye(duzenlenecekUye);
    }
  }, [duzenlenecekUye]);

  const nameHandler = (event) => {
    setFormName(event.target.value);
  };
  const emailHandler = (event) => {
    setFormEmail(event.target.value);
  };
  const rolHandler = (event) => {
    setFormRol(event.target.value);
  };
  const formMember = { isim: formName, email: formEmail, rol: formRol };
  const handleSubmit = (event) => {
    event.preventDefault();
    addMembers(formMember);
  };

  return (
    <form>
      <label htmlFor="isim">İsim</label>
      <hr></hr>
      <input
        id="isim"
        type="text"
        name="isim"
        // value={duzenlenecekUye.isim}
        onChange={nameHandler}
      />
      <hr></hr>
      <label htmlFor="email">Email</label>
      <hr></hr>
      <input
        id="email"
        type="email"
        name="email"
        // value={duzenlenecekUye.email}
        onChange={emailHandler}
      />
      <hr></hr>
      <label htmlFor="rol">Rol</label>
      <hr></hr>
      <input
        id="rol"
        type="text"
        name="rol"
        // value={duzenlenecekUye.rol}
        onChange={rolHandler}
      />
      <button type="submit" onClick={handleSubmit}>
        Gönder
      </button>
    </form>
  );
}
export default Form;
