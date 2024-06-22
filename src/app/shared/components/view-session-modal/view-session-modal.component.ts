import {Component, inject, model} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";

@Component({
  selector: 'app-view-session-modal',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    FormsModule
  ],
  templateUrl: './view-session-modal.component.html',
  styleUrl: './view-session-modal.component.css'
})
export class ViewSessionModalComponent {
  readonly dialogRef = inject(MatDialogRef<ViewSessionModalComponent>);
  readonly sessionId = model();

  constructor(private formBuilder: FormBuilder) {
  }

  protected cancel() {
    this.dialogRef.close();
  }

}
