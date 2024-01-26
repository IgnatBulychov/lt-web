import {
  Sentence,
  Tense,
  Aspect,
  ToBe,
  NGSLvariant,
  Voice,
} from "@/types/index";

export default [
  {
    id: 0,
    sentence: "I work",
    translates: {
      ru: "Я работаю",
    },
    tags: [
      Tense.Present,
      Aspect.Simple,
      Voice.Active,
      NGSLvariant.NGSLfrom1to100,
    ],
  },
  {
    id: 1,
    sentence: "I change",
    translates: {
      ru: "Я меняю",
    },
    tags: [
      Tense.Present,
      Aspect.Simple,
      Voice.Active,
      NGSLvariant.NGSLfrom101to200,
    ],
  },
  {
    id: 2,
    sentence: "He is working",
    translates: {
      ru: "Он работает",
    },
    tags: [
      Tense.Present,
      Aspect.Continues,
      Voice.Active,
      NGSLvariant.NGSLfrom1to100,
    ],
  },
  {
    id: 3,
    sentence: "She has done",
    translates: {
      ru: "Она сделала",
    },
    tags: [
      Tense.Present,
      Aspect.Perfect,
      Voice.Active,
      NGSLvariant.NGSLfrom1to100,
    ],
  },

  {
    id: 4,
    sentence: "I am here",
    translates: {
      ru: "Я здесь",
    },
    tags: [Tense.Present, ToBe.ToBe, Voice.Active, NGSLvariant.NGSLfrom1to100],
  },

  {
    id: 5,
    sentence: "The door is closed",
    translates: {
      ru: "Зверь закрыта",
    },
    tags: [
      Tense.Present,
      ToBe.ToBe,
      Voice.Passive,
      NGSLvariant.NGSLfrom201to300,
      NGSLvariant.NGSLfrom401to500,
    ],
  },
] as Array<Sentence>;
