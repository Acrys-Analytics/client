import type { Regions } from "twisted/dist/constants";
import type { QueryType } from "./PrismaTypes.js";

export interface CreateQueryDTO {
  depth: number;
  type: QueryType;
  region: Regions;
  search: string;
}
