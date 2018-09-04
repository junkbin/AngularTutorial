import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AppComponent],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const appComponent = createCustomElement(AppComponent, {injector});
    customElements.define('app-root', appComponent);
  }

  ngDoBootstrap() {}
}
