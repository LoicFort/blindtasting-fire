import {Component, computed, inject, model, OnInit, signal, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../../core/services/users.service";
import {CreateSessionForm} from "../../models/createSessionForm";
import {Creator} from "../../models/creator";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {
  MatChip,
  MatChipGrid,
  MatChipInput,
  MatChipInputEvent,
  MatChipOption,
  MatChipRow
} from "@angular/material/chips";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {map, Observable, startWith} from "rxjs";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Wine} from "../../models/wine";


@Component({
  selector: 'app-create-session',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatChipInput,
    MatChip,
    MatLabel,
    MatFormField,
    MatIcon,
    MatAutocomplete,
    MatOption,
    AsyncPipe,
    NgIf,
    MatChipOption,
    NgForOf,
    MatChipGrid,
    FormsModule,
    MatChipRow,
  ],
  templateUrl: './create-session.component.html',
  styleUrl: './create-session.component.css'
})
export class CreateSessionComponent {
  private static CREATOR = 'CREATOR';
  protected createSessionForm = new FormGroup<CreateSessionForm>({
    username: new FormControl('', Validators.required),
    sessionId: new FormControl('', Validators.required),
    domain: new FormControl(''),
    bottleName: new FormControl(''),
    vintage: new FormControl(''),
    grapeVariety: new FormControl(''),

  });

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentGrape = model('');
  readonly grapes = signal(['Lemon']);
  readonly allGrapes: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  readonly filteredGrapes = computed(() => {
    const currentFruit = this.currentGrape().toLowerCase();
    return currentFruit
      ? this.allGrapes.filter(grape => grape.toLowerCase().includes(currentFruit))
      : this.allGrapes.slice();
  });

  readonly announcer = inject(LiveAnnouncer);


  constructor(private usersService: UsersService, private router: Router) {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.grapes.update(grapes => [...grapes, value]);
    }

    // Clear the input value
    this.currentGrape.set('');
  }

  remove(fruit: string): void {
    this.grapes.update(grapes => {
      const index = grapes.indexOf(fruit);
      if (index < 0) {
        return grapes;
      }

      grapes.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
      return [...grapes];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.grapes.update(grapes => [...grapes, event.option.viewValue]);
    this.currentGrape.set('');
    event.option.deselect();
  }


  onSubmit(): void {
    if (this.createSessionForm.valid) {
      let creator = this.createSessionForm.value as unknown as Creator;
      creator.role = CreateSessionComponent.CREATOR;
      this.usersService.addUser(creator);
      this.usersService.createWine(creator);
      this.router.navigate(['/result']);
    }

  }
}
