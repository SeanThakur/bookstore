import { CommonType, authorType, genreType } from "typings/dtos";

export const getNames = (data: (authorType | genreType)[]): string[] => {
  return data.map((item) => ("name" in item ? (item as CommonType).name : ""));
};
