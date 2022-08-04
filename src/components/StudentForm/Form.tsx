import { Button, Container, Grid, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import SelectField from "../common/fields/SelectField";
import InputField from "../common/fields/InputField";
import { useTheme } from "@mui/material/styles";
import { formDefaultValues, grades, subjects } from "../../helpers/data";
import { IAddStudentRaw, IStudentRaw } from "../../state/ducks/student/types";
import { useCallback, useEffect, useMemo } from "react";
import { navigate } from "../../helpers/history";
import { addStudentSchema } from "../../helpers/schemas";
import { cancelBtnStyle, saveBtnStyle } from "./styles";

interface IProps {
  addStudent: (data: IAddStudentRaw) => void;
  list: any;
  fetchSpecificStudent: (id: string | undefined) => void;
  specificStudent: IStudentRaw | any;
  editStudent: (data: IAddStudentRaw) => void;
}

function Form({
  addStudent,
  list,
  fetchSpecificStudent,
  specificStudent,
  editStudent,
}: IProps) {
  let { studentId } = useParams();
  const theme = useTheme();
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
        <Typography
          variant="h5"
          component="div"
          sx={{ textAlign: "center", my: 4 }}
        >
          {studentId ? "Edit Student Data" : "Add Student data"}
        </Typography>

        <Controller
          name="name"
          control={control}
          render={({ field: { ref, ...restField }, formState }) => (
            <InputField
              label="Name"
              type="text"
              errorMessage={formState.errors.name?.message}
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
              errorMessage={formState.errors.marks?.message}
              placeholder="Enter marks"
              {...restField}
            />
          )}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field: { ref, ...restField }, formState }) => (
            <SelectField
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
            <SelectField
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
            sx={cancelBtnStyle}
            onClick={() => {
              handleCancleClick();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            type="submit"
            sx={{ bgcolor: theme.palette.primary.main, ...saveBtnStyle }}
          >
            {studentId ? " Edit " : " Add "}
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

export default Form;
