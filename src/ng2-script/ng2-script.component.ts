import { Component, AfterContentInit, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'ng2-script',
    providers: [
    ],
    template: '<div style="display:none"><ng-content></ng-content></div>'
})
export class Ng2Script {
    @Input('src') src: string;

    constructor(public element: ElementRef) {
    }

    public load(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (this.element.nativeElement.childNodes[0]) {
                let contentSource = this.element.nativeElement.childNodes[0].innerText;
                this.element.nativeElement.innerText = '';
                if (this.src !== undefined && contentSource === '') {
                    let scriptNode = document.createElement('script');
                    scriptNode.setAttribute('type', 'text/javascript');
                    scriptNode.setAttribute('src', this.src);
                    scriptNode.onload = function () {
                        scriptNode.onload = null;
                        resolve(true);
                    };
                    this.element.nativeElement.append(scriptNode);

                } else {
                    eval(contentSource);
                    resolve(true);
                }
            } else {
                reject();
            }
        });
    }
}
