import { NgModule } from "@angular/core";
import { RxJSTemplateComponent } from "./rx-js-template/rx-js-template.component";
import { CommonModule } from "@angular/common";
import { RxjsRoutingModule } from "./rxjs-routing.module";

@NgModule({
    imports: [
        RxjsRoutingModule,
        CommonModule
    ],
    declarations: [
        RxJSTemplateComponent
    ],
    exports: [
        RxJSTemplateComponent
    ],
})
export class RxjsModule {}