import type {
  AnalyticsQuery,
  Mastery,
  Participant,
  SummonerSnapshot,
} from "./PrismaTypes";

type CompleteSummoner = SummonerSnapshot & {
  participants: Participant[];
  masteries: Mastery[];
};

export namespace AnalyzedQueriesDTOs {
  export interface AnalyzedQuery extends AnalyticsQuery {
    snapshots: AnalyzedSnapshot[];
  }
  export interface AnalyzedSnapshot extends CompleteSummoner {
    championPool: Champion[];
    mostPlayedPosition: PositionPlayed[];
    globalStats: GlobalStats;
  }
  export interface GlobalStats {
    kills: number;
    deaths: number;
    assists: number;
    totalGames: number;
    wins: number;
    avgVisionScore: number;
    avgVisionWardsBought: number;
    avgCreepScore: number;
  }
  export interface Champion {
    championId: number;
    championName: string;
    level: number;
    points: number;
    used: number;
    wins: number;
  }
  export interface PositionPlayed {
    count: number;
    position: string;
  }
}
