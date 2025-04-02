import api from "../constant/api";

export const Login = async (value) => {
  try {
    const response = await api.post("auth/login", value);
    return response.data;
  } catch (error) {
    throw error.response.data.messages
  }
};
export const Signup = async (value) => {
  try {
    const response = await api.post("auth/signup", value);
    return response.data;
  } catch (error) {
    // console.log(error)
    throw error.response.data.messages
  }
};

export const LoginWithGoogle = async (value) => {
  try {
    const response = await api.post("auth/google", value);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error.response.data.messages
  }
};
export const getMe = async () => {
  try {
    const response = await api.get("/me");
    return response.data;
  } catch (error) {
    throw error.response.data.messages
  }
}

export const verifyOTP = async (data) => {
  try {
    const res = await api.post("auth/verify-otp", data);
    return res.data;
  } catch (error) {
    return false;
  }
}
export const verifyEmail = async (data) => {
  try {
    const response = await api.post("auth/verify-email", data);
    return response.data;
  } catch (error) {
    return false;
  }
}
export const resentVerifyEmail = async (data) => {
  try {
    const response = await api.post("auth/resend-otp", data);
    return response.data;
  } catch (error) {
    console.log(error)
    return false;
  }
}
export const editProfile = async (data) => {
  try {
    const response = await api.put("edit", data);
    return response.data;
  } catch (error) {
    console.log(error)
    return false;
  }
}
export const changePass = async (data) => {
  try {
    const response = await api.put("changed-password", data);
    return response.data;
  } catch (error) {
    return error;
  }
}