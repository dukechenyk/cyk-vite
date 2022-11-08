//表单序列化
export const serialize = (data:any) => {
  let list:any = [];
  Object.keys(data).forEach((ele) => {
    list.push(`${ele}=${data[ele]}`);
  });
  return list.join('&');
};

// 获取assets静态资源
export const getAssetsFile = (url: string) => {
  return new URL(`../assets/slices/${url}`, import.meta.url).href;
};