import { useQuery } from "@tanstack/react-query";
import { Getcountry, GetOnecountry } from "../api/Country.api";

// Hook for fetching a country
export const useGetcountry = (findBy) => {
  return useQuery({
    queryKey: ["country", findBy],
    queryFn: () => Getcountry(findBy), // Fetch country data
    enabled: !!findBy,
    onError: (error) => {
      console.error("Getcountry error:", error.message);
    },
  });
};
// Hook for fetching a country
export const useGetOnecountry = (id) => {
  return useQuery({
    queryKey: ["country", id],
    queryFn: () => GetOnecountry(id), // Fetch country data
    enabled: !!id,
    onError: (error) => {
      console.error("GetOnecountry error:", error.message);
    },
  });
};
