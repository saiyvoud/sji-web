import { useQuery } from "@tanstack/react-query";
import { findCompany, GetCompany, GetOneCompany } from "../api/Company.api";

// Hook for fetching a company
export const useGetCompany = (findBy) => {
  return useQuery({
    queryKey: ["companys", findBy],
    queryFn: () => GetCompany(findBy), // Fetch company data
    enabled: !!findBy,
    onError: (error) => {
      console.error("Get Company error:", error.message);
    },
  });
};
// Hook for fetching a company
export const useGetOneCompany = (id) => {
  return useQuery({
    queryKey: ["company", id],
    queryFn: () => GetOneCompany(id), // Fetch company data
    enabled: !!id,
    onError: (error) => {
      console.error("Get One Company error:", error.message);
    },
  });
};
export const useFindCompany = (findBy) => {
  return useQuery({
    queryKey: ["companys", findBy],
    queryFn: () => findCompany(findBy), // Fetch company data
    enabled: !!findBy,
    onError: (error) => {
      console.error("Get Company error:", error.message);
    },
  });
};
