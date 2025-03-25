import Swal from "sweetalert2";

export const Success = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    timer: 2000,
    icon: "success",
    showConfirmButton: false,
  });
};
export const Warning = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    timer: 2000,
    icon: "warning",
    showConfirmButton: false,
  });
};
export const Error = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    timer: 1500,
    icon: "error",
    showConfirmButton: false,
  });
};

