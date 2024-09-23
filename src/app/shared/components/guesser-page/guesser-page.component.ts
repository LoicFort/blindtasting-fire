import {Component} from '@angular/core';
import {AbstractWineFormComponent} from "../abstract-wine-form/abstract-wine-form.component";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDatepickerInput, MatDatepickerToggle, MatDateRangePicker} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {provideNativeDateAdapter} from "@angular/material/core";
import {DatePipe} from "@angular/common";
import {UsersService} from "../../../core/services/users.service";
import { Router} from "@angular/router";
import {Wine} from "../../models/wine";


@Component({
  selector: 'app-guesser-page',
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
  styleUrl: '../abstract-wine-form/abstract-wine-form.component.css'
})
export class GuesserPageComponent extends AbstractWineFormComponent {
  private static GUESSER = 'GUESSER';
  override title = 'Make your guess';
  override submitButtonMessage = 'submit'

  constructor(private usersService: UsersService, private router: Router) {
    super();
  }

  onSubmit() {
    if (this.wineForm.valid) {
      let guesser = this.wineForm.value as unknown as Wine;

      this.usersService.addGuess(guesser);
      this.router.navigate(['/result']);
    }
  }



}
