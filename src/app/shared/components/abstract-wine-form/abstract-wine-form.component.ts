import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton, MatIconButton } from "@angular/material/button";
import {
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDateRangePicker,
  MatMultiYearView
} from "@angular/material/datepicker";
import { MatFormField, MatLabel, MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { CreateSessionForm } from "../../models/createSessionForm";
import { MatDialog } from "@angular/material/dialog";
import { GrapeVarietyModalComponent } from "../grape-variety-modal/grape-variety-modal.component";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatTooltip } from "@angular/material/tooltip";


@Component({
  selector: 'app-abstract-wine-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatButton,
    MatDateRangePicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatMultiYearView,
    MatFormField,
    MatIconButton,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatIcon,
    MatTooltip,
    MatSuffix
  ],
  templateUrl: './abstract-wine-form.component.html',
  styleUrl: './abstract-wine-form.component.css'
})
export abstract class AbstractWineFormComponent {
  protected wineForm = new FormGroup<CreateSessionForm>({
    username: new FormControl('', Validators.required),
    sessionId: new FormControl('', Validators.required),
    domain: new FormControl(''),
    bottleName: new FormControl(''),
    vintage: new FormControl('' as unknown as number),
    grapeVariety: new FormControl([]),
  });

  title: string = '';
  submitButtonMessage: string = '';

  readonly dialog = inject(MatDialog);
  selectedGrapes: string[] = [];


  openGrapesModal(): void {
    const dialogRef = this.dialog.open(GrapeVarietyModalComponent, {
      data: { selectedGrapes: this.selectedGrapes }

    }
    )
      ;

    dialogRef.afterClosed().subscribe(result => {

      if (result !== undefined) {
        this.selectedGrapes = [];
        this.selectedGrapes.push(...result);
        this.wineForm.controls.grapeVariety.setValue([]);
        this.wineForm.controls.grapeVariety.setValue(this.selectedGrapes);
      }
    });

  }


  protected constructor() {
  }


  abstract onSubmit(): void;

}
