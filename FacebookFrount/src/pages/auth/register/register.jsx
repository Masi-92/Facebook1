import  { useState } from "react";
import { register } from "../../../Api/auth.api";
import { useNavigate } from "react-router-dom";
import style from "./rigester.module.scss";

//react mui

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handelRegister = () => {
    const body = { fullName, email, password };
    register(body)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        alert(" register invalid");
      });
  };
  return (
    <div className={style.container}>
      <div>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>

        <TextField
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          required
          fullWidth
          id="fullName"
          label="Full name"
          name="fullName"
          autoComplete="fullName"
        />

        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          onClick={handelRegister}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>

      </div>
      <div
        className={style.background}
        style={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100hv",
          color: "white",
        }}
      ></div>
    </div>
  );
};

export default Register;
