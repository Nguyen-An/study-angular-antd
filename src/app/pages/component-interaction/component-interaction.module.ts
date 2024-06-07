import { NgModule } from "@angular/core";
import { ParentListComponent } from "./parent-list/parent-list.component";
import { ChildDetailComponent } from "./parent-list/child-detail/child-detail.component";
import { ComponentInteractionRoutingModule } from "./component-interaction-routing.module";

@NgModule({
    imports: [
        ComponentInteractionRoutingModule
    ],
    declarations: [
        ParentListComponent,
        ChildDetailComponent
    ],
    exports: [
        ParentListComponent,
        ChildDetailComponent
    ],
})
export class ComponentInteractionModule {}