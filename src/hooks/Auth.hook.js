import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getMe, Login, LoginWithGoogle, Signup, verifyEmail } from "../api/Auth";
import { useAuthStore, useRegisterTempStore } from "../store/authStore";
import { useRedirectUrl } from "../store/redirectPath";
import { Error, Success } from "../helper/sweetAlert";
import { useQuery } from "@tanstack/react-query";


export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setAuthDetail } = useAuthStore();
  const { clearRedirectUrl, redirectUrl } = useRedirectUrl();

  return useMutation({
    mutationFn: Login, // The function that performs the login API call
    onSuccess: (data) => {
      setAuthDetail(data); // Save the authentication details to Zustand store
      queryClient.invalidateQueries({ queryKey: ["login"] }); // Invalidate any related queries

      navigate(redirectUrl ? redirectUrl : "/"); // Redirect to the home page
      clearRedirectUrl();
    },
    onError: (error) => {
      Error("Login error", error)
      //console.error("Login error:", error.message); // Log the error
    },
  });
};
export const useSignup = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setAuthDetail } = useAuthStore();
  const { clearRedirectUrl, redirectUrl } = useRedirectUrl();
  const { setRegisterTemp, clearRegisterTemp } = useRegisterTempStore();


  return useMutation({
    mutationFn: Signup,
    onSuccess: async (data, variables) => {
      console.log(variables);
      const login = await Login({
        username: variables.username,
        password: variables.password
      });
      if (login) {
        setAuthDetail(data);
        queryClient.invalidateQueries({ queryKey: ["login"] });
        Success("Sign Up Success", "Welcome!");
        navigate(redirectUrl ? redirectUrl : "/");
        clearRedirectUrl();
        clearRegisterTemp();
      } else {
        navigate("/login");
        Error("Sign Up Error", "Please Login");
      }
    },
    onError: (error, variables) => {
      if (error === 'email not verify') {
        // console.log(variables.email);
        verifyEmail({ email: variables.email });
        setRegisterTemp(variables);
        navigate("/verifyotp");
      } else {
        Error("Signup error", error)
      }
    },
  });
};
export const useLoginWithGoogle = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setAuthDetail } = useAuthStore();
  const { clearRedirectUrl, redirectUrl } = useRedirectUrl();

  return useMutation({
    mutationFn: LoginWithGoogle,
    onSuccess: (data) => {
      setAuthDetail(data);
      queryClient.invalidateQueries({ queryKey: ["login"] });
      navigate(redirectUrl ? redirectUrl : "/");
      clearRedirectUrl();
    },
    onError: (error) => {
      Error("Email is exists", "Please Login with your email and password");
    },
  });
};

export const useGetMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(), // Fetch company data
    // enabled: !!id,
    onError: (error) => {
      console.error("Get me error:", error.message);
    },

  });
};
