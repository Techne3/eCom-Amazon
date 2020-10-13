import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";

function RegisterScreen(props) {
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo]);

  return (
    <>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Create Account</h2>
            </li>
            <li>
              {loading && <div>loading...</div>}
              {error && <div>{error}</div>}
            </li>
            <li>
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="rePassword">Re-Enter Password</label>
              <input
                type="rePassword"
                name="rePassword"
                id="rePassword"
                onChange={(e) => setRePassword(e.target.value)}
              />
            </li>
            <li>
              <button type="submit" className="button primary">
                Register
              </button>
            </li>
            <li>Already have an account?</li>
            <li>
              <Link
                to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}
                className="button secondary text-center"
              >
                Create your Amazon account
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
export default RegisterScreen;
