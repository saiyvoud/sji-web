import { useQuery } from "@tanstack/react-query";
import { createOrderPackage, getPackage, Packages } from "../api/Package";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useGetPAckages = (findBy) => {
    return useQuery({
        queryKey: ["package", findBy],
        queryFn: () => Packages(findBy),
        enabled: !!findBy,
        onError: (error) => {
            console.error("Get all package error:", error);
        },
    });
};
export const useGetPackage = (id) => {
    return useQuery({
        queryKey: ["package", id],
        queryFn: () => getPackage(id),
        enabled: !!id,
        onError: (error) => {
            console.error("Get one package error:", error);
        },
    });
};
export const useCreateOrderPackage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createOrderPackage,
        onSuccess: (data) => {
            console.log(data)
            //queryClient.invalidateQueries({ queryKey: ["order"] });
            // navigate("" + data);
            //navigate(redirectUrl ? redirectUrl : "/package/success/"); // Redirect to the home page
            // clearRedirectUrl();
        },
        onError: (error) => {
            Error("create order error", error)
            //console.error("Login error:", error.message); // Log the error
        },
    });
};

