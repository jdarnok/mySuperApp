import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {AuthComponent} from "./auth/auth.component";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {AuthService} from "./auth.service";
import {Config} from "./config";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        AuthComponent
    ],
    providers: [
        ItemService, AuthService, Config
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
