export function apiCaller<T>(
  method: string,
  path: string,
  data?: any
): Promise<T | null> {
  return fetch(process.env.REACT_APP_CRUD_CRUD + path, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  }).then((res) => {
    return !(method === "delete" && path.includes("students"))
      ? res.json()
      : null;
  });
}
