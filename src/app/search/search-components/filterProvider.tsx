"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";

export type IFilterContext = {
  sex: "both" | "male" | "female";
};

type FilterContextType = {
  filter: IFilterContext;
  setFilter: React.Dispatch<React.SetStateAction<IFilterContext>>;
};

const filterContext = createContext<FilterContextType | undefined>(undefined);
export default function FiltersProvider({ children }: PropsWithChildren) {
  const [filter, setFilter] = useState<IFilterContext>({
    sex: "both",
  });
  return (
    <filterContext.Provider value={{ filter, setFilter }}>
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
