import { Injectable } from '@angular/core';

import { Wine } from '../../shared/models/wine';
import { WineEntry } from '../../shared/models/WineEntry';


@Injectable({
  providedIn: 'root',
})
export class UsersService {


  constructor() { }

  public addGuess(wine: Wine) {

  }

  public createWine(wine: any): Promise<WineEntry> {
    let dataRequest: WineEntry = {
      user: {
        "username": wine.username,
        "role": "CREATOR",
        "sessionId": wine.sessionId
      },
      wine: {
        "domain": wine.domain,
        "bottleName": wine.bottleName,
        "vintage": wine.vintage,
        "grape": "654665",
      }
    };
    const data$ = fetch('http://localhost:9000/createWine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRequest)
    }
    ).then(res => res.json())
    return data$;

  }

  public getWineToGuess(sessionId: number): Promise<WineEntry> {
    const data$ = fetch(`http://localhost:9000/wineToGuess/${sessionId}`).then(res => res.json())
    return data$;
  }

  public getGuesses() {
    let sessionId = '0';

  }

  public getAnswer() {
    let sessionId = '0';

  }

  public showGuesses(sessionId: number) {

  }

  public showAnswer(sessionId: number) {
  }
}
