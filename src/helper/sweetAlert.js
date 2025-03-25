import Swal from "sweetalert2";

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
  Swal.fire({
    title: title,
    text: text,
    timer: 3000,
    icon: "error",
    showConfirmButton: false,
  });
};

