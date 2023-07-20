import { $apiClient } from '../../../utils/apiClient'; 
import { ActionTriggerProps } from './types';
import ApiConfig from '../../../config/api-config';

export default function signUpService(payload: ActionTriggerProps) {
  const url = `${ApiConfig.SINGUP}`;
  return $apiClient.post(url, payload);
}
