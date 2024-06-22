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
import {fadeAnimation} from "../../../features/animations/animations";
import {Wine} from "../../models/wine";


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
  animations: [fadeAnimation]
})
export class CreateSessionComponent extends AbstractWineFormComponent {
  private static CREATOR = 'CREATOR';
  override title = 'Create Session';
  override submitButtonMessage = 'Create session'


  constructor(private usersService: UsersService, private router: Router) {
    super();
  }

  override onSubmit() {
    if (this.wineForm.valid) {
      let creator = this.wineForm.value as unknown as Wine;
      creator.role = CreateSessionComponent.CREATOR;
      this.usersService.createWine(creator);
      this.router.navigate(['/result']);
    }
  }

  onkeyup(event: Event): void {
    console.log(event);
  }


}
