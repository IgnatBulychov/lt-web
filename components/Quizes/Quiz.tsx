"use client";

import { useState } from "react";

import { Lang } from "@/types/index";
import QuizSentence from "@/components/Quizes/QuizSentence";
import type { Sentence } from "@/types/index";
type Props = {
  sentences: Array<Sentence>;
};

export default function QuizPage({ sentences }: Props) {
  const [currentSentence, setCurrentSentence] = useState<number>(0);

  const [showWin, setShowWin] = useState<boolean>(false);

  const [showEnd, setShowEnd] = useState<boolean>(false);

  function nextSentence() {
    setShowWin(false);
    setShowEnd(false);
    if (currentSentence + 1 >= sentences.length) {
      setShowEnd(true);
      return;
    }
    setCurrentSentence(currentSentence + 1);
  }

  function finish(): void {
    setShowWin(true);
  }

  return (
    <div>
      <div className="my-2 text-center">
        {currentSentence + 1}/{sentences.length}
      </div>

      {sentences[currentSentence].tags.join(",")}
      <div>
        <QuizSentence
          sentence={sentences[currentSentence]}
          finish={finish}
          lang={Lang.Ru}
        />
      </div>

      {showEnd && "Все"}

      <div className="text-center">
        {showWin && (
          <button
            onClick={nextSentence}
            className="rounded bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600"
          >
            Далее{" "}
          </button>
        )}
      </div>
    </div>
  );
}
