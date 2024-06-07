import { Sentence, Tense, Aspect, ToBe, Voice } from "@/types/index";

export default [
  {
    id: 0,
    text: "I work",
    translations: {
      ru: "Я работаю",
    },
    tags: [Tense.Present, Aspect.Simple, Voice.Active],
    ngslIndexes: [100],
  },
  {
    id: 1,
    text: "I change",
    translations: {
      ru: "Я меняю",
    },
    tags: [Tense.Present, Aspect.Simple, Voice.Active],
  },
  {
    id: 2,
    text: "He is working",
    translations: {
      ru: "Он работает",
    },
    tags: [Tense.Present, Aspect.Continues, Voice.Active],
    ngslIndexes: [100],
  },
  {
    id: 3,
    text: "She has done",
    translations: {
      ru: "Она сделала",
    },
    tags: [Tense.Present, Aspect.Perfect, Voice.Active],
    ngslIndexes: [100],
  },

  {
    id: 4,
    text: "I am here",
    translations: {
      ru: "Я здесь",
    },
    tags: [Tense.Present, ToBe.ToBe, Voice.Active],
    ngslIndexes: [100],
  },

  {
    id: 5,
    text: "The door is closed",
    translations: {
      ru: "Зверь закрыта",
    },
    tags: [Tense.Present, ToBe.ToBe, Voice.Passive],
    ngslIndexes: [100],
  },
] as Array<Sentence>;
