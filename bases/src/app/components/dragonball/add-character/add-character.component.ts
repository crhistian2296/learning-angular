import { Component, model, signal } from '@angular/core';

@Component({
  selector: 'dragonball-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
})
export class AddCharacter {
  characters = model.required<Character[]>();
  newCharacter = signal<Character>({ id: '', name: '', power: '0' });

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
