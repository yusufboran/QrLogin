import React, { useEffect, useState } from "react";
import { checkCookieId, getCookie, setCookie } from "./cookie";

const Form = (props) => {
  const [state, setState] = useState(props);
  const [id, setId] = useState(props);

  useEffect(() => {
    let user = getCookie("username");
    setState({ ...state, name: user });
    checkCookieId(id, setId);
  }, []);

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    var item = {
      id: id,
      username: state.name,
      date: new Date(),
      roomNumber: window.location.pathname,
    };

    console.log("handleSumbit", item);
    setCookie("username", state.name, 30);
  };

  return (
    <form onSubmit={handleSumbit}>
      <label>
        Name:
        <input
          value={state.name || ""}
          onChange={handleChange}
          type="name"
          name="name"
          required
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
