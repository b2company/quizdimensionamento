
export type Role = 'owner' | 'director' | 'sales' | 'other' | '';
export type TeamSize = 'none' | '1-3' | '4-10' | '10+' | '';
export type GoalPerformance = 'always' | 'sometimes' | 'rarely' | 'never' | '';
export type ProcessState = 'defined' | 'partial' | 'none' | 'structuring' | '';
export type PlanningMethod = 'feeling' | 'sheets' | 'uncertain' | 'controlled' | '';
export type Attitude = 'immediate' | 'planned' | 'maybe' | '';

export interface DiagnosisData {
  role: Role;
  teamSize: TeamSize;
  goalPerformance: GoalPerformance;
  processState: ProcessState;
  issues: string[];
  objective: string;
  planningMethod: PlanningMethod;
  attitude: Attitude;
}

export enum AppStep {
  HOME,
  ROLE_SELECTION,
  SOCIAL_PROOF,
  TEAM_SIZE,
  REVENUE_GOALS,
  SALES_PROCESS,
  OPERATIONAL_ISSUES,
  OBJECTIVE,
  SUCCESS_STORIES,
  PLANNING_METHOD,
  ATTITUDE,
  PROCESSING,
  RESULT,
  SALES_OFFER
}
