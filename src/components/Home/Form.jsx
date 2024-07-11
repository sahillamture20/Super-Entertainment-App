import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './form.css'

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
      // console.warn("Name is required");
      setError((error) => {
        return { ...error, name: "Name is required" };
      });
      isError = true;
    }
    if (data.username.trim().length === 0) {
      // console.warn("username is required");
      setError((error) => {
        return { ...error, username: "username is required" };
      });
      isError = true;
    }
    if (data.email.trim().length === 0) {
      // console.warn("email is either empty or invalid");
      setError((error) => {
        return { ...error, email: "email is either empty or invalid" };
      });
      isError = true;
    }
    if (data.mobile.trim().length === 0 || !validateMobile(data.mobile)) {
      // console.warn("mobile is either empty or invalid");
      setError((error) => {
        return { ...error, mobile: "mobile is either empty or invalid" };
      })
      isError = true;
    }
    if (!data.checkbox) {
      // console.warn("checkbox is required");
      setError((error) => {
        return { ...error, checkbox: "Check this box if you want to proceed" };
      });
      isError = true;
    }
    if(!isError) {
      // console.log('Data is valid')
      localStorage.setItem("formData", JSON.stringify(data));
      navigate("/movies");
    }
  }

  return (
    //To stop from refressing the page => (e) => e.preventDefault()
    <form className="flex flex-col justify-center gap-4 mx-auto w-80"
      onSubmit={(e) => {
        e.preventDefault();
        validite();
      }}
    >
      <input
        className="input-design"
        type="text"
        placeholder="Name"
        value={data.name}
        onInput={(e) => setData({ ...data, name: e.target.value })}
      />
      {error.name && <p className="p-design">{error.name}</p>}
      <input
        className="input-design"
        type="text"
        placeholder="Username"
        value={data.username}
        onInput={(e) => setData({ ...data, username: e.target.value })}
      />
      {error.username && <p className="p-design">{error.username}</p>}
      <input
        className="input-design"
        type="email"
        placeholder="email"
        value={data.email}
        onInput={(e) => setData({ ...data, email: e.target.value })}
      />
      {error.email && <p className="p-design">{error.email}</p>}
      <input
        className="input-design"
        type="tel"
        placeholder="Mobile"
        value={data.mobile}
        onInput={(e) => setData({ ...data, mobile: e.target.value })}
      />
      {error.mobile && <p className="p-design">{error.mobile}</p>}
      <label htmlFor="checkbox" className="checkbox-design">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={data.checkbox}
        onChange={(e) => setData({ ...data, checkbox: e.target.checked })}
        />&nbsp;&nbsp;Share my registration data with Superapp
      </label>
      {error.checkbox && <p className="p-design">{error.checkbox}</p>}  
      <button type="submit" className=" text-base font-medium bg-green-400 rounded-3xl py-1 mb-2">SIGN UP</button>
    </form>
  );
}

export default Form;
