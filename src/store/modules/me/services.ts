import { $apiClient } from '../../../utils/apiClient'; 
import { ActionTriggerProps } from './types';
import ApiConfig from '../../../config/api-config';

export default function getProfile() {
  const url = `${ApiConfig.ME}`;
  return $apiClient.get(url);
}
