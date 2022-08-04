import { Box, Typography } from "@mui/material";
interface IProps {
  title: string;
  summaryResult: string;
  bgcolor?: string | any;
}

function SummaryBox({ title, bgcolor, summaryResult }: IProps) {
  return (
    <>
      <Box
        component="div"
        sx={{
          py: "8px",
          borderRadius: "6px",
          color: "white",
          bgcolor,
          textAlign: "center",
        }}
      >
        <Typography variant="subtitle1" gutterBottom component="div">
          {title}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ mt: "10px" }}
        >
          {summaryResult}
        </Typography>
      </Box>
    </>
  );
}

export default SummaryBox;
