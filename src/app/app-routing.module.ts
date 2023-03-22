import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ConsultoraComponent } from "./consultora/consultora.component";
import { QuienesComponent } from "./quienes/quienes.component";
import { TecnologiaComponent } from "./tecnologia/tecnologia.component";

const appRoutes: Routes = [
{ path: 'quienes', component: QuienesComponent },
{ path: 'tecno', component: TecnologiaComponent },
{ path: 'consul', component: ConsultoraComponent },
{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
{path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
{path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)},
{path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}

];

@NgModule({
imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
exports: [RouterModule]
})
export class ApproutingModule {

}