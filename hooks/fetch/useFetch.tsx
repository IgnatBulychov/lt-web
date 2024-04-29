import { Params, Options } from "@/types/fetch/fetch";

export default function useFetch() {
  const $fetch = async (...[method, url, data, headers]: Params) => {
    let options: Options = {
      method,
      headers,
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    console.log(process.env);
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + url);

    if (response.ok) {
      let json = await response.json();
      return Promise.resolve(json);
    } else {
      return Promise.reject(response);
    }
  };

  return {
    $fetch,
  };
}
