import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Feeling } from "../../../shared/models/feel-boxes";

@Component({
  selector: "app-feeling-box",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./feeling-boxes.component.html",
})
export class FeelingBoxesComponent {
  @Input() feeling!: Feeling;
}
