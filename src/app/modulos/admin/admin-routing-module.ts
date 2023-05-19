import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CreateproductoComponent} from "./productos/createproducto/createproducto.component";
import {ListproductoComponent} from "./productos/listproducto/listproducto.component";
import {UpdateproductoComponent} from "./productos/updateproducto/updateproducto.component";
import {DetailproductoComponent} from "./productos/detailproducto/detailproducto.component";
import {InfoproductoComponent} from "./productos/infoproducto/infoproducto.component";

const routes: Routes = [{
  path: 'admin',
  children: [
    { path: 'info',  component: InfoproductoComponent    },
    { path: 'listproducto',  component: ListproductoComponent    },
    { path: 'createproducto',  component: CreateproductoComponent    },
    { path: 'updateproducto/',  component: UpdateproductoComponent    },
    { path: 'detailproducto/',  component: DetailproductoComponent    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
