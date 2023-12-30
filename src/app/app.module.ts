import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  //bootstrap: [AppComponent],
})
export class AppModule { 
  constructor(private injector:Injector){}
  ngDoBootstrap(){
    /*
Hook for manual bootstrapping of the application instead of using bootstrap array in @NgModule annotation. 
This hook is invoked only when the bootstrap array is empty or not provided.
    */
    const mainApp=createCustomElement(AppComponent,{injector:this.injector});
    customElements.define('main-element',mainApp);

    const testComp=createCustomElement(TestComponent,{injector:this.injector});
    customElements.define('test-element',testComp);
  }
}


