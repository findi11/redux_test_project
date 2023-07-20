import React, { useEffect } from 'react';
import { AxiosInstance } from 'axios';
// import { toast } from 'react-toastify';

import useHttpClient from '../../hooks/httpClient';

const withErrorHandler = (
  WrappedComponent: React.FC,
  $axiosInstance: AxiosInstance,
) => (props:any) => {
  const [error, clearError] = useHttpClient($axiosInstance);

  useEffect(() => {
    if (error) {
      emitToast(error);
      clearError();
    }
  }, [error, clearError]);

  const emitToast = (message: string) => {
    if (message) {
      console.log('message', message);
      // toast.error(message);
    }
  };

  return <WrappedComponent {...props} />;
};

export default withErrorHandler;
