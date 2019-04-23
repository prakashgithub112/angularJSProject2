import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routerConfig';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CoinService } from './coin.service';
import {HttpClientModule} from '@angular/common/http';
import { OverAllDemandAgeinigComponent } from './components/overalldemandageinig/overalldemandageinig.component';
import { OfferJoinedComponent } from './components/offerjoined/offerjoined.component';
import { DemandExternalSupplyComponent } from './components/demandexternalsupply/demandexternalsupply.component';
import { NewJoinersLastWeekComponent } from './components/newjoinerslastweek/newjoinerslastweek.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    OverAllDemandAgeinigComponent,
    OfferJoinedComponent,    
    DemandExternalSupplyComponent,
    NewJoinersLastWeekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	RouterModule,
	RouterModule.forRoot(appRoutes),
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
