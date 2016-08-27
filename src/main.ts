import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS, ConnectionBackend } from '@angular/http';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    ConnectionBackend
])
.catch(err => console.error(err));;
