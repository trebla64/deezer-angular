import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist, DeezerService } from '../deezer.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public artists: Artist[] = [];
  private search = '';
  private sub: any;
  public loadingArtists = false;

  constructor(
    private deezerService: DeezerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      // Don't load artists when search is undefined
      const searchTerm = params['search'];
      if (searchTerm) {
        this.loadArtists(params['search']);
      }
    });
  }

  async loadArtists(search: string) {
    try {
      this.artists = []; // Must clear artists array for loading indicator to work
      this.loadingArtists = true;
      // this.artists = await this.deezerService.getArtists(search);
      this.deezerService.getArtists(search).subscribe({
        // (artists: Artist[]) => {
        //   // Do something with the artists
        // },
        // (error) => {
        //   // Handle the error
        // }
        next: (v) => this.artists = v,
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    });
      this.loadingArtists = false;
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  onClickCard(artist: Artist) {
    this.router.navigate([
      '/artist',
      { id: artist.id, img: artist.img, fans: artist.fans, name: artist.name },
    ]);
  }
}
