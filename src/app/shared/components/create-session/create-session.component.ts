import { DatePipe } from "@angular/common";
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButton, MatIconButton } from "@angular/material/button";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatDatepickerInput, MatDatepickerToggle, MatDateRangePicker } from "@angular/material/datepicker";
import { MatFormField, MatLabel, MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { NavigationExtras, Router } from "@angular/router";
import { UsersService } from "../../../core/services/users.service";
import { AbstractWineFormComponent } from "../abstract-wine-form/abstract-wine-form.component";
import { Observable, Subject } from "rxjs";
import { WineEntry } from "../../models/WineEntry";


@Component({
  selector: 'app-create-session',
  standalone: true,
  providers: [provideNativeDateAdapter(), DatePipe],
  imports: [
    FormsModule,
    MatButton,
    MatDateRangePicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    DatePipe,
    MatFormField,
    MatIconButton,
    MatInput,
    MatIcon,
    MatLabel,
    ReactiveFormsModule,
    MatIcon,
    MatSuffix
  ],
  templateUrl: '../abstract-wine-form/abstract-wine-form.component.html',
  styleUrl: '../abstract-wine-form/abstract-wine-form.component.css',
})
export class CreateSessionComponent extends AbstractWineFormComponent {
  private static CREATOR = 'CREATOR';
  override title = 'Create Session';
  override submitButtonMessage = 'Create session'
  private wineEntry$ = new Subject<WineEntry>;


  constructor(private usersService: UsersService, private router: Router) {
    super();
  }

  override onSubmit() {
    if (this.wineForm.valid) {
      this.usersService.createWine(this.wineForm.value).then(data => {
        this.wineEntry$.next({
          user: data.user,
          wine: data.wine
        })

      }).then(() => this.router.navigateByUrl("/result"));
    }

  }

}
