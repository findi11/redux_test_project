import { $apiClient } from '../../../utils/apiClient'; 
import { ActionTriggerProps } from './types';
import ApiConfig from '../../../config/api-config';

export default function loginService(payload: ActionTriggerProps) {
  const url = `${ApiConfig.LOGIN}`;
  return $apiClient.post(url, payload);
}
