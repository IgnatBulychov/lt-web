import useFetch from "@/hooks/fetch/useFetch";
import { Method } from "@/types/fetch/fetch";
import { Tag } from "@/types/index";

export default function useApi() {
  const { $fetch } = useFetch();

  const api = {
    getSentences: async (query: Array<Tag>) =>
      await $fetch(
        Method.GET,
        `/sentences?${new URLSearchParams({ tags: query.join(",") })}`,
      ),
  };

  return {
    api,
  };
}
