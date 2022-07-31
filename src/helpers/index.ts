import moment from "moment";

export const formateDateTime = (time: string) => {
  return {
    date: moment(time).format("MMM D, YYYY"),
    time: moment(time).format("hh.mm A"),
  };
};
const specificDate = (time: string) =>
  moment(time).format("MMM D, YYYY [at] hh.mm A");

export const datePart1 = (time: string) => {
  let arr = specificDate(time);
  let result = arr.split("at");
  return result[0];
};

export const datePart2 = (time: string) => {
  let arr = specificDate(time);
  let result = arr.split("at");
  return result[1];
};
