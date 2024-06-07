import useFetch from "@/hooks/fetch/useFetch";
import { Method } from "@/types/fetch/fetch";
import { Tag } from "@/types/index";
import { NgslRange } from "@/types/sentences/ngsl";

export default function useApi() {
  const { $fetch } = useFetch();

  const api = {
    getSentences: async () => await $fetch(Method.GET, `/base.json`),
  };

  return {
    api,
  };
}
