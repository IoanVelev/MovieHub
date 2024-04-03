import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs: Firestore) { }


  getMovies(){
    const movieCollection = collection(this.fs, 'movies');
    return collectionData(movieCollection, {idField: 'id'});
  }

  addMovie(name: string, genre: string, year: string, description: string, imageUrl: string){
    const data = { name, genre, year, description, imageUrl };
    const movieCollection = collection(this.fs, 'movies');
    return addDoc(movieCollection, data);
  }

  deleteMovie(id: string){
    const docRef = doc(this.fs, `movies/${id}`);
    return deleteDoc(docRef);
  }
}
