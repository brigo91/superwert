import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterService } from '../Services/character.service';
import { CharacterListComponent } from './character-list/character-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superwert';

  constructor(private characterService: CharacterService){}
}
