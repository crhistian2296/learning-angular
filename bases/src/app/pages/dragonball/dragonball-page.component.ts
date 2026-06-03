import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Character {
  id: string;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: '1', name: 'Goku', power: 9002 },
    { id: '2', name: 'Vegeta', power: 8500 },
    { id: '3', name: 'Gohan', power: 7000 },
    { id: '4', name: 'Goten', power: 6000 },
    { id: '5', name: 'Trunks', power: 6500 },
    { id: '6', name: 'Yamcha', power: 500 },
    { id: '7', name: 'Chaos', power: 300 },
  ]);

  opLevel = (character: Character) => character.power > 9000;

  poewrClasses = (characterPower: number) => ({
    'text-danger': characterPower > 9000,
    'text-warning': characterPower > 7000 && characterPower <= 9000,
    'text-success': characterPower <= 7000,
  });
}
