import { Component } from "@angular/core";
import { FeelingBoxesComponent } from "../../../core/components/feeling-boxes/feeling-boxes.component";
import { Feeling } from "../../../shared/models/feel-boxes";
import { NgFor } from "@angular/common";
import { feelings } from "../../../shared/models/mock-feels";

@Component({
  selector: "app-my-journal",
  standalone: true,
  imports: [FeelingBoxesComponent, NgFor],
  templateUrl: "./my-journal.component.html",
})
export default class MyJournalComponent {
  feels: Feeling[] = feelings;
}
