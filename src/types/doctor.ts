export type Doctor = {
  id: string;
  name: string;
  fullName: string;
  sex: string;
  speciality: string;
  specialityCode: string;
  experience: number;
  location: string;
  locationCode: unknown | string;
  address: string;
  rating: number;
  available: boolean;
  image: string;
};
