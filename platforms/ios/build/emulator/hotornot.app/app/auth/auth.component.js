"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../auth.service");
var user_1 = require("../user");
var AuthComponent = (function () {
    function AuthComponent(router, _authProvider) {
        this.router = router;
        this._authProvider = _authProvider;
        this.user = new user_1.User();
        this.isLogging = true;
    }
    AuthComponent.prototype.ngOnInit = function () {
        //if (this._tokenService.userSignedIn()) {
        //  this.router.navigate(['cats'])
        //}
    };
    AuthComponent.prototype.submit = function () {
        if (this.isLogging) {
            console.log('dupa');
            var appSettings_1 = require("application-settings");
            this._authProvider.sign_in(this.user).subscribe(function (response) {
                appSettings_1.setString("accessToken", response.headers.get('access-token'));
                appSettings_1.setString("client", response.headers.get('client'));
                appSettings_1.setString("uid", response.headers.get('uid'));
                appSettings_1.setString("expiry", response.headers.get('expiry'));
                appSettings_1.setString("token-type", response.headers.get('token-type'));
            }, function () { });
        }
        else {
            this._authProvider.register(this.user);
        }
    };
    AuthComponent.prototype.toggleLogin = function () {
        this.isLogging = !this.isLogging;
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        moduleId: module.id,
        templateUrl: './auth.component.html',
        styleUrls: ['./auth.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBc0M7QUFDdEMsZ0RBQTRDO0FBQzVDLGdDQUE2QjtBQVE3QixJQUFhLGFBQWE7SUFNeEIsdUJBQW9CLE1BQWEsRUFBUyxhQUEwQjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDbEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsMENBQTBDO1FBQzFDLGtDQUFrQztRQUNsQyxHQUFHO0lBQ0wsQ0FBQztJQUNELDhCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLElBQUksYUFBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQzNDLFVBQUMsUUFBUTtnQkFDUCxhQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO2dCQUMxRSxhQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO2dCQUMvRCxhQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO2dCQUN6RCxhQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO2dCQUMvRCxhQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1lBQ3pFLENBQUMsRUFDRCxjQUFPLENBQUMsQ0FDWCxDQUFBO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBR0QsbUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ2xDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDcEMsQ0FBQztxQ0FPMkIsZUFBTSxFQUF3QiwwQkFBVztHQU56RCxhQUFhLENBdUN6QjtBQXZDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vdXNlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcmVnaXN0ZXInLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyOlVzZXI7XG4gIGlzTG9nZ2luZzpib29sZWFuO1xuICBoYXNFcnJvcnM6Ym9vbGVhbjtcbiAgZXJyb3JNc2dBcnJheTpzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIscHJpdmF0ZSBfYXV0aFByb3ZpZGVyOiBBdXRoU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy5pc0xvZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy9pZiAodGhpcy5fdG9rZW5TZXJ2aWNlLnVzZXJTaWduZWRJbigpKSB7XG4gICAgLy8gIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2F0cyddKVxuICAgIC8vfVxuICB9XG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkdXBhJyk7XG4gICAgICBsZXQgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG4gICAgICB0aGlzLl9hdXRoUHJvdmlkZXIuc2lnbl9pbih0aGlzLnVzZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFjY2Vzc1Rva2VuXCIsIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdhY2Nlc3MtdG9rZW4nKSlcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNsaWVudFwiLCByZXNwb25zZS5oZWFkZXJzLmdldCgnY2xpZW50JykpXG4gICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1aWRcIiwgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ3VpZCcpKVxuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZXhwaXJ5XCIsIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdleHBpcnknKSlcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInRva2VuLXR5cGVcIiwgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ3Rva2VuLXR5cGUnKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgICgpID0+IHt9XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2F1dGhQcm92aWRlci5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgfVxuICB9XG5cblxuICB0b2dnbGVMb2dpbigpIHtcbiAgICB0aGlzLmlzTG9nZ2luZyA9ICF0aGlzLmlzTG9nZ2luZ1xuICB9XG59XG4iXX0=