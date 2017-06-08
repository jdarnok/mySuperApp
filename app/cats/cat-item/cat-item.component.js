"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cats_service_1 = require("../../cats.service");
var CatItemComponent = (function () {
    function CatItemComponent(_catsService) {
        this._catsService = _catsService;
        this.catVoted = new core_1.EventEmitter();
    }
    CatItemComponent.prototype.ngOnInit = function () {
    };
    CatItemComponent.prototype.vote = function (id) {
        this.catVoted.emit(id);
    };
    return CatItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CatItemComponent.prototype, "catUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatItemComponent.prototype, "catId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatItemComponent.prototype, "votable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatItemComponent.prototype, "rating", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CatItemComponent.prototype, "catVoted", void 0);
CatItemComponent = __decorate([
    core_1.Component({
        selector: 'app-cat-item',
        templateUrl: './cat-item.component.html',
        moduleId: module.id,
        styleUrls: ['./cat-item.component.css']
    }),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatItemComponent);
exports.CatItemComponent = CatItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2F0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBQy9FLG1EQUErQztBQVEvQyxJQUFhLGdCQUFnQjtJQU0zQiwwQkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFEbkMsYUFBUSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBQ1MsQ0FBQztJQUVsRCxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxFQUFFO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFeEIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFkVTtJQUFSLFlBQUssRUFBRTs7Z0RBQWdCO0FBQ2Y7SUFBUixZQUFLLEVBQUU7OytDQUFlO0FBQ2Q7SUFBUixZQUFLLEVBQUU7O2lEQUFrQjtBQUNqQjtJQUFSLFlBQUssRUFBRTs7Z0RBQWdCO0FBQ2Q7SUFBVCxhQUFNLEVBQUU7O2tEQUErQjtBQUw3QixnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBQ3hDLENBQUM7cUNBT2tDLDBCQUFXO0dBTmxDLGdCQUFnQixDQWU1QjtBQWZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2F0c1NlcnZpY2V9IGZyb20gXCIuLi8uLi9jYXRzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNhdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc3R5bGVVcmxzOiBbJy4vY2F0LWl0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjYXRVcmw6IHN0cmluZztcbiAgQElucHV0KCkgY2F0SWQ6IG51bWJlcjtcbiAgQElucHV0KCkgdm90YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcmF0aW5nOiBudW1iZXI7XG4gIEBPdXRwdXQoKSBjYXRWb3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2F0c1NlcnZpY2U6IENhdHNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHZvdGUoaWQpIHtcbiAgICB0aGlzLmNhdFZvdGVkLmVtaXQoaWQpXG5cbiAgfVxufVxuIl19