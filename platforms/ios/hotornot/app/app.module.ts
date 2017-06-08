import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {AuthComponent} from "./auth/auth.component";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {AuthService} from "./auth.service";
import {Config} from "./config";
import {CatsComponent} from "./cats/cats.component";
import {CatItemComponent} from "./cats/cat-item/cat-item.component";
import {CatsService} from "./cats.service";

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
        AuthComponent,
        CatsComponent,
        CatItemComponent
    ],
    providers: [
        AuthService, Config, CatsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
