import { Component } from '@angular/core';
import { CharacterService } from '../../Services/character.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent {
  characters: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.fetchCharacters(1);
  }

  fetchCharacters(page: number): void {
    this.characterService.getCharacters(page)
      .subscribe(
        (data: any) => {
          this.characters = data.results;
          this.loading = false;
        },
        (error: any) => {
          this.error = 'Failed to fetch characters';
          this.loading = false;
        }
      );
  }
}
