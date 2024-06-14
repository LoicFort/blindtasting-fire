import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JoinSessionForm} from "../../models/joinSessionForm";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {UsersService} from "../../../core/services/users.service";

@Component({
  selector: 'app-join-session',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './join-session.component.html',
  styleUrl: './join-session.component.css'
})
export class JoinSessionComponent {
  private static GUESSER = 'GUESSER';

  protected joinSessionForm = new FormGroup<JoinSessionForm>({
    sessionId: new FormControl(null as unknown as number, {nonNullable: true}),
    username: new FormControl('', {nonNullable: true}),
  });

  constructor(private router: Router, private usersService: UsersService) {
  }


  onSubmit(): void {
    if (this.joinSessionForm.valid) {
      const user: User = this.joinSessionForm.value as unknown as User;
      user.role = JoinSessionComponent.GUESSER;
      this.usersService.addUser(user);
      console.log('Form Submitted!', user);
      this.router.navigate(['/guess-wine'] ).then(r => console.log("then"))
    }
  }


}
