module.exports = {
  username: {
    label: "Username",
    name: "username",
    type: "text",
    validation: {
      required: { value: true, message: "Username is required" },
    },
  },
  password: {
    label: "Password",
    name: "password",
    type: "password",
    validation: {
      required: { value: true, message: "Password is required" },
    },
  },
};
