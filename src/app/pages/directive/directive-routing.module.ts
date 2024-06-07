import { RouterModule, Routes } from "@angular/router";
import { DirectiveTemplateComponent } from "./directive-template/directive-template.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', component: DirectiveTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule { }
