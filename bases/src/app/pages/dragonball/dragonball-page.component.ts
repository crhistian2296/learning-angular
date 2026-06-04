import { Component, inject } from '@angular/core';
import { AddCharacter } from '../../components/dragonball/add-character/add-character.component';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterList, AddCharacter],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  dragonballService = inject(DragonballService);
}
