import { NgModule } from "@angular/core";
import { DirectiveRoutingModule } from "./directive-routing.module";
import { DirectiveTemplateComponent } from "./directive-template/directive-template.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        DirectiveRoutingModule,
        CommonModule
    ],
    declarations: [
        DirectiveTemplateComponent
    ],
    exports: [
        DirectiveTemplateComponent
    ]
})
export class DirectiveModule { }
