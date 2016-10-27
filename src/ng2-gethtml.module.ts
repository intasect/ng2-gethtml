import { NgModule, ModuleWithProviders } from '@angular/core';
import { Ng2GetHTML } from './ng2-gethtml';
import { Ng2Script } from './ng2-script';

export * from './ng2-gethtml';
export * from './ng2-script';

@NgModule({
    declarations: [
        Ng2GetHTML,
        Ng2Script
    ],
    exports: [
        Ng2GetHTML,
        Ng2Script
    ]
})
export class Ng2GetHTMLModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Ng2GetHTMLModule,
            providers: []
        };
    }
}