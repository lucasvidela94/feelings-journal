import { Routes } from "@angular/router";
import { inject } from "@angular/core";
import { map } from "rxjs/operators";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./features/pages/index/index.component"),
  },
  {
    path: "journal",
    loadComponent: () =>
      import("./features/pages/my-journal/my-journal.component"),
  },
  {
    path: "take-a-breath",
    loadComponent: () =>
      import("./features/pages/feelings-form/feelings-form.component"),
  },
];
