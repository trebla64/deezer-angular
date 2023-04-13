import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Artist {
  id: number;
  name: string;
  img: string;
  fans: number;
}

export interface Album {
  id: number;
  name: string;
  img: string;
  fans: number;
  release_date: string;
}

export interface Track {
  id: number;
  name: string;
  duration: number;
}

@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  constructor(private http: HttpClient) {}

  // getArtists(artist: string): Promise<Artist[]> {
  //   return this.http
  //     .get(`https://api.deezer.com/search/artist/?q=${artist}`)
  //     .toPromise();
  // }

  getArtists(artist: string): Observable<Artist[]> {
    return this.http
      .get<any>(`https://api.deezer.com/search/artist/?q=${artist}`)
      .pipe(map((response) => this.parseArtists(response)));
  }

  private parseArtists(response: any): Artist[] {
    console.log(response);
    const artistData = response?.data;
    if (!artistData) {
      return [];
    }

    return artistData.map((artist: any) => ({
      id: artist.id,
      name: artist.name,
      img: artist.picture_xl,
      fans: artist.nb_fan
    }));
  }

  // getAlbums(artist_id: number): Promise<Album[]> {
  //   return this.http
  //     .get<Album[]>(`${this.API_URL}/artist/${artist_id}/albums`)
  //     .toPromise();
  // }

  // getTop5(artist_id: number): Promise<Track[]> {
  //   return this.http
  //     .get<Track[]>(`${this.API_URL}/artist/${artist_id}/top5`)
  //     .toPromise();
  // }
}
