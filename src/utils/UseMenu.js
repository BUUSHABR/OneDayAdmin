import { useQuery } from 'react-query';
import { GetMenu } from '../service/MenuService';

function useMenu() {
  return useQuery('menuList', GetMenu);
}

export default useMenu;
