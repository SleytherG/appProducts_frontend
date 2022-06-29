import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'products',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule )
  },
  {
    path: '**', redirectTo: 'products'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes , {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {}
