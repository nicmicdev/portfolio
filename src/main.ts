import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// FILTER PROJECTS AND CLIENT WORK

function showProjects() {
        console.log('Showing projects');
}
