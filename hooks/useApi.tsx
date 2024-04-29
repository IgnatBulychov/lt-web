import useFetch from "@/hooks/fetch/useFetch";
import { Method } from "@/types/fetch/fetch";
import { Tag } from "@/types/index";
import { NgslRange } from "@/types/sentences/ngsl";

export default function useApi() {
  const { $fetch } = useFetch();

  const api = {
    getSentences: async (query: { tags: Array<Tag>; ngslIndexes: NgslRange }) =>
      await $fetch(
        Method.GET,
        `/sentences?${new URLSearchParams({ tags: query.tags.join(","), ngslFrom: query.ngslIndexes.from.toString(), ngslTo: query.ngslIndexes.to.toString() })}`,
      ),
  };

  return {
    api,
  };
}
