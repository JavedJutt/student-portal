import { number, object, string } from "yup";

export const addStudentSchema = object({
  name: string().required("name is required"),
  marks: number()
    .typeError("Marks are required")
    .min(0, "Marks cannot be less than 0")
    .max(100, "Marks cannot be greater than 100"),
  subject: string().required("subject must be required"),
  grade: string().required("must be required"),
});
