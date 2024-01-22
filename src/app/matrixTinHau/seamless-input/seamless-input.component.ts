import { Component, ContentChild, HostBinding, ViewEncapsulation } from "@angular/core";
import { NgControl } from "@angular/forms";

@Component({
  selector: "seamless-input",
  template: "<ng-content select='input'></ng-content>",
  styleUrls: ["./seamless-input.style.less"],
  encapsulation: ViewEncapsulation.None
})
export class SeamlessInputComponent {
  @ContentChild(NgControl)
  private readonly control?: NgControl;

  @HostBinding("attr.data-value")
  get value(): string {
    return String(this.control && this.control.value);
      }


      tryki () {

        console.log(this.control);
      
      }
}