import Swal from "sweetalert2";
import withReactContent, {
  ReactSweetAlertOptions,
} from "sweetalert2-react-content";

// Опції, які можна передати у метод
interface SuccesSwalOptions {
  didOpen?: () => void;
}

// Тип для MySwal
type MySwalType = typeof Swal & {
  fire(options: SuccesSwalOptions): Promise<any>;
};

const SuccesSwal: MySwalType = withReactContent(Swal) as MySwalType;

export function showSuccesSwal(options: SuccesSwalOptions): Promise<any> {
  return SuccesSwal.fire({
    title: "Ви успішно авторизовані",
    didOpen: options.didOpen,
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
  });
}
