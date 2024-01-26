"use client";
import sentences from "@/consts/sentences";
import Quiz from "@/components/Quizes/Quiz";
import { useState } from "react";
import { Sentence, Tag, Tense, Aspect, NGSLvariant } from "@/types/index";
import Filters from "@/components/Quizes/Filters";
export default function Training() {
  const [filter, setFilter] = useState<Array<Tag>>([]);

  // ...Object.values(Tense as const),
  // ...Object.values(Aspect as const),
  // ...Object.values(NGSLvariant as const),
  const [currentQuest, setCurrentQuest] = useState<Array<Sentence>>([]);

  function start(): void {
    setCurrentQuest([]);
    setCurrentQuest(
      sentences.filter((sentence) =>
        sentence.tags.every((tag) => filter.includes(tag)),
      ),
    );
  }

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
