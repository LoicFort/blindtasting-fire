import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatChip, MatChipSet} from "@angular/material/chips";
import {MatDialog} from "@angular/material/dialog";
import {ViewSessionModalComponent} from "../view-session-modal/view-session-modal.component";
import {fadeAnimation} from "../../../features/animations/animations";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    MatChip,
    MatChipSet,
    NgForOf
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  animations: [fadeAnimation]
})
export class HomePageComponent {
  readonly dialog = inject(MatDialog);


  constructor(private router: Router) {
  }

  openShowSessionModal(): void {
    const showSessionDialogRef = this.dialog.open(ViewSessionModalComponent);

    showSessionDialogRef.afterClosed().subscribe(sessionId => {
      console.log('The dialog was closed');
      if (sessionId != undefined) {
        this.router.navigate(['/result'], {queryParams: {sessionId}})
      }

    });
  }


}

