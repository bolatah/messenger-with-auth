import axios from "axios";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    const response = await axios.post(`http://localhost:8000/signup`, {
      username,
      password,
    });
    console.log(response);
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <div className="auth-container-form">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <input
              type="text"
              id="password-check"
              name="password-check"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          {error && <p> Make sure password match</p>}
          <button
            className="standard-button"
            onClick={() => handleSubmit(isLogin ? "login" : "signup")}
          >
            Go!
          </button>
        </div>
        <div className="auth-options">
          <button
            onClick={() => setIsLogin(false)}
            style={{ backgroundColor: !isLogin ? "#151a1f" : "#070a8d" }}
          >
            Signup
          </button>
          <button
            onClick={() => setIsLogin(true)}
            style={{ backgroundColor: !isLogin ? "#151a1f" : "#070a8d" }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
