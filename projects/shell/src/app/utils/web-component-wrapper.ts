import { loadRemoteModule } from "@angular-architects/module-federation";
import { WebComponentWrapperOptions } from "@angular-architects/module-federation-tools";
import { AfterContentInit, Component, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    template: '<div #vc></div>',
})
export class WebComponentWrapper implements AfterContentInit {
    @ViewChild('vc', { read: ElementRef, static: true }) vc: ElementRef;

    constructor(private route: ActivatedRoute) { }

    async ngAfterContentInit() {
        const options = this.route.snapshot.data as WebComponentWrapperOptions;

        try {
            await loadRemoteModule(options);

            const element = document.createElement(options.elementName);
            element.setAttribute('message', 'test');
            (this.vc.nativeElement as HTMLElement).appendChild(element);

        } catch (error) {
            console.log(error);
        }
    }
}