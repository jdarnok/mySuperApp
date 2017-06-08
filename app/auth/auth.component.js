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
        var _this = this;
        if (this.isLogging) {
            console.log('dupa');
            var appSettings_1 = require("application-settings");
            this._authProvider.sign_in(this.user).subscribe(function (response) {
                appSettings_1.setString("accessToken", response.headers.get('access-token'));
                appSettings_1.setString("client", response.headers.get('client'));
                appSettings_1.setString("uid", response.headers.get('uid'));
                appSettings_1.setString("expiry", response.headers.get('expiry'));
                appSettings_1.setString("token-type", response.headers.get('token-type'));
                _this.router.navigate(['cats']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBc0M7QUFDdEMsZ0RBQTRDO0FBQzVDLGdDQUE2QjtBQVE3QixJQUFhLGFBQWE7SUFNeEIsdUJBQW9CLE1BQWEsRUFBUyxhQUEwQjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDbEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsMENBQTBDO1FBQzFDLGtDQUFrQztRQUNsQyxHQUFHO0lBQ0wsQ0FBQztJQUNELDhCQUFNLEdBQU47UUFBQSxpQkFrQkM7UUFqQkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLGFBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUMzQyxVQUFDLFFBQVE7Z0JBQ1AsYUFBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtnQkFDMUUsYUFBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtnQkFDL0QsYUFBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtnQkFDekQsYUFBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtnQkFDL0QsYUFBVyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtnQkFDdkUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1lBQ2hDLENBQUMsRUFDRCxjQUFPLENBQUMsQ0FDWCxDQUFBO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBR0QsbUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ2xDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDcEMsQ0FBQztxQ0FPMkIsZUFBTSxFQUF3QiwwQkFBVztHQU56RCxhQUFhLENBd0N6QjtBQXhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vdXNlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcmVnaXN0ZXInLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyOlVzZXI7XG4gIGlzTG9nZ2luZzpib29sZWFuO1xuICBoYXNFcnJvcnM6Ym9vbGVhbjtcbiAgZXJyb3JNc2dBcnJheTpzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIscHJpdmF0ZSBfYXV0aFByb3ZpZGVyOiBBdXRoU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy5pc0xvZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy9pZiAodGhpcy5fdG9rZW5TZXJ2aWNlLnVzZXJTaWduZWRJbigpKSB7XG4gICAgLy8gIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2F0cyddKVxuICAgIC8vfVxuICB9XG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkdXBhJyk7XG4gICAgICBsZXQgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG4gICAgICB0aGlzLl9hdXRoUHJvdmlkZXIuc2lnbl9pbih0aGlzLnVzZXIpLnN1YnNjcmliZShcbiAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImFjY2Vzc1Rva2VuXCIsIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdhY2Nlc3MtdG9rZW4nKSlcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNsaWVudFwiLCByZXNwb25zZS5oZWFkZXJzLmdldCgnY2xpZW50JykpXG4gICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1aWRcIiwgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ3VpZCcpKVxuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZXhwaXJ5XCIsIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdleHBpcnknKSlcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInRva2VuLXR5cGVcIiwgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ3Rva2VuLXR5cGUnKSlcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY2F0cyddKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXV0aFByb3ZpZGVyLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICB9XG4gIH1cblxuXG4gIHRvZ2dsZUxvZ2luKCkge1xuICAgIHRoaXMuaXNMb2dnaW5nID0gIXRoaXMuaXNMb2dnaW5nXG4gIH1cbn1cbiJdfQ==