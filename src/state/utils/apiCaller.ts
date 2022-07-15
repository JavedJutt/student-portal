export default function apiCaller<T>(
  method: string,
  path: string,
  data?: any
): Promise<T | null> {
  console.log("api caller run", process.env.REACT_APP_CRUD_CRUD);
  return fetch(process.env.REACT_APP_CRUD_CRUD + path, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  }).then((res) => res.json());
}
