import { Component } from "@angular/core";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: "./layout.component.html",
})
export class LayoutComponent {}
