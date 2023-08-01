import Swal from "sweetalert2";
import withReactContent, {
  ReactSweetAlertOptions,
} from "sweetalert2-react-content";

export async function showConfirmSwal(): Promise<any> {
    const result = await Swal.fire({
        title: 'Вихід',
        text: "Виконано вихід з аккаунту користувача",
        icon: 'warning',
    });
  }