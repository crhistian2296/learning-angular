import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'dragonball-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
})
export class AddCharacter {
  newCharacter = signal<Character>({ id: '', name: '', power: '0' });
  addCharacterEvent = output<Character>();

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
    this.addCharacterEvent.emit(character);
    this.newCharacter.set({ id: '', name: '', power: '0' });
  }
}
