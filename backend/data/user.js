import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: true,
  },
  {
    name: "Jhon Doe",
    email: "jhon@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: false,
  },
  {
    name: "ssr",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: false,
  },
];

export default users;
