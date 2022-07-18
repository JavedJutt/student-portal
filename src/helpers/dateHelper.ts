import moment from "moment";

const specificDate = (time: string) =>
  moment(time).format("MMM D, YYYY [at] hh.mm A");

export default specificDate;
