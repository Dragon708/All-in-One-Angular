import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { DockModule } from 'primeng/dock';

import { AppRoutingModule } from './app-routing.module';
// Componentes
import { AppComponent } from './app.component';
import { CitasComponent } from './components/citas/citas.component';
import { InputCitaComponent } from './components/citas/inputCita/inputCita.component';
import { ListComponent } from './components/citas/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { AnimateModule } from 'primeng/animate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClimaAppComponent } from './components/clima-app/clima-app.component';
import { DashboardComponent } from './components/clima-app/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { PianoAppComponent } from './components/piano-app/piano-app.component';
import { ConvertAppComponent } from './components/convert-app/convert-app.component';
import { ConvertidorComponent } from './components/convert-app/convertidor/convertidor.component';
import { NoticiasApiComponent } from './components/noticias-api/noticias-api.component';
import { FormularioComponent } from './components/noticias-api/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/noticias-api/listado-noticias/listado-noticias.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    CitasComponent,
    InputCitaComponent,
    ListComponent,
    ClimaAppComponent,
    DashboardComponent,
    PianoAppComponent,
    ConvertAppComponent,
    ConvertidorComponent,
    NoticiasApiComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AnimateModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    AccordionModule,
    SidebarModule,
    TooltipModule,
    DockModule,
    ToastModule,
    MessagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
