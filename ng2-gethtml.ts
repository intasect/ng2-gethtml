import { NgModule, ModuleWithProviders } from "@angular/core";
import { Ng2GetHTML } from "./src/ng2-gethtml";
import { Ng2Script } from "./src/ng2-script";

@NgModule({
    declarations: [
        Ng2GetHTML,
        Ng2Script
    ],
    exports: []
})
export class Ng2GetHTMLModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Ng2GetHTMLModule
        };
    }
}