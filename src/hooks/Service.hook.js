import { useQuery } from "@tanstack/react-query";
import { Services } from "../api/Service";

export const useGetServices = () => {
    return useQuery({
        queryKey: ["services"],
        queryFn: () => Services(),
        enabled: true,
        onError: (error) => {
            console.error("Get all services error:", error);
        },
    });
};