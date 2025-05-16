export type LOCATION_CODES = [
  "TH" | "ES" | "AH" | "TB" | "SH" | "RS" | "UR" | "MS" | "YZ" | "KR",
];

export type IFilter = {
  pageNum?: number;
  gender?: "both" | "male" | "female";
  location?: "ALL" | LOCATION_CODES;
  query?: string;
  serviceType?: "online" | "on-site";
};
