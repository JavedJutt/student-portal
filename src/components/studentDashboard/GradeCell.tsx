import { Box } from "@mui/system";
import { BgColors, colors } from "../../helpers/data";

function GradeCell({ grade }: { grade: string }) {
  return (
    <Box
      sx={{
        width: "110px",
        py: "8px",
        bgcolor: BgColors[grade],
        textAlign: "center",
        borderRadius: "5px",
        color: colors[grade],
      }}
    >
      {grade}
    </Box>
  );
}

export default GradeCell;
