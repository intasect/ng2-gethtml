import {NgModule, ModuleWithProviders} from "@angular/core";
import { Ng2GetHTML } from "./src/ng2-gethtml";

@NgModule({
    declarations: [],
    exports: []
})
export class Ng2GetHTMLModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Ng2GetHTMLModule
        };
    }
}