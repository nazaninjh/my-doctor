export type Doctor = {
  id: string;
  name: string;
  fullName: string;
  gender: string;
  speciality: string;
  specialityCode: string;
  experience: number;
  location: string;
  locationCode: unknown | string;
  address: string;
  rating: number;
  available: boolean;
  image: string;
  expertise: string;
  serviceType: string;
};
