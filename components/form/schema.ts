import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Email is not valid" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  comment: z.string().optional(),
});

export type CheckoutFormSchema = z.infer<typeof checkoutFormSchema>;