import { RouterModule, Routes } from "@angular/router";
import { RxJSTemplateComponent } from "./rx-js-template/rx-js-template.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: RxJSTemplateComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxjsRoutingModule {}