export enum Method {
  GET = "GET",
  POST = "POST",
}

export type Options = {
  method: Method;
  headers: {};
  body?: {};
};

export type Params = [Method, string, {}?, any?];
