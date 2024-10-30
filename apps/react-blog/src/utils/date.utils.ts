import dayjs from "dayjs";

export const utcToLocalYYYYMMDDHHmm = (utc: string | Date) => {
  return dayjs(utc).format("YYYY년 MM월 DD일 HH시 mm분");
};
