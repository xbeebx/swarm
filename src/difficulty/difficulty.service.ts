import { Injectable } from '@angular/core';
import {
  Difficulty,
  DifficultyTypes,
  EXTREME,
  HARD,
  STORY,
} from './difficuty.interface';

const DIFFICULTY_ASSETS_FOLDER = 'assets/difficulties/';

@Injectable({
  providedIn: 'root',
})
export class DifficultyService {
  #difficulties: Difficulty[] = [
    {
      name: STORY,
      icon: DIFFICULTY_ASSETS_FOLDER + 'story.png',
    },
    {
      name: HARD,
      icon: DIFFICULTY_ASSETS_FOLDER + 'hard.png',
    },
    {
      name: EXTREME,
      icon: DIFFICULTY_ASSETS_FOLDER + 'extreme.png',
    },
  ];

  getDifficulties = () => {
    return this.#difficulties;
  };

  getDifficultyByName = (difficulty: DifficultyTypes) => {
    return this.#difficulties.filter((d) => d.name === difficulty)[0];
  };
}
