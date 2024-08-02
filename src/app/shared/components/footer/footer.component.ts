import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-footer",
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  today: number = Date.now();
}
