import jwt from "jsonwebtoken";

const users = [
  {
    username: "admin",
    password: "adminPassword",
  },
];

const accessTokenSecret = "thisismyownsecret";

export const loginUser = (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    const accessToken = jwt.sign(
      { username: username.username },
      accessTokenSecret
    );
    res.json({ accessToken });
  } else {
    res.send("Username or Password is invalid");
  }
};
