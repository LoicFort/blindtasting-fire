import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {Wine} from "../../models/wine";
import {Observable} from "rxjs";
import {UsersService} from "../../../core/services/users.service";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ResultCardComponent} from "../result-card/result-card.component";
import {ActivatedRoute, Router} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    AsyncPipe,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanelDescription,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatChipSet,
    MatChip,
    MatCardTitle,
    MatCardHeader,
    MatProgressSpinner,
    ResultCardComponent,
    NgClass,
    NgStyle,
    MatButton,
    MatIcon
  ],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css'
})
export class ResultPageComponent implements OnInit {
  wine!: Observable<Wine>;
  guesses: Observable<Wine[]> | undefined;


  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (Object.keys(params).length === 0 && params.constructor === Object) {
          this.guesses = this.usersService.getGuesses();
          this.wine = this.usersService.getAnswer();

        } else {
          const sessionId = +params['sessionId'];
          this.guesses = this.usersService.showGuesses(sessionId);
          this.wine = this.usersService.showAnswer(sessionId);

        }
      });
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
