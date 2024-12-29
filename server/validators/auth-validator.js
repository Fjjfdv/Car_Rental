const { z } = require("zod");
// login ko bhi validate krege
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(25, { message: "Email must not be more than 25 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password must be at least of 3 characters" })
    .max(20, { message: "Password must not be more than 20 characters" })

})

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(20, { message: "Name must not be more than 20 characters" }),


  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "phone number must be at least of 10 digits" })
    .max(12, { message: "phone number not be more than 12 characters" }),

})
module.exports = { signupSchema, loginSchema };