import {Injectable} from '@angular/core';
import {map, Observable, takeLast} from "rxjs";
import {User} from "../../shared/models/user";
import {Wine} from "../../shared/models/wine";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Creator} from "../../shared/models/creator";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public user: User | null = null;

  constructor(private afs: AngularFirestore) {
  }

  public addUser(user: User) {
    this.user = user;
    if (user.sessionId == null) {
      user.sessionId = this.user.sessionId.toString();
    }

    this.afs.collection(`session/${user.sessionId}/user`)
      .doc(this.user?.username).set(user)
      .then()
  }

  public addUserCreator(user: Creator) {
    this.addUser(user);
  }

  public addGuess(wine: Wine) {
    const sessionId = this.user!.sessionId.toString();
    wine.username = this.user!.username;
    this.afs.collection(`session/${sessionId}/wines`)
      .doc('guess')
      .set(wine)
      .then(() => {
        console.log('Données enregistrées avec succès !');
      })
      .catch(error => {
        console.error('Erreur lors de l\'enregistrement des données : ', error);
      });

  }

  public createWine(wine: Creator) {
    const sessionId = this.user!.sessionId.toString();
    wine.username = this.user!.username;
    this.afs.collection(`session/${sessionId}/wineToGuess`)
      .doc("winner")
      .set(wine)
      .then(() => {
        console.log('Données enregistrées avec succès !');
      })
      .catch(error => {
        console.error('Erreur lors de l\'enregistrement des données : ', error);
      });

  }

  public getGuesses(): Observable<unknown[]> {
    const sessionId = this.user!.sessionId.toString();
    return this.afs.collection(`session/${sessionId}/wines`)
      .valueChanges()
      .pipe(map(value => value));
  }

  public getAnswer(): Observable<Wine> {
    const sessionId = this.user!.sessionId.toString();
    return this.afs.collection(`session/${sessionId}/wineToGuess`).doc('winner')
      .valueChanges().pipe(map(value => value as Wine));

  }
}
