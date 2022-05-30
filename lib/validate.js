import validator from "fastest-validator";

const valid = new validator();
const schemaLogin = {
  username: { type: "string", min: 5 },
  password: { type: "string", min: 5 },
};
const validateLogin = valid.compile(schemaLogin);

export default { validateLogin };
