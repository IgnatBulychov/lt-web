"use client";
"use client";
import Quiz from "@/components/Quizes/Quiz";
import { useEffect, useState } from "react";
import { Sentence, Tag, SentencesType, Tense, Aspect } from "@/types/index";
import { NgslRange } from "@/types/sentences/ngsl";
import Filters from "@/components/Quizes/Filters";
import useApi from "@/hooks/useApi";

export default function Training() {
  const [tags, setTags] = useState<Array<Tag>>([
    SentencesType.Statements,
    Tense.Present,
    Aspect.Simple,
  ]);
  const [ngslIndexes, setNgslIndexes] = useState<NgslRange>({
    from: 100,
    to: 200,
  });

  const [currentQuest, setCurrentQuest] = useState<Array<Sentence>>([]);

  const [sentences, setSentences] = useState<Array<Sentence>>([]);

  function start(): void {
    //  setCurrentQuest([]);

    console.log(sentences);
    setCurrentQuest(
      sentences.filter((sentence) =>
        sentence.tags.every((tag) => tags.includes(tag)),
      ),
    );

    // console.log(
    //   sentences.filter((sentence) =>
    //     sentence.tags.every((tag) => tags.includes(tag)),
    //   ),
    // );
  }

  const { api } = useApi();

  useEffect(() => {
    async function getSentences() {
      const response = await api.getSentences();
      setSentences(response.sentences);
    }

    getSentences();
  }, []);

  return (
    <>
      <div className="flex gap-x-12">
        <div className="absolute z-20 bg-white md:static ">
          <Filters
            tags={tags}
            setTags={setTags}
            ngslIndexes={ngslIndexes}
            setNgslIndexes={setNgslIndexes}
            start={start}
          />
        </div>
        <div className="z-10 flex flex-1 justify-center  pt-12">
          {currentQuest.length > 0 && <Quiz sentences={currentQuest} />}
        </div>
      </div>
    </>
  );
}
