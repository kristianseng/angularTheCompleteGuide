import { Component } from "@angular/core";


@Component({
    selector: "warningAlert",
    template: `<p> Sorry to inform you but this is the last warning</p>`,
    styles: ["p {color: red}"]
})
export class WarningAlertComponent {

    constructor(){};

    ngInit():void {
    }
}