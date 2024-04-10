import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlashcardsLocalFacade } from '@flashcards-app/flashcards-local-data';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // { provide: FlashcardsLocalFacade, useValue: FlashcardsLocalFacade },
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
};
