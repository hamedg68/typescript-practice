import { readonlyP, requiredP } from "./mapType";

interface info {
  id: number;
  readonly name: string;
  location?: string;
  age: number;
}

type getInfo = readonlyP<info>;
type getInfo2 = requiredP<info>;
