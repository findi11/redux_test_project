import { $apiClient } from '../../../utils/apiClient'; 
import ApiConfig from '../../../config/api-config';

export default function logoutServeces() {
  const url = `${ApiConfig.LOGOUT}`;
  return $apiClient.post(url);
}

export function deleteAuthAccessToken() {
  localStorage.removeItem('access_token');
  delete $apiClient.defaults.headers.Authorization;
}
