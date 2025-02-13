import { AxiosResponse } from 'axios';

export type IApiResponse<T> = Promise<
  AxiosResponse<T, any> & {
    status: 'FAILURE' | 'SUCCESS';
    request: object;
  }
>;
