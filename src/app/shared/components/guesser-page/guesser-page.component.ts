import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Wine} from "../../models/wine";
import {Router} from "@angular/router";
import {UsersService} from "../../../core/services/users.service";
import {GuesserForm} from "../../models/wineForm";


@Component({
  selector: 'app-guesser-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './guesser-page.component.html',
  styleUrl: './guesser-page.component.css'
})
export class GuesserPageComponent {
  protected guesserForm = new FormGroup<GuesserForm>({
    domain: new FormControl(''),
    bottleName: new FormControl(''),
    vintage: new FormControl(''),
    grapeVariety: new FormControl(''),

  });

  constructor(private router: Router, private usersService: UsersService) {
  }

  onSubmit(): void {
    if (this.guesserForm.valid) {
      this.usersService!.addGuess(this.guesserForm.value as unknown as Wine);
      this.router!.navigate(['/result']);
    }


  }
}
