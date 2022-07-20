import { Box, TextField } from "@mui/material";

interface IProps {
  placeholder: string;
  label: string;
  error: string | undefined;
  type: string;
}

function InputField({ label, type, error, ...rest }: IProps) {
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
      {error && (
        <Box component="div" color="#d32f2f" sx={{ mb: 1, display: "block" }}>
          {error}
        </Box>
      )}
    </>
  );
}

export default InputField;
