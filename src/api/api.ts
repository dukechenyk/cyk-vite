import request from '@/utils/axios';

export const getList = (query:any) => {
  return request({
    url: '/api/blade-system/bascoderule/list',
    method: 'get',
    params: {
      ...query,
    },
  });
};