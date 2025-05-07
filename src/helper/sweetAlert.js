import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Bounce } from 'react-toastify';
export const Success = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    timer: 3000,
    icon: "success",
    showConfirmButton: false,
  });
};
export const Warning = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    timer: 3000,
    icon: "warning",
    showConfirmButton: false,
  });
};
export const Error = (title, text) => {
  // Swal.fire({
  //   title: title,
  //   text: text,
  //   timer: 3000,
  //   icon: "error",
  //   showConfirmButton: false,
  // });
  toast.error(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

