"use client";
import { Doctor } from "@/types/doctor";
import { usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFilter } from "./filters.provider";

export type IFilterContext = Doctor[];

type FilterContextType = {
  doctorsList: Doctor[] | undefined;
};

const doctorsContext = createContext<FilterContextType | undefined>(undefined);

export default function DoctorsProvider({
  children,
  doctors,
}: {
  children: ReactNode;
  doctors: Doctor[];
}) {
  const path = usePathname();

  const { filter } = useFilter();

  const pageNum = path === "/search" ? 1 : Number(path.split("/")[2]);

  const startingPoint = (pageNum - 1) * 10;

  const [doctorsList, setDoctorsList] = useState<Doctor[]>();
  const [baseDoctorsList, setBaseDoctorsList] = useState<Doctor[]>();

  useEffect(() => {
    const BASE = doctors.slice(startingPoint, startingPoint + 10);
    setBaseDoctorsList(BASE);
  }, [doctors, startingPoint]);

  const filterDoctors = useCallback(
    <K extends keyof Doctor>(key: K, value: Doctor[K] | "both") => {
      if (!baseDoctorsList) return;
      const filtered =
        value === "both"
          ? baseDoctorsList
          : baseDoctorsList.filter((doctor) => doctor[key] === value);
      return filtered;
    },
    [baseDoctorsList],
  );

  useEffect(() => {
    const filtered = filterDoctors("sex", filter.sex);
    setDoctorsList(filtered);
  }, [filter.sex, filterDoctors]);
  return (
    <doctorsContext.Provider value={{ doctorsList }}>
      {children}
    </doctorsContext.Provider>
  );
}

export const useDoctors = () => {
  const context = useContext(doctorsContext);
  if (!context) {
    throw new Error("useDoctors must be used within a DoctorsProvider");
  }
  return context;
};
