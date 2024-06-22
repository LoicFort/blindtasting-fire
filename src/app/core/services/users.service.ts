import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Wine} from "../../shared/models/wine";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Firestore} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private afs: AngularFirestore, private firestore: Firestore) {
  }

  public addGuess(wine: Wine) {
    this.afs.collection(`session/${wine.sessionId}/wines`)
      .doc(wine.username)
      .set(wine, {merge: true})
      .then(() => {
        console.log('Données enregistrées avec succès !');
      })
      .catch(error => {
        console.error('Erreur lors de l\'enregistrement des données : ', error);
      });

  }

  public createWine(wine: Wine) {
    // this.afs.collection(`session/${wine.sessionId}/wineToGuess`)
    //   .doc(wine.username)
    //   .set(wine, {merge: true})
    //   .then(() => {
    //     console.log('Données enregistrées avec succès !');
    //   })
    //   .catch(error => {
    //     console.error('Erreur lors de l\'enregistrement des données : ', error);
    //
    //   });
    this.afs.collection('test').doc("test").set(wine);

  }

  public getGuesses(): Observable<Wine[]> {
    let sessionId = '0';
    return this.afs.collection(`session/${sessionId}/wines`)
      .valueChanges()
      .pipe(map(value => value as Wine[]));
  }

  public getAnswer(): Observable<Wine> {
    let sessionId = '0';
    return this.afs.collection(`session/${sessionId}/wineToGuess`).doc('winner')
      .valueChanges().pipe(map(value => value as Wine));
  }

  public showGuesses(sessionId: number): Observable<Wine[]> {
    return this.afs.collection(`session/${sessionId}/wines`)
      .valueChanges()
      .pipe(map(value => value as Wine[]));
  }

  public showAnswer(sessionId: number): Observable<Wine> {
    return this.afs.collection(`session/${sessionId}/wineToGuess`).doc('winner')
      .valueChanges().pipe(map(value => value as Wine));
  }

}
