import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h2>ng2-gethtml example</h2>
            <ng2-gethtml>
                <div id="test">
                    This will be change to 123.
                </div>
                <ng2-script>
                    document.getElementById("test").style.color = "red";
                </ng2-script>
                <ng2-script src="http://code.jquery.com/jquery-3.1.1.js"></ng2-script>
                <ng2-script>
                    console.log(2)
                </ng2-script>
                <ng2-script>
                    $("#test").html("123");
                </ng2-script>
            </ng2-gethtml>
        </div>
    `
})
export class AppComponent {
    constructor() {
    }
}