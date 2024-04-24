import {getMyUser} from '@/services/user';
import {User} from '@/types/user';
import {useQuery} from '@tanstack/react-query';

const useMyUser = () => {
  return useQuery<User>({
    queryKey: ['my-user'],
    queryFn: getMyUser,
    retry: 1,
  });
};
