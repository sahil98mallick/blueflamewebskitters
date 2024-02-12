import Swal from "sweetalert2";

export const Workingprogess = () => {
    return Swal.fire({
        title: "Working Progress",
        text: "Please wait unit done..",
        icon: "info"
    });
}