import { RouterModule, Routes } from "@angular/router";
import { ParentListComponent } from "./parent-list/parent-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: ParentListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentInteractionRoutingModule {}