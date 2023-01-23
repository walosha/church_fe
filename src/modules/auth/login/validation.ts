import isEmailValidator from "validator/lib/isEmail";
import * as yup from "yup";

export const schema = yup
  .object({
    firstname: yup.string().required().min(3),
    lastname: yup.string().required().min(3),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Mail is required")
      .test(
        "is-valid",
        (message) => `${message.path} is invalid`,
        (value) =>
          value
            ? isEmailValidator(value)
            : new yup.ValidationError("Invalid value")
      ),

    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain numbers with letter  ."),
  })
  .required();
