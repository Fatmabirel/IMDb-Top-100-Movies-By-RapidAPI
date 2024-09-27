import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  topMovies: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTop100Movies().subscribe(data => {
      this.topMovies = data; // API yanıtını topMovies değişkenine atıyoruz
      console.log(this.topMovies);
    }, error => {
      console.error('Hata:', error); // Hata durumunu yakalıyoruz
    });
  }
}
