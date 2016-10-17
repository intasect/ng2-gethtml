import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

import { Ng2Script } from '../ng2-script';

@Component({
    selector: 'ng2-gethtml',
    entryComponents: [Ng2Script],
    providers: [
    ],
    template: `
        <ng-content></ng-content>
    `
})
export class Ng2GetHTML implements AfterContentInit{
    @ContentChildren(Ng2Script) childrens: QueryList<Ng2Script>;

    constructor() {
    }

    ngAfterContentInit() {
        let result: Promise<boolean> = Promise.resolve(true);
        this.childrens.forEach((children: Ng2Script) => {
            result = result.then(() => {
                return children.load();
            });
        });
    }
}
