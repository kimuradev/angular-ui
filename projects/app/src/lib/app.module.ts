import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import ButtonComponent from './button/button.component';
import HeaderComponent from './header/header.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, HeaderComponent],
  imports: [],
  exports: [AppComponent],
})
export class AppModule {}
