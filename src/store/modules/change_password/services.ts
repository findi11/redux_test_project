import ApiConfig from "../../../config/api-config";
import { $apiClient } from "../../../utils/apiClient";
import { changePassPayload } from "./types";

export function changePass(payload: changePassPayload) {
  const url = `${ApiConfig.changePassword}`;
  return $apiClient.post(url, payload);
}
