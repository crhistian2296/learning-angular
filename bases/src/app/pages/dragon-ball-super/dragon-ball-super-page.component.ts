import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Character {
  id: string;
  name: string;
  power: string;
}

@Component({
  selector: 'app-dragon-ball-super-page',
  imports: [NgClass],
  templateUrl: './dragon-ball-super-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonBallSuperPageComponent {
  characters = signal<Character[]>([
    { id: '1', name: 'Goku', power: '9002' },
    { id: '2', name: 'Vegeta', power: '8500' },
    { id: '3', name: 'Gohan', power: '7000' },
    { id: '4', name: 'Goten', power: '6000' },
  ]);

  newCharacter = signal<Character>({ id: '', name: '', power: '0' });

  powerLevelNumber = (character: Character) => Number(character.power);

  opLevel = (character: Character) => character.power > '9000';

  powerClasses = (characterPower: string) => {
    const power = +characterPower;

    return {
      'text-danger': power > 9000,
      'text-warning': power > 7000 && power <= 9000,
      'text-success': power <= 7000,
    };
  };

  updateName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.newCharacter.update((c) => ({ ...c, name }));
  }

  updatePower(event: Event) {
    const power = (event.target as HTMLInputElement).value;
    this.newCharacter.update((c) => ({ ...c, power }));
  }

  addCharacter() {
    const character = { ...this.newCharacter(), id: Date.now().toString() };
    this.characters.update((prev) => [...prev, character]);
    this.newCharacter.set({ id: '', name: '', power: '0' });
  }
}
