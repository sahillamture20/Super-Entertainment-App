import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  function validateMobile(mobile) {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  }

  function validite() {
    let isError = false;
    setError(() => {
      return {
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: "",
      };
    });

    if (data.name.trim().length === 0) {
      console.warn("Name is required");
      setError((error) => {
        return { ...error, name: "Name is required" };
      });
      isError = true;
    }
    if (data.username.trim().length === 0) {
      console.warn("username is required");
      setError((error) => {
        return { ...error, username: "username is required" };
      });
      isError = true;
    }
    if (data.email.trim().length === 0) {
      console.warn("email is either empty or invalid");
      setError((error) => {
        return { ...error, email: "email is either empty or invalid" };
      });
      isError = true;
    }
    if (data.mobile.trim().length === 0 || !validateMobile(data.mobile)) {
      console.warn("mobile is either empty or invalid");
      setError((error) => {
        return { ...error, mobile: "mobile is either empty or invalid" };
      })
      isError = true;
    }
    if (!data.checkbox) {
      console.warn("checkbox is required");
      setError((error) => {
        return { ...error, checkbox: "checkbox is required" };
      });
      isError = true;
    }
    if(!isError) {
      console.log('Data is valid')
      localStorage.setItem("formData", JSON.stringify(data));
      navigate("/movies");
    }
  }

  return (
    //To stop from refressing the page => (e) => e.preventDefault()
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validite();
      }}
      style={{
        disply: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
        width: "300px",
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={data.name}
        onInput={(e) => setData({ ...data, name: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.name}</span>
      <input
        type="text"
        placeholder="Username"
        value={data.username}
        onInput={(e) => setData({ ...data, username: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.username}</span>
      <input
        type="email"
        placeholder="email"
        value={data.email}
        onInput={(e) => setData({ ...data, email: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.email}</span>
      <input
        type="tel"
        placeholder="Mobile"
        value={data.mobile}
        onInput={(e) => setData({ ...data, mobile: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.mobile}</span>
      <br />
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={data.checkbox}
          onChange={(e) => setData({ ...data, checkbox: e.target.checked })}
        />
        Share my registration data with Superapp
      </label>
      <span style={{ color: "red" }}>{error.checkbox}</span>
      <button type="submit">SIGN UP</button>
    </form>
  );
}

export default Form;
