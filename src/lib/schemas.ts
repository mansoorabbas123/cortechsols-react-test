import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "email field is a required field" })
    .email(),
  password: z.string().min(4, { message: "at least 4 charater are required " }),
});
export const RegisterFormSchema = z.object({
  firstName: z.string().min(1, { message: "first name is a required  field" }),
  lastName: z.string().min(1, { message: "last name is a required  field" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "email field is a required field" })
    .email(),
  password: z.string().min(4, { message: "at least 4 charater are required " }),
});
