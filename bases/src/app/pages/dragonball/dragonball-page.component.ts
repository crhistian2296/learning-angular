import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AddCharacter } from '../../components/dragonball/add-character/add-character';
import { CharacterList } from '../../components/dragonball/character-list/character-list';

interface Character {
  id: string;
  name: string;
  power: string;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterList, AddCharacter],
  templateUrl: './dragonball-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: '1', name: 'Goku', power: '9002' },
    { id: '2', name: 'Vegeta', power: '8500' },
    { id: '3', name: 'Gohan', power: '7000' },
    { id: '4', name: 'Goten', power: '6000' },
    { id: '5', name: 'Trunks', power: '6500' },
    { id: '6', name: 'Yamcha', power: '500' },
    { id: '7', name: 'Chaos', power: '300' },
  ]);
}
