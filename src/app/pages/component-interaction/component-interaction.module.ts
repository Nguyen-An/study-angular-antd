import { NgModule } from "@angular/core";
import { ParentListComponent } from "./parent-list/parent-list.component";
import { ChildDetailComponent } from "./parent-list/child-detail/child-detail.component";
import { ComponentInteractionRoutingModule } from "./component-interaction-routing.module";
import { CommonModule } from "@angular/common";
import { TemplateVariavleComponent } from './parent-list/template-variavle/template-variavle.component';

@NgModule({
    imports: [
        ComponentInteractionRoutingModule,
        CommonModule
    ],
    declarations: [
        ParentListComponent,
        ChildDetailComponent,
        TemplateVariavleComponent
    ],
    exports: [
        ParentListComponent,
        ChildDetailComponent
    ],
})
export class ComponentInteractionModule {}