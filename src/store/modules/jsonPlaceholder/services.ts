import ApiConfig from "../../../config/api-config";
import { $apiClient } from "../../../utils/apiClient";
import { JsonPlaceholderStatePayload } from "./types";

export function getDataJsonPlaceholder(payload: JsonPlaceholderStatePayload) {
  const url = `${ApiConfig.JSON}start=${payload.start}`;
  console.log(url);
  return $apiClient.get(url);
}
