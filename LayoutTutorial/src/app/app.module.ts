import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes, appComponents} from './app-routes';
import { SafePipe } from './common/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    appComponents,
    SafePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
