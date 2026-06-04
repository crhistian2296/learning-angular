import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>([
    { id: '1', name: 'Goku', power: '9002' },
    { id: '2', name: 'Vegeta', power: '8500' },
    { id: '3', name: 'Gohan', power: '7000' },
    { id: '4', name: 'Goten', power: '6000' },
    { id: '5', name: 'Trunks', power: '6500' },
    { id: '6', name: 'Yamcha', power: '500' },
    { id: '7', name: 'Chaos', power: '300' },
  ]);

  newCharacter = signal<Character>({ id: '', name: '', power: '0' });

  addCharacter() {
    const character = { ...this.newCharacter(), id: Date.now().toString() };
    this.characters.update((prev) => [...prev, character]);
    this.newCharacter.set({ id: '', name: '', power: '0' });
  }
}
