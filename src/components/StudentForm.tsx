import { Button, Container, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import SelectFeild from "./common/feilds/SelectFeild";
import InputField from "./common/feilds/InputField";

import { formDefaultValues, grades, subjects } from "../helpers/data";
import { IAddStudentRaw, IStudentRaw } from "../state/ducks/student/types";
import { useCallback, useEffect, useMemo } from "react";
import { navigate } from "../helpers/history";
import { addStudentSchema } from "../helpers/schemas";

interface IProps {
  addStudent: (data: IAddStudentRaw) => void;
  list: any;
  fetchSpecificStudent: (id: string | undefined) => void;
  specificStudent: IStudentRaw | any;
  editStudent: (data: IAddStudentRaw) => void;
}

function StudentForm({
  addStudent,
  list,
  fetchSpecificStudent,
  specificStudent,
  editStudent,
}: IProps) {
  let { studentId } = useParams();

  const isEditMode = useMemo(
    () => !!studentId && !!specificStudent.payload,
    [specificStudent, studentId]
  );

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(addStudentSchema),
    defaultValues: formDefaultValues,
  });

  useEffect(() => {
    if (studentId) fetchSpecificStudent(studentId);
  }, [studentId, fetchSpecificStudent]);

  useEffect(() => {
    if (isEditMode && specificStudent.payload) reset(specificStudent.payload);

    return () => reset(formDefaultValues);
  }, [specificStudent, reset]);

  const onSubmit = useCallback(
    (data: IAddStudentRaw) => {
      data.time = new Date().toISOString();
      if (isEditMode) editStudent({ ...data, _id: studentId });
      else addStudent(data);
    },
    [studentId, isEditMode, editStudent, addStudent]
  );

  const handleCancleClick = () => {
    navigate("/");
  };
  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{studentId ? "Edit Student Data" : "Add Student data"}</h1>

        <Controller
          name="name"
          control={control}
          render={({ field: { ref, ...restField }, formState }) => (
            <InputField
              label="Name"
              type="text"
              error={formState.errors.name?.message}
              placeholder="Enter name"
              {...restField}
            />
          )}
        />

        <Controller
          name="marks"
          control={control}
          render={({ field: { ref, ...restField }, formState }) => (
            <InputField
              label="Marks"
              type="number"
              error={formState.errors.marks?.message}
              placeholder="Enter marks"
              {...restField}
            />
          )}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field: { ref, ...restField }, formState }) => (
            <SelectFeild
              label="Subject"
              error={formState.errors.subject?.message}
              dropdownData={subjects}
              {...restField}
            />
          )}
        />

        <Controller
          control={control}
          name="grade"
          render={({ field: { ref, ...restField }, formState }) => (
            <SelectFeild
              label="Grads"
              error={formState.errors.grade?.message}
              dropdownData={grades}
              {...restField}
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

export default StudentForm;
