import "./auth.css";
import { useReducer, useState } from "react";
import formreducer from "../../reducers/formreducer";
import Error from "../Error/Error";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const defaultState = {
  role: "",
  username: "",
  password: "",
};

function Login() {

  const navigate = useNavigate();
  const [formstate, dispatchState] = useReducer(formreducer, defaultState);
  const [errors, dispatchErrors] = useReducer(formreducer, defaultState);
  const [role, changeRole] = useState("");
  const [username, changeUserName] = useState("");
  const [password, changePassword] = useState("");

  const onSubmitForm = (e) => {
    console.log(username);
    console.log(password);
    console.log(role);
    if(role === "doctor"){
    // navigate.push(`/profile`);
    navigate('/profile');
  }
  else if(role === "patient"){
    navigate('/patientprofile');
  }
  else{
    navigate('/adminprofile');
  }


  }


  return (
    <div className="App">
      <section>
        <div class="container">
          <div class="user signinBx">
            <div class="imgBx">
              <img
                src="https://www.statnews.com/wp-content/uploads/2020/01/AdobeStock_215322148-645x645.jpg"
                alt=""
              />
            </div>
            <div class="formBx">
              <form action="" onsubmit="return false;" autocomplete="on">
                <h2>Sign In</h2>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange = {(e)=>changeUserName(e.target.value)}
                  value = {username}
                  // onBlur={(e) => {
                  //   dispatchErrors({
                  //     type: "CHECK_AUTH",
                  //     data: [formstate, e.target.name],
                  //   });
                  // }}
                />
                <Error error={errors.username} />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e)=>changePassword(e.target.value)}
                  value = {password}
                  // onBlur={(e) => {
                  //   dispatchErrors({
                  //     type: "CHECK_AUTH",
                  //     data: [formstate, e.target.name],
                  //   });
                  // }}
                />
                <Error error={errors.password} />

                <select
                  id="role"
                  name="role"
                  placeholder="Select your Role"
                  onChange={(e)=>changeRole(e.target.value)}
                  value = {role}
                  // onBlur={(e) => {
                  //   dispatchErrors({
                  //     type: "CHECK_AUTH",
                  //     data: [formstate, e.target.name],
                  //   });
                  // }}
                >
                  <option value="" disabled selected>
                    Select your Role
                  </option>
                  <option value="doctor" >Doctor</option>
                  <option value="patient">Patient</option>
                  <option value="admin" >Admin</option>
                </select>
                <Error error={errors.role} />
                <button type="button" className="btn btn-primary" onClick={onSubmitForm}>
                  Log In
                </button>
                <p class="signup">
                  <a href="/forgot">Forgot Password?</a>
                </p>
                <p class="signup">
                  Don't have an account ?<a href="/signup">Sign Up.</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
