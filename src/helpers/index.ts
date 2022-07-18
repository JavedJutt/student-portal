import moment from "moment";

export const specificDate = (time: string) =>
  moment(time).format("MMM D, YYYY [at] hh.mm A");
