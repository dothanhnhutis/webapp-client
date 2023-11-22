import { cookies } from "next/headers";

export function getCookie() {
  const cookieStore = cookies();
  const headers: { [index: string]: any } = {};
  if (cookieStore.getAll().length) {
    headers["Cookie"] = cookieStore
      .getAll()
      .map((d) => `${d.name}=${d.value}`)
      .join(";");
  }
  return headers;
}
