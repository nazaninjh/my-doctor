"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type ISexType = "both" | "male" | "female";

export type IFilterContext = {
  sex: ISexType;
};

const DEFAULT_VALUES: IFilterContext = {
  sex: "both",
};

type FilterContextType = {
  filter: IFilterContext;
  setFilter: React.Dispatch<React.SetStateAction<IFilterContext>>;
  updateFilter: (key: keyof IFilterContext, value: ISexType) => void;
  deleteFilter: (key: keyof IFilterContext) => void;
};

const filterContext = createContext<FilterContextType | undefined>(undefined);

export default function FiltersProvider({ children }: PropsWithChildren) {
  //   todo: add filter of city or years active
  const [filter, setFilter] = useState<IFilterContext>({
    sex: DEFAULT_VALUES.sex,
  });

  const updateFilter = (key: keyof IFilterContext, value: ISexType) => {
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  const deleteFilter = (key: keyof IFilterContext) => {
    setFilter({
      ...filter,
      [key]: DEFAULT_VALUES.sex,
    });
  };
  return (
    <filterContext.Provider
      value={{ filter, setFilter, updateFilter, deleteFilter }}
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
