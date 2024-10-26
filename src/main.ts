import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));




// bootstrapApplication(AppComponent, {
//   providers: [provideHttpClient()],
// }).catch((err) => console.error(err));