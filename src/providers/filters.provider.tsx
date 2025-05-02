"use client";
import { buildSearchString } from "@/functions/buildSearchString";
import { useRouter, useSearchParams } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type IGenderType = "both" | "male" | "female";

export type IFilterContext = {
  gender: IGenderType;
};

const DEFAULT_VALUES: IFilterContext = {
  gender: "both",
};

type FilterContextType = {
  filter: IFilterContext;
  setFilter: React.Dispatch<React.SetStateAction<IFilterContext>>;
  updateFilter: (key: keyof IFilterContext, value: IGenderType) => void;
  resetFilter: (key: keyof IFilterContext) => void;
};

const filterContext = createContext<FilterContextType | undefined>(undefined);

export default function FiltersProvider({ children }: PropsWithChildren) {
  const searhParam = useSearchParams();
  const router = useRouter();

  const [filter, setFilter] = useState<IFilterContext>({
    gender: DEFAULT_VALUES.gender,
  });

  useEffect(() => {
    if (filter.gender === "female") {
      router.push(buildSearchString(searhParam, "gender", "female"));
    } else if (filter.gender === "male") {
      router.push(buildSearchString(searhParam, "gender", "male"));
    }
  }, [filter.gender, router, searhParam]);

  const updateFilter = (key: keyof IFilterContext, value: IGenderType) => {
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  const resetFilter = (key: keyof IFilterContext) => {
    setFilter({
      ...filter,
      [key]: DEFAULT_VALUES.gender,
    });
  };
  return (
    <filterContext.Provider
      value={{ filter, setFilter, updateFilter, resetFilter }}
    >
      {children}
    </filterContext.Provider>
  );
}

export const useFilter = () => {
  const context = useContext(filterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FiltersProvider");
  }
  return context;
};
