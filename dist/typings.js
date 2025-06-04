"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoCooldown = exports.MongoMain = exports.Cooldown = exports.Main = void 0;
const typeorm_1 = require("typeorm");
let Main = class Main extends typeorm_1.BaseEntity {
};
exports.Main = Main;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Main.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: void 0 }),
    __metadata("design:type", String)
], Main.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Main.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Main.prototype, "guild", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Main.prototype, "channel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Main.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Main.prototype, "role", void 0);
exports.Main = Main = __decorate([
    (0, typeorm_1.Entity)()
], Main);
let Cooldown = class Cooldown extends typeorm_1.BaseEntity {
};
exports.Cooldown = Cooldown;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Cooldown.prototype, "command", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Cooldown.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Cooldown.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cooldown.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cooldown.prototype, "guild", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Cooldown.prototype, "channel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Cooldown.prototype, "global", void 0);
exports.Cooldown = Cooldown = __decorate([
    (0, typeorm_1.Entity)()
], Cooldown);
let MongoMain = class MongoMain extends Main {
};
exports.MongoMain = MongoMain;
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", String)
], MongoMain.prototype, "mongoId", void 0);
exports.MongoMain = MongoMain = __decorate([
    (0, typeorm_1.Entity)()
], MongoMain);
let MongoCooldown = class MongoCooldown extends Cooldown {
};
exports.MongoCooldown = MongoCooldown;
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", String)
], MongoCooldown.prototype, "mongoId", void 0);
exports.MongoCooldown = MongoCooldown = __decorate([
    (0, typeorm_1.Entity)()
], MongoCooldown);
