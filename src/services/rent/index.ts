import {privateInstance} from '../axios';
import {ContractsResponseData} from '@/types/contracts';

export const GetMyRent = async (id: number) => {
  try {
    const response = await privateInstance.get(`/contratos/${id}`);
    return response.data as ContractsResponseData;
  } catch (error) {
    throw error;
  }
};
