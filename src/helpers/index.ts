import moment from "moment";

export const formateDateTime = (time: string) => {
  return {
    date: moment(time).format("MMM D, YYYY"),
    time: moment(time).format("hh.mm A"),
  };
};
