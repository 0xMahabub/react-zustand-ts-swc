import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINT } from '../configs';
import { User } from '../interfaces';
import axios from 'axios';

export function useUser() {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: async (): Promise<User[]> => {
      const { data } = await axios.get(API_ENDPOINT + '/users');
      return data;
    },
  });
}
