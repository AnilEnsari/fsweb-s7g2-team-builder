import React, { useState, useEffect } from "react";

function Form(props) {
  const { addMembers, duzenlenecekUye, setDuzenlenecekUye } = props;
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRol, setFormRol] = useState("");

  useEffect(() => {
    {
      setDuzenlenecekUye(duzenlenecekUye);
      if (duzenlenecekUye.isim) {
        setFormName(duzenlenecekUye.isim);
      }
      if (duzenlenecekUye.email) {
        setFormEmail(duzenlenecekUye.email);
      }
      if (duzenlenecekUye.rol) {
        setFormRol(duzenlenecekUye.rol);
      }
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="isim">İsim</label>
      <hr></hr>
      <input
        id="isim"
        type="text"
        name="isim"
        // value={duzenlenecekUye.isim}
        value={formName}
        // placeholder={duzenlenecekUye.isim}
        onChange={nameHandler}
      />
      <hr></hr>
      <label htmlFor="email">Email</label>
      <hr></hr>
      <input
        id="email"
        type="email"
        name="email"
        // placeholder={duzenlenecekUye.email}
        value={formEmail}
        onChange={emailHandler}
      />
      <hr></hr>
      <label htmlFor="rol">Rol</label>
      <hr></hr>
      <input
        id="rol"
        type="text"
        name="rol"
        value={formRol}
        onChange={rolHandler}
        // placeholder={duzenlenecekUye.rol}
      />
      <button type="submit">Gönder</button>
    </form>
  );
}
export default Form;
