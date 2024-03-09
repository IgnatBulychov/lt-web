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
    const response = await fetch("http://127.0.0.1:3000" + url);

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
