import { Box } from "@mui/system";

import { formateDateTime } from "../../helpers";
import { tableText, textModified } from "./styles";

function DateCell({ time }: { time: string }) {
  const dateData = formateDateTime(time);
  return (
    <div>
      <Box sx={tableText}>{dateData.date}</Box>
      <Box sx={textModified}>at {dateData.time} </Box>
    </div>
  );
}

export default DateCell;
