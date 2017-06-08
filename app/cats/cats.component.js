"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cats_service_1 = require("../cats.service");
var CatsComponent = (function () {
    function CatsComponent(_catsService) {
        this._catsService = _catsService;
    }
    CatsComponent.prototype.ngOnInit = function () {
        this.loadCats();
    };
    CatsComponent.prototype.loadCats = function () {
        var _this = this;
        this._catsService.index().subscribe(function (response) {
            _this.cats = response.json();
        }, function (error_response) {
            console.log(error_response);
        });
    };
    return CatsComponent;
}());
CatsComponent = __decorate([
    core_1.Component({
        selector: 'app-cats',
        templateUrl: './cats.component.html',
        moduleId: module.id,
        styleUrls: ['./cats.component.css']
    }),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsComponent);
exports.CatsComponent = CatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnREFBNEM7QUFRNUMsSUFBYSxhQUFhO0lBR3hCLHVCQUFvQixZQUF3QjtRQUF4QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtJQUM1QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNqQixDQUFDO0lBSUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQ2pDLFVBQUMsUUFBUTtZQUNQLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUMsRUFDRCxVQUFDLGNBQWM7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzdCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVILG9CQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNwQyxDQUFDO3FDQUlpQywwQkFBVztHQUhqQyxhQUFhLENBdUJ6QjtBQXZCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhdHNTZXJ2aWNlfSBmcm9tIFwiLi4vY2F0cy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jYXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhdHMuY29tcG9uZW50Lmh0bWwnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzdHlsZVVybHM6IFsnLi9jYXRzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2F0czpBcnJheTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhdHNTZXJ2aWNlOkNhdHNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRDYXRzKClcbiAgfVxuXG5cblxuICBsb2FkQ2F0cygpIHtcbiAgICB0aGlzLl9jYXRzU2VydmljZS5pbmRleCgpLnN1YnNjcmliZShcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmNhdHMgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICB9LFxuICAgICAgKGVycm9yX3Jlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yX3Jlc3BvbnNlKVxuICAgICAgfVxuICAgIClcbiAgfVxuXG59XG4iXX0=