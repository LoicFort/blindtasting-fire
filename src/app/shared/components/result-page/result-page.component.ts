import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Wine} from "../../models/wine";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {UsersService} from "../../../core/services/users.service";


@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css'
})
export class ResultPageComponent implements OnInit {
  wineToGuess!: Observable<Wine>;
  guesses: Observable<Wine[]> | undefined;


  constructor(private afs: AngularFirestore, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.guesses = this.usersService.getGuesses() as unknown as Observable<Wine[]>;
    this.wineToGuess = this.usersService.getAnswer();
  }
}
