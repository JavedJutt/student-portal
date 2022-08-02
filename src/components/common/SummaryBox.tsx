import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
interface IProps {
  title: string;
  summaryResult: string;
  bgcolor: string | any;
  fontFamily: string | undefined;
}
var theme;
function SummaryBox({ title, bgcolor, summaryResult, fontFamily }: IProps) {
  const _theme = useTheme();
  theme = _theme;
  return (
    <>
      <Box
        component="div"
        sx={{
          py: "8px",
          borderRadius: "6px",
          color: "white",
          bgcolor,
          fontFamily,
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

SummaryBox.defaultProps = {
  fontFamily: theme.typography.fontFamily,
};

export default SummaryBox;
