import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  imports: [NgClass],
  templateUrl: './character-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterList {
  characters = input.required<Character[]>();
  listName = input.required<string>();

  powerLevelNumber = (character: Character) => Number(character.power);

  powerClasses = (characterPower: string) => {
    const power = +characterPower;

    return {
      'text-danger': power > 9000,
      'text-warning': power > 7000 && power <= 9000,
      'text-success': power <= 7000,
    };
  };
}
