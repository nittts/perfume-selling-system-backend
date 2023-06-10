import moment from "moment";

type IDate = number | Date | string;

function addMinuteToDate(date: IDate, minutes: number) {
  const formatDate = moment(date).add(minutes, "minutes");
  return formatDate;
}

function toUnix(date: IDate) {
  return moment(date).unix();
}

export { addMinuteToDate, toUnix };
