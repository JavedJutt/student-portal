import { Button, Container, Grid } from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import Dropdown from "./Dropdown";
import InputField from "./InputField";
import { subjects, grades } from "../helpers/data";

function AddStudent() {
  const { register, handleSubmit, control } = useForm({
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
    console.log(data);
    data.time = time;
    console.log(data);
  };

  const gradeField = register("grade");
  console.log(gradeField);

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Add Student Data </h1>

        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <InputField label="Name" placeholder="Enter name" {...field} />
          )}
        />

        <Controller
          name="marks"
          control={control}
          render={({ field }) => (
            <InputField label="Marks" placeholder="Enter marks" {...field} />
          )}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <Dropdown label="Subject" dropdownData={subjects} {...field} />
          )}
        />

        <Controller
          control={control}
          name="grade"
          render={({ field }) => (
            <Dropdown label="Grads" dropdownData={grades} {...field} />
          )}
        />

        <Grid
          display="flex"
          justifyContent="space-between"
          sx={{ my: 3 }}
          alignItems="center"
        >
          <Button variant="outlined"> cancel</Button>
          <Button variant="outlined" type="submit">
            save
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

export default AddStudent;
