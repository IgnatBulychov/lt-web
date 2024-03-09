"use client";

import Quiz from "@/components/Quizes/Quiz";
import { useEffect, useState } from "react";
import { Sentence, Tag, SentencesType, Tense, Aspect } from "@/types/index";
import Filters from "@/components/Quizes/Filters";
import useApi from "@/hooks/useApi";

export default function Training() {
  const [filter, setFilter] = useState<Array<Tag>>([]);

  const [currentQuest, setCurrentQuest] = useState<Array<Sentence>>([]);

  const { api } = useApi();

  async function start() {
    setCurrentQuest([]);

    const sentences = await api.getSentences(filter);
    console.log(sentences);
    setCurrentQuest(sentences);
  }

  useEffect(() => {
    setFilter([SentencesType.Statements, Tense.Present, Aspect.Simple]);
  }, []);

  return (
    <>
      <div className="flex gap-x-12">
        <div className="pt-8">
          <Filters filter={filter} setFilter={setFilter} start={start} />
        </div>
        <div className="flex flex-1 justify-center pt-12">
          {currentQuest.length > 0 && <Quiz sentences={currentQuest} />}
        </div>
      </div>
    </>
  );
}
