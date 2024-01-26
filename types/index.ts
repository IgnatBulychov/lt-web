export type Word = {
  id: number;
  text: string;
};

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

export enum NGSLvariant {
  NGSLfrom1to100 = "NGSL 1 - 100",
  NGSLfrom101to200 = "NGSL 101 - 200",
  NGSLfrom201to300 = "NGSL 201 - 300",
  NGSLfrom301to400 = "NGSL 301 - 400",
  NGSLfrom401to500 = "NGSL 401 - 500",
}

export type Tag = Tense | Aspect | NGSLvariant | ToBe | Voice;

export enum Langs {
  Ru = "ru",
}

export type Translate = {
  lang: Langs;
  text: string;
};

export interface Sentence {
  id: number;
  sentence: string;
  translates: {
    [key in Langs]: string;
  };
  tags: Array<Tag>;
}
