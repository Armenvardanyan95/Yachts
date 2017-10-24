import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatToolbarModule, MatExpansionModule, MatButtonModule,
  MatIconModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrewManagementComponent } from './pages/crew-management/crew-management.component';
import { IsmIspsComponent } from './pages/ism-isps/ism-isps.component';
import { LuxuryComponent } from './pages/luxury/luxury.component';
import { ConfidentialityComponent } from './pages/confidentiality/confidentiality.component';
import { RefitComponent } from './pages/refit/refit.component';
import { TechnicalSupportComponent } from './pages/technical-support/technical-support.component';
import { FuelAndDockageComponent } from './pages/fuel-and-dockage/fuel-and-dockage.component';
import { ProcurementComponent } from './pages/procurement/procurement.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'crew-management', component: CrewManagementComponent},
  {path: 'ism-and-isms', component: IsmIspsComponent},
  {path: 'luxury', component: LuxuryComponent},
  {path: 'confidentiality', component: ConfidentialityComponent},
  {path: 'refit', component: RefitComponent},
  {path: 'technical-support', component: TechnicalSupportComponent},
  {path: 'fuel-and-dockage', component: FuelAndDockageComponent},
  {path: 'procurement-and-services', component: ProcurementComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CrewManagementComponent,
    IsmIspsComponent,
    LuxuryComponent,
    ConfidentialityComponent,
    RefitComponent,
    TechnicalSupportComponent,
    FuelAndDockageComponent,
    ProcurementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
