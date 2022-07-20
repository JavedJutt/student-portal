import { Button, Container, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Dropdown from "./Dropdown";
import InputField from "./InputField";
import { subjects, grades } from "../helpers/data";
import { number, object, string } from "yup";
import { useNavigate } from "react-router-dom";

const addStudentSchema = object({
  name: string().required("name is required"),
  marks: number()
    .typeError("Marks are required")
    .min(0, "Marks cannot be less than 0")
    .max(100, "Marks cannot be greater than 100"),
  subject: string().required("subject must be required").oneOf(subjects),
  grade: string().required("must be required").oneOf(grades),
});

function AddStudent() {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(addStudentSchema),

    defaultValues: {
      name: "",
      marks: 0,
      subject: "Math",
      grade: "F",
      time: "",
    },
  });

  const onSubmit = (data: any) => {
    let date = new Date();
    let time = date.toISOString();
    data.time = time;
  };
  const handleCancleClick = () => {
    console.log("cancel clicked");
    navigate("/");
  };
  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Add Student Data </h1>

        <Controller
          name="name"
          control={control}
          render={({ field, formState }) => (
            <InputField
              label="Name"
              type="text"
              error={formState.errors.name?.message}
              placeholder="Enter name"
              {...field}
            />
          )}
        />

        <Controller
          name="marks"
          control={control}
          render={({ field, formState }) => (
            <InputField
              label="Marks"
              type="number"
              error={formState.errors.marks?.message}
              placeholder="Enter marks"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field, formState }) => (
            <Dropdown
              label="Subject"
              error={formState.errors.subject?.message}
              dropdownData={subjects}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="grade"
          render={({ field, formState }) => (
            <Dropdown
              label="Grads"
              error={formState.errors.grade?.message}
              dropdownData={grades}
              {...field}
            />
          )}
        />

        <Grid
          display="flex"
          justifyContent="space-between"
          sx={{ my: 3 }}
          alignItems="center"
        >
          <Button
            variant="outlined"
            onClick={() => {
              handleCancleClick();
            }}
          >
            {" "}
            cancel
          </Button>
          <Button variant="outlined" type="submit">
            save
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

export default AddStudent;
