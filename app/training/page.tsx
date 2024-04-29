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

  const { api } = useApi();

  async function start() {
    setCurrentQuest([]);

    const sentences = await api.getSentences({ tags, ngslIndexes });
    console.log(sentences);
    setCurrentQuest(sentences);
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex gap-x-12">
        <div>
          <Filters
            tags={tags}
            setTags={setTags}
            ngslIndexes={ngslIndexes}
            setNgslIndexes={setNgslIndexes}
            start={start}
          />
        </div>
        <div className="flex flex-1 justify-center pt-12">
          {currentQuest.length > 0 && <Quiz sentences={currentQuest} />}
        </div>
      </div>
    </>
  );
}
