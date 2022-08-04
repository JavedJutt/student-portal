import { Box, InputAdornment, TextField } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

interface IProps {
  placeholder: string;
  label: string;
  errorMessage: string | undefined;
  type: string;
}

function InputField({ label, type, errorMessage, ...rest }: IProps) {
  return (
    <>
      <label> {label} </label>
      <TextField
        sx={{ my: 1 }}
        variant="outlined"
        id="outlined-error"
        error={errorMessage ? true : false}
        type={type}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {errorMessage && <ErrorIcon sx={{ color: "#EB5757" }} />}
            </InputAdornment>
          ),
        }}
        fullWidth
        {...rest}
      />
      {errorMessage && (
        <Box component="div" color="#d32f2f" sx={{ mb: 1, display: "block" }}>
          {errorMessage}
        </Box>
      )}
    </>
  );
}

export default InputField;
