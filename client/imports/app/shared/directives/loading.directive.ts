import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { SpinnerComponent } from '../components/spinner.component';

@Directive({
  selector: '[loading]',
})
export class LoadingDirective {
  private hasView = false;
  private loaderComponent;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  @Input() set loading(condition: boolean) {
    this.viewContainer.clear();

    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition) {
      this.hasView = false;
      const cFactory = this.componentFactoryResolver.resolveComponentFactory(
        SpinnerComponent);
      const cRef: ComponentRef<SpinnerComponent> = this.viewContainer.createComponent(
        cFactory);

      this.loaderComponent = <SpinnerComponent> cRef.instance;
    }
  }
}
