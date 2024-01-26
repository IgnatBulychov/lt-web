"use client";

import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import { shuffle } from "lodash";
import type { Langs, Word, Sentence } from "@/types/index";

gsap.registerPlugin(Flip);

type Props = {
  sentence: Sentence;
  reverse?: boolean;
  lang: Langs;
  finish: () => void;
};

export default function QuizSentence({
  sentence,
  reverse,
  lang,
  finish,
}: Props) {
  const { contextSafe } = useGSAP();

  const [words, setWords] = useState<Array<Word>>([]);
  const [wordsResult, setWordsResult] = useState<Array<Word>>([]);

  const [disableFlip, setDisableFlip] = useState(false);
  const [stopMoving, setStopMoving] = useState(false);

  const [flipState, setFlipState] = useState<Flip.FlipState>();

  useEffect(() => {
    setDisableFlip(true);

    let initWords = [];

    if (reverse) {
      initWords = sentence.translates[lang].split(" ").map((word, index) => ({
        id: index,
        text: word,
      }));
    } else {
      initWords = sentence.sentence.split(" ").map((word, index) => ({
        id: index,
        text: word,
      }));
    }

    setWordsResult([]);
    setWords(shuffle(initWords));
    setStopMoving(false);
  }, [sentence]);

  useEffect(() => {
    if (disableFlip) {
      setDisableFlip(false);
      return;
    }

    if (flipState) {
      Flip.from(flipState, {
        targets: ".word",
        duration: 0.4,
        ease: "power1.inOut",
      });
    }

    if (
      (!reverse &&
        wordsResult.map((el) => el.text).join(" ") === sentence.sentence) ||
      (reverse &&
        wordsResult.map((el) => el.text).join(" ") === sentence.translates.ru)
    ) {
      setStopMoving(true);
      finish();
    }
  }, [wordsResult]);

  const move = contextSafe((word: Word) => {
    if (stopMoving) return;

    setFlipState(Flip.getState(".word"));

    if (words.some((el) => el.id === word.id)) {
      setWords([...words.filter((element) => element.id !== word.id)]);
      setWordsResult([...wordsResult, word]);
    } else {
      setWords([...words, word]);
      setWordsResult([
        ...wordsResult.filter((element) => element.id !== word.id),
      ]);
    }
  });

  return (
    <div>
      <div className="text-center">
        <div className="mb-6 text-xs">
          Составьте предложение: <br />{" "}
        </div>
        {reverse ? sentence.sentence : sentence.translates.ru}
      </div>

      <div className="flex min-h-24 flex-wrap items-center justify-center gap-2">
        {words.map((word) => (
          <div
            onClick={() => move(word)}
            key={word.id}
            data-flip-id={word.id}
            className="word cursor-pointer rounded border bg-gray-50 px-4 py-2  text-gray-800 shadow-md"
          >
            {word.text}
          </div>
        ))}
      </div>

      <div className="flex min-h-24 flex-wrap items-center justify-center gap-2">
        {wordsResult.map((word) => (
          <div
            onClick={() => move(word)}
            key={word.id}
            data-flip-id={word.id}
            className="word cursor-pointer rounded border bg-gray-50 px-4 py-2  text-gray-800 shadow-md"
          >
            {word.text}
          </div>
        ))}
      </div>
    </div>
  );
}
