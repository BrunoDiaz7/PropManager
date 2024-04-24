import {privateInstance} from '../axios';
import {User} from '@/types/user';

export const getMyUser = async () => {
  try {
    const response = await privateInstance.get('/users/me?populate=%2A');
    return response.data as User;
  } catch (error) {
    throw error;
  }
};
