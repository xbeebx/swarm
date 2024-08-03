export interface Difficulty {
  name: DifficultyTypes;
  icon: string;
}

export const STORY = 'Anima Squad: Story';
export const HARD = 'Hard';
export const EXTREME = 'Extreme';

export const DIFFICULTIES = [STORY, HARD, EXTREME] as const;

export type DifficultyTypes = (typeof DIFFICULTIES)[number];
