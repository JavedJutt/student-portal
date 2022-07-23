import moment from "moment";

export const specificDate = (time: string) =>
  moment(time).format("MMM D, YYYY [at] hh.mm A");

export let FindDefaultEditValues = (data: any, id: string | undefined) => {
  console.log(" data in find ==> ", data, "  >", id);
  data.map((data: any) => {
    if (data._id === id) return data;

    return {};
  });
};
