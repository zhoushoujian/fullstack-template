import axios from 'axios';
import { axiosInterceptorsConfig } from '@/utils/common';

export const request = axios.create({ baseURL: `/` });
axiosInterceptorsConfig(request);
