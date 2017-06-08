"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var auth_component_1 = require("./auth/auth.component");
var forms_1 = require("nativescript-angular/forms");
var auth_service_1 = require("./auth.service");
var config_1 = require("./config");
var cats_component_1 = require("./cats/cats.component");
var cat_item_component_1 = require("./cats/cat-item/cat-item.component");
var cats_service_1 = require("./cats.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            forms_1.NativeScriptFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            auth_component_1.AuthComponent,
            cats_component_1.CatsComponent,
            cat_item_component_1.CatItemComponent
        ],
        providers: [
            auth_service_1.AuthService, config_1.Config, cats_service_1.CatsService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msa0RBQWlFO0FBQ2pFLHNEQUFxRTtBQUNyRSx3REFBb0Q7QUFDcEQsb0RBQW1FO0FBQ25FLCtDQUEyQztBQUMzQyxtQ0FBZ0M7QUFDaEMsd0RBQW9EO0FBQ3BELHlFQUFvRTtBQUNwRSwrQ0FBMkM7QUEwQjNDLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQXhCckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiw4QkFBZ0I7WUFDaEIsNkJBQXNCO1lBQ3RCLGlDQUF3QjtZQUN4QiwrQkFBdUI7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLDhCQUFhO1lBQ2IsOEJBQWE7WUFDYixxQ0FBZ0I7U0FDbkI7UUFDRCxTQUFTLEVBQUU7WUFDUCwwQkFBVyxFQUFFLGVBQU0sRUFBRSwwQkFBVztTQUNuQztRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0F1dGhDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aC5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQge0NhdHNDb21wb25lbnR9IGZyb20gXCIuL2NhdHMvY2F0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2F0SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vY2F0cy9jYXQtaXRlbS9jYXQtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2F0c1NlcnZpY2V9IGZyb20gXCIuL2NhdHMuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBBdXRoQ29tcG9uZW50LFxuICAgICAgICBDYXRzQ29tcG9uZW50LFxuICAgICAgICBDYXRJdGVtQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aFNlcnZpY2UsIENvbmZpZywgQ2F0c1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19