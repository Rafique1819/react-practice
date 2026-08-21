import { useState } from "react";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        /> <br />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        /> <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}


export default Login;