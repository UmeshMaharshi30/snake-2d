import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { GameAnimationComponent } from './components/game-animation/game-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    GameInfoComponent,
    GameAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
