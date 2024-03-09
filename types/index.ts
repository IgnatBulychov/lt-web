export type Word = {
  id: number;
  text: string;
};

export enum SentencesType {
  Statements = "statements",
  Questions = "questions",
  Negation = "negation",
}

export enum Tense {
  Present = "present",
  Future = "future",
  Past = "past",
}

export enum Aspect {
  Simple = "simple",
  Perfect = "perfect",
  Continues = "continues",
  PerfectContinues = "perfectContinues",
}

export enum ToBe {
  ToBe = "toBe",
}

export enum Voice {
  Active = "active",
  Passive = "passive",
}

export type Tag = SentencesType | Tense | Aspect | ToBe | Voice;

export enum Lang {
  Ru = "ru",
}

export type Translate = {
  lang: Lang;
  text: string;
};

export interface Sentence {
  id: number;
  text: string;
  translations: {
    [key in Lang]: string;
  };
  tags: Array<Tag>;
}
