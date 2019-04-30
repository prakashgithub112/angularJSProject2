// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { OverAllDemandAgeinigComponent } from './components/overalldemandageinig/overalldemandageinig.component';
import { OfferJoinedComponent } from './components/offerjoined/offerjoined.component';
import { DemandExternalSupplyComponent } from './components/demandexternalsupply/demandexternalsupply.component';
import { NewJoinersLastWeekComponent } from './components/newjoinerslastweek/newjoinerslastweek.component';

export const appRoutes: Routes = [
  { path: 'create/:title2variable/:title5variable', 
    component: CreateComponent 
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: 'index',
    component: IndexComponent
  },
  { path: 'overalldemandageinig/:title2variable',
    component: OverAllDemandAgeinigComponent
  },
  { path: 'offerjoined',
    component: OfferJoinedComponent
  },
  { path: 'demandexternalsupply',
    component: DemandExternalSupplyComponent
  },
  { path: 'newjoinerslastweek',
    component: NewJoinersLastWeekComponent
  }
];