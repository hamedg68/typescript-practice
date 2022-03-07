export type optional<T> = {
  [property in keyof T]?: T[property];
};

export type requiredP<type> = {
  [property in keyof type]-?: type[property];
};

export type readonlyP<T> = {
  readonly [property in keyof T]: T[property];
};

export type nonReadonlyP<T> = {
  -readonly [property in keyof T]: T[property];
};

export type functionPropertyM<T> = {
  [prop in keyof T]: () => void;
};

export type isExist<T> = {
  [prop in keyof T]: boolean;
};

export type usefulMethod<T> = {
  [prop in keyof T as `get${Capitalize<string & prop>}`]: () => T[prop];
};
