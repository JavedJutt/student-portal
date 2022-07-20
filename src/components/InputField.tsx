import { Box, TextField } from "@mui/material";

interface IProps {
  placeholder: string;
  label: string;
  error: string | undefined;
  type: string;
}

function InputField({ label, type, error, ...rest }: IProps) {
  // console.log("rest ==>", rest);

  return (
    <>
      <label> {label} </label>
      <TextField
        sx={{ my: 1 }}
        variant="outlined"
        type={type}
        fullWidth
        {...rest}
      />
      {error && <p> {error}</p>}
    </>
  );
}

export default InputField;
