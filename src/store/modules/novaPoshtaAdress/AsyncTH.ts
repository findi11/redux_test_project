import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { novaPoshtaStateData, novaPoshtaStatePayload } from './types';
import axios from 'axios';

export const getWarehouses = createAsyncThunk(
    'warehouses/getWarehouses',
    async ({apiKey,cityName}:novaPoshtaStateData) => {
      const response = await axios.get('https://api.novaposhta.ua/v2.0/json/Address/getWarehouses', {
        params: {
          apiKey: '1ec33dac85fa5664097f829636f46323',
          CityName: cityName,
        },
      });
      return response.data;
    }
  );