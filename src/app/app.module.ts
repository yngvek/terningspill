import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TerningspillModule } from './terningspill/terningspill.module';
import { TerningspillComponent } from './terningspill/terningspill.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'terningspill', component: TerningspillComponent },
      { path: '', redirectTo: 'terningspill', pathMatch: 'full'},
      { path: '**', redirectTo: 'terningspill', pathMatch: 'full'}
  ]),
    TerningspillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
