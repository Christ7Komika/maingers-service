const url = " http://127.0.0.1:3333/api/v1";
export const api = (name: string, path: string, id?: number) => {
  if (id) {
    return `${url}/${name}${path}${id}`;
  }
  return `${url}/${name}${path}`;
};
