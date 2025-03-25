import { useQuery } from "@tanstack/react-query";
import { GetArticle, GetOneArticle } from "../api/News.api";

// Hook for fetching a Article
export const useGetArticle = (findBy) => {
  return useQuery({
    queryKey: ["article", findBy],
    queryFn: () => GetArticle(findBy), // Fetch Article data
    enabled: !!findBy,
    onError: (error) => {
      console.error("GetArticle error:", error.message);
    },
  });
};
// Hook for fetching a Article
export const useGetOneArticle = (id) => {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => GetOneArticle(id), // Fetch Article data
    enabled: !!id,
    onError: (error) => {
      console.error("GetOneArticle error:", error.message);
    },
  });
};
