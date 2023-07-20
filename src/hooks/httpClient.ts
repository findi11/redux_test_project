import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import snakeCaseKeys from 'snakecase-keys';
import camelCaseKeys from 'camelcase-keys';

import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

// actions
// import { actions as logoutActions } from 'store/modules/logout/slice';

const useHttpClient = (
  httpClientInstance: AxiosInstance,
): [string | null, () => void] => {
  // local error state
  const [error, setError] = useState<string | null>(null);

  // actions
  const dispatch = useDispatch();
  // const onLogout = () => dispatch(logoutActions.logoutTrigger());

  // const setPermissionsError = (data: IDataPayload) =>
  //   dispatch(globalActions.permisionsError(data));

  // request interceptor
  const reqInterceptor = httpClientInstance.interceptors.request.use(
    async (config:any) => {
      setError(null);



      // formatting data
      if (config.data) {
        config.data =
          config.data instanceof FormData
            ? config.data
            : snakeCaseKeys(config.data, { deep: true });
      }
      
      console.log(config.data)

      // formatting headers
      const accessToken = await localStorage.getItem('access_token');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (err: any) => {
      setError(err);
      return Promise.reject(err);
    },
  );

  // response interceptor
  const resInterceptor = httpClientInstance.interceptors.response.use(
    (res: AxiosResponse) => {
      return camelCaseKeys(res.data, { deep: true });
    },
    (err: any) => {
      let formattedMessage: string | null = null;

      if (err && err.response) {
        // errors handling
        switch (err.response.status) {
          case 401:
            // onLogout();
            break;

          case 403:
            break;

          case 500:
            formattedMessage = 'Unknown error';
            break;

          default:
            break;
        }

        if (err.response.data.message) {
          formattedMessage = err.response.data.message;
        }

        if (err.response.data.errors) {
          Object.keys(err.response.data.errors).forEach(errorKey => {
            // @ts-ignore
            err.response.data.errors[errorKey].forEach((line: string) => {
              formattedMessage += `\r\n${line}`;
            });
          });
        }

        if (err.response.status !== 401) {
          setError(formattedMessage);
        }
      }

      return Promise.reject(err);
    },
  );

  // watch reqInterceptor & resInterceptor - eject request & response interceptors
  useEffect(
    () => () => {
      httpClientInstance.interceptors.request.eject(reqInterceptor);
      httpClientInstance.interceptors.response.eject(resInterceptor);
    },
    [
      reqInterceptor,
      resInterceptor,
      httpClientInstance.interceptors.request,
      httpClientInstance.interceptors.response,
    ],
  );

  const errorClearedHandler = () => {
    setError(null);
  };

  return [error, errorClearedHandler];
};

export default useHttpClient;
