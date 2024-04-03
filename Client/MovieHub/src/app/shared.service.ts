import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, getFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs: Firestore) { }


  getMovies(){
    const movieCollection = collection(this.fs, 'movies');
    return collectionData(movieCollection, {idField: 'id'});
  }

   getMovieById(id: string){
    const db = getFirestore();
    const docRef  = doc(db, 'movies', id);
    const promise = getDoc(docRef).
    then((res) => {
      return res
    })
    return from(promise);
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
