import dayjs from "dayjs";

export const utcToLocalYYYYMMDD = (utc: string | Date) => {
  return dayjs(utc).format("YYYY년 MM월 DD일");
};
