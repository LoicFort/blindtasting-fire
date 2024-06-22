import {Component, Input, OnInit} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel, MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";
import {MatChip, MatChipOption, MatChipSet} from "@angular/material/chips";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Wine} from "../../models/wine";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [
    MatAccordion,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    MatExpansionPanelDescription,
    MatChip,
    MatChipSet,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    NgForOf,
    MatIcon,
    NgOptimizedImage,
    MatCardImage,
    MatChipOption,
    NgIf
  ],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent implements OnInit {
  @Input() wine!: Wine;
  @Input() result = false;
  public crown = 'crown.png';

  ngOnInit(): void {
    console.log(this.result);
  }



}
