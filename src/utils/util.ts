//表单序列化
export const serialize = (data:any) => {
  let list:any = [];
  Object.keys(data).forEach((ele) => {
    list.push(`${ele}=${data[ele]}`);
  });
  return list.join('&');
};