import { Route } from '@angular/router';

import { ContentComponent} from './components/content/content.component';
import { DetailComponent } from './components/content/detail/detail.component';
import { ListComponent } from './components/content/list/list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  },
  {
    path: 'shop',
    component: ContentComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'prefix',
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: ':id',
        component: DetailComponent
      }
    ]
  }
];
