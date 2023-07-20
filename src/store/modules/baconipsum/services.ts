import ApiConfig from "../../../config/api-config";
import { $apiClient } from "../../../utils/apiClient";
import { BaconipsumStatePayload } from "./types";

export function getData(payload: BaconipsumStatePayload) {
  const url = `${ApiConfig.DATA}&paras=${payload.paras}&sentences=${payload.sentences}`;
  console.log(url);
  return $apiClient.get(url);
}
