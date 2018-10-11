import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestBindingComponent } from './test-binding/test-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
