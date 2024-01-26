"use client";
import { Dispatch, SetStateAction } from "react";
import { Tag, Tense, Aspect, ToBe, NGSLvariant, Voice } from "@/types/index";

type Props = {
  filter: Array<Tag>;
  setFilter: Dispatch<SetStateAction<Array<Tag>>>;
  start: () => void;
};

export default function Filters({ filter, setFilter, start }: Props) {
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

  const toBe = {
    name: "To Be",
    type: ToBe.ToBe,
  };

  const voises = [
    {
      name: "Active",
      type: Voice.Active,
    },

    {
      name: "Passive",
      type: Voice.Passive,
    },
  ];

  const NGSLvariants = [
    {
      name: "NGSL 1 - 100",
      type: NGSLvariant.NGSLfrom1to100,
    },
    {
      name: "NGSL 101 - 200",
      type: NGSLvariant.NGSLfrom101to200,
    },
    {
      name: "NGSL 201 - 300",
      type: NGSLvariant.NGSLfrom201to300,
    },
    {
      name: "NGSL 301 - 400",
      type: NGSLvariant.NGSLfrom301to400,
    },
    {
      name: "NGSL 401 - 500",
      type: NGSLvariant.NGSLfrom401to500,
    },
  ];

  return (
    <>
      <div className="rounded-md p-5 shadow-md">
        <div className="mb-1 text-sm text-gray-500">Tenses:</div>

        {tenses.map((tense) => (
          <div className="mb-2 flex items-center" key={tense.name}>
            <input
              id={`checkbox-simple-${tense.name}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
              checked={filter.includes(tense.type)}
              onChange={(e) =>
                e.target.checked
                  ? setFilter([...filter, tense.type])
                  : setFilter([...filter.filter((tag) => tag != tense.type)])
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
              checked={filter.includes(aspect.type)}
              onChange={(e) =>
                e.target.checked
                  ? setFilter([...filter, aspect.type])
                  : setFilter([...filter.filter((tag) => tag != aspect.type)])
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

        <div className="mb-1 mt-4 text-sm text-gray-500">To be:</div>

        <div className="mb-2 flex items-center" key={toBe.name}>
          <input
            id={`checkbox-simple-${toBe.name}`}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
            checked={filter.includes(toBe.type)}
            onChange={(e) =>
              e.target.checked
                ? setFilter([...filter, toBe.type])
                : setFilter([...filter.filter((tag) => tag != toBe.type)])
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
                  ? setFilter([...filter, voise.type])
                  : setFilter([...filter.filter((tag) => tag != voise.type)])
              }
            />
            <label
              htmlFor={`checkbox-simple-${voise.name}`}
              className="ms-2 text-sm font-medium text-gray-700  "
            >
              {voise.name}
            </label>
          </div>
        ))}

        <div className="mb-1 mt-4 text-sm text-gray-500">NGSL:</div>

        {NGSLvariants.map((NGSLvariant) => (
          <div className="mb-2 flex items-center" key={NGSLvariant.name}>
            <input
              id={`checkbox-simple-${NGSLvariant.name}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600"
              checked={filter.includes(NGSLvariant.type)}
              onChange={(e) =>
                e.target.checked
                  ? setFilter([...filter, NGSLvariant.type])
                  : setFilter([
                      ...filter.filter((tag) => tag != NGSLvariant.type),
                    ])
              }
            />
            <label
              htmlFor={`checkbox-simple-${NGSLvariant.name}`}
              className="ms-2 text-sm font-medium text-gray-700  "
            >
              {NGSLvariant.name}
            </label>
          </div>
        ))}

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
