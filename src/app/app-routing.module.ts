import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ChuckComponent } from './component/chuck/chuck.component';
import { EvenRefComponent } from './even-ref/even-ref.component';
import { FourOrFourComponent } from './four-or-four/four-or-four.component';
import { HomeComponent } from './home/home.component';
import { PColorComponent } from './p-color/p-color.component';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "Calculadora", component: CalculadoraComponent},
  {path : "Four-or-Four", component: FourOrFourComponent},
  {path : "P-color", component: PColorComponent},
  {path : "P-color", component: EvenRefComponent},
  {path : "Chuck", component: ChuckComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
