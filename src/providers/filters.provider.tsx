"use client";

import { useRouter } from "next/navigation";
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

export const DEFAULT_VALUES: IFilterContext = {
  gender: "both",
};

type FilterContextType = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filter: IFilterContext;
  setFilter: React.Dispatch<React.SetStateAction<IFilterContext>>;
  updateFilter: <K extends keyof IFilterContext>(
    key: K,
    value: IFilterContext[K],
  ) => void;
  resetFilter: (key: keyof IFilterContext) => void;
};

const filterContext = createContext<FilterContextType | undefined>(undefined);

export default function FiltersProvider({ children }: PropsWithChildren) {
  const router = useRouter();

  const [filter, setFilter] = useState<IFilterContext>({
    gender: DEFAULT_VALUES.gender,
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let shouldUpdate = false;

    if (filter.gender === "female" || filter.gender === "male") {
      if (params.get("gender") !== filter.gender) {
        params.set("gender", filter.gender);
        shouldUpdate = true;
      }
    } else if (params.has("gender")) {
      params.delete("gender");
      shouldUpdate = true;
    }

    if (query.length > 0) {
      if (params.get("query") !== query) {
        params.set("query", query);
        shouldUpdate = true;
      }
    } else if (params.has("query")) {
      params.delete("query");
      shouldUpdate = true;
    }

    if (shouldUpdate) {
      router.push(`?${params.toString()}`);
    }
  }, [filter.gender, query, router]);

  const updateFilter = <K extends keyof IFilterContext>(
    key: K,
    value: IFilterContext[K],
  ) => {
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  const resetFilter = (key: keyof IFilterContext) => {
    setFilter({
      ...filter,
      [key]: DEFAULT_VALUES[key as keyof typeof DEFAULT_VALUES],
    });
  };

  return (
    <filterContext.Provider
      value={{ filter, setFilter, updateFilter, resetFilter, setQuery }}
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
