import {Component, Inject, signal} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatChip, MatChipGrid, MatChipRemove, MatChipRow, MatChipSet} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {redGrapes, whiteGrapes} from "../../../../../public/grapeVarieties/grapes";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-grape-variety-modal',
  standalone: true,
  imports: [
    NgForOf,
    MatChipGrid,
    MatChipRow,
    MatIcon,
    MatChipRemove,
    NgIf,
    MatDialogClose,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatChip,
    MatChipSet,
    NgClass,
    MatTabGroup,
    MatTab
  ],
  templateUrl: './grape-variety-modal.component.html',
  styleUrl: './grape-variety-modal.component.css'
})
export class GrapeVarietyModalComponent {
  redGrapes: string[] = [...redGrapes];
  whiteGrapes: string[] = [...whiteGrapes];
  selectedGrapes = signal<string[]>([]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { selectedGrapes: string[] }) {
    this.selectedGrapes.set(data.selectedGrapes)
  }


  selectGrape(grape: string): void {
    // Add our keyword
    const currentGrapes = this.selectedGrapes();
    if (currentGrapes.includes(grape)) {
      this.selectedGrapes.set(currentGrapes.filter(g => g !== grape));
    } else {
      this.selectedGrapes.set([...currentGrapes, grape]);
    }
  }

  isSelected(grape: string): boolean {
    return this.selectedGrapes().includes(grape);
  }

  trackByFn(index: number, item: string): number {
    return index; // or return item if the items are unique and can be used for tracking
  }

}



