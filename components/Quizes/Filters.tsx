"use client";
import { Dispatch, SetStateAction } from "react";
import { Tag, SentencesType, Tense, Aspect, ToBe, Voice } from "@/types/index";
import { NgslRange } from "@/types/sentences/ngsl";

type Props = {
  tags: Array<Tag>;
  setTags: Dispatch<SetStateAction<Array<Tag>>>;
  ngslIndexes: NgslRange;
  setNgslIndexes: Dispatch<SetStateAction<NgslRange>>;
  start: () => void;
};

export default function Filters({
  tags,
  setTags,
  ngslIndexes,
  setNgslIndexes,
  start,
}: Props) {
  const sentencesTypes = [
    {
      name: "Statements",
      type: SentencesType.Statements,
    },
    {
      name: "Questions",
      type: SentencesType.Questions,
    },
    {
      name: "Negation",
      type: SentencesType.Negation,
    },
  ];

  const tenses = [
    {
      name: "Present",
      type: Tense.Present,
    },
    {
      name: "Future",
      type: Tense.Future,
    },
    {
      name: "Past",
      type: Tense.Past,
    },
  ];

  const aspects = [
    {
      name: "Simple",
      type: Aspect.Simple,
    },
    {
      name: "Perfect",
      type: Aspect.Perfect,
    },
    {
      name: "Continues",
      type: Aspect.Continues,
    },
    {
      name: "Perfect Continues",
      type: Aspect.PerfectContinues,
    },
  ];

  // const toBe = {
  //   name: "To Be",
  //   type: ToBe.ToBe,
  // };

  // const voises = [
  //   {
  //     name: "Active",
  //     type: Voice.Active,
  //   },

  //   {
  //     name: "Passive",
  //     type: Voice.Passive,
  //   },
  // ];

  return (
    <>
      <div className="h-screen p-5 shadow-lg">
        <div className="mb-1 text-sm text-gray-500">Sentences types:</div>
        {sentencesTypes.map((sentencesType) => (
          <div className="mb-2 flex items-center" key={sentencesType.name}>
            <input
              id={`checkbox-simple-${sentencesType.name}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
              checked={tags.includes(sentencesType.type)}
              onChange={(e) =>
                e.target.checked
                  ? setTags([...tags, sentencesType.type])
                  : setTags([
                      ...tags.filter((tag) => tag != sentencesType.type),
                    ])
              }
            />
            <label
              htmlFor={`checkbox-simple-${sentencesType.name}`}
              className="ms-2 text-sm font-medium text-gray-700  "
            >
              {sentencesType.name}
            </label>
          </div>
        ))}
        <div className="mb-1 text-sm text-gray-500">Tenses:</div>
        {tenses.map((tense) => (
          <div className="mb-2 flex items-center" key={tense.name}>
            <input
              id={`checkbox-simple-${tense.name}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
              checked={tags.includes(tense.type)}
              onChange={(e) =>
                e.target.checked
                  ? setTags([...tags, tense.type])
                  : setTags([...tags.filter((tag) => tag != tense.type)])
              }
            />
            <label
              htmlFor={`checkbox-simple-${tense.name}`}
              className="ms-2 text-sm font-medium text-gray-700  "
            >
              {tense.name}
            </label>
          </div>
        ))}
        <div className="mb-1 mt-4 text-sm text-gray-500">Aspects:</div>
        {aspects.map((aspect) => (
          <div className="mb-2 flex items-center" key={aspect.name}>
            <input
              id={`checkbox-simple-${aspect.name}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
              checked={tags.includes(aspect.type)}
              onChange={(e) =>
                e.target.checked
                  ? setTags([...tags, aspect.type])
                  : setTags([...tags.filter((tag) => tag != aspect.type)])
              }
            />
            <label
              htmlFor={`checkbox-simple-${aspect.name}`}
              className="ms-2 text-sm font-medium text-gray-700  "
            >
              {aspect.name}
            </label>
          </div>
        ))}
        {/* <div className="mb-1 mt-4 text-sm text-gray-500">To be:</div>

        <div className="mb-2 flex items-center" key={toBe.name}>
          <input
            id={`checkbox-simple-${toBe.name}`}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
            checked={filter.includes(toBe.type)}
            onChange={(e) =>
              e.target.checked
                ? setTags([...filter, toBe.type])
                : setTags([...filter.filter((tag) => tag != toBe.type)])
            }
          />
          <label
            htmlFor={`checkbox-simple-${toBe.name}`}
            className="ms-2 text-sm font-medium text-gray-700  "
          >
            {toBe.name}
          </label>
        </div>

        <div className="mb-1 mt-4 text-sm text-gray-500">Voise:</div>

        {voises.map((voise) => (
          <div className="mb-2 flex items-center" key={voise.name}>
            <input
              id={`checkbox-simple-${voise.name}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
              checked={filter.includes(voise.type)}
              onChange={(e) =>
                e.target.checked
                  ? setTags([...filter, voise.type])
                  : setTags([...filter.filter((tag) => tag != voise.type)])
              }
            />
            <label
              htmlFor={`checkbox-simple-${voise.name}`}
              className="ms-2 text-sm font-medium text-gray-700  "
            >
              {voise.name}
            </label>
          </div>
        ))} */}
        <div className="mb-1 mt-4 text-sm text-gray-500">NGSL:</div>

        <div className="mt-2 flex">
          <div className="ms-2 w-14 text-sm font-medium text-gray-700">
            From
          </div>
          <input
            type="number"
            className="w-16 rounded border "
            min={100}
            max={2700}
            defaultValue={100}
            onChange={(e) =>
              setNgslIndexes({
                from: Number(e.target.value),
                to: ngslIndexes.to,
              })
            }
          />
        </div>
        <div className="mt-2 flex">
          <div className="ms-2 w-14 text-sm font-medium text-gray-700">To</div>
          <input
            type="number"
            className="w-16 rounded border"
            min={200}
            max={2801}
            defaultValue={200}
            onChange={(e) =>
              setNgslIndexes({
                from: ngslIndexes.from,
                to: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={start}
            className="rounded bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600"
          >
            Начать
          </button>
        </div>
      </div>
    </>
  );
}
