import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-feelings-form",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./feelings-form.component.html",
})
export default class FeelingsFormComponent {
  innerThought = "";
  sentiment = "";

  getSentiment(form: NgForm, event: Event) {
    event.preventDefault();
    if (form.valid) {
      const date = new Date();
      const fullThought = {
        date: date,
        description: this.innerThought,
        feeling: this.sentiment,
      };
      console.log("Pensamiento completo:", fullThought);
    }
  }
}
