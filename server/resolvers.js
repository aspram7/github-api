var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var fetchApi = require("node-fetch");
var resolvers = function () {
    return {
        users: function (_a, req) {
            var value = _a.value, per_page = _a.per_page, page = _a.page;
            return __awaiter(_this, void 0, void 0, function () {
                var usersData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, fetchApi("https://api.github.com/search/users?q=" + value + "&per_page=" + per_page + "&page=" + page).then(function (res) { return res.json(); })];
                        case 1:
                            usersData = _b.sent();
                            return [2 /*return*/, usersData];
                    }
                });
            });
        },
        user: function (_a, req) {
            var name = _a.name;
            return __awaiter(_this, void 0, void 0, function () {
                var userData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, fetchApi("https://api.github.com/users/" + name).then(function (res) {
                                return res.json();
                            })];
                        case 1:
                            userData = _b.sent();
                            return [2 /*return*/, userData];
                    }
                });
            });
        },
        userRepos: function (_a, req) {
            var name = _a.name, per_page = _a.per_page, page = _a.page;
            return __awaiter(_this, void 0, void 0, function () {
                var userReposData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, fetchApi("https://api.github.com/users/" + name + "/repos?per_page=" + per_page + "&page=" + page).then(function (res) { return res.json(); })];
                        case 1:
                            userReposData = _b.sent();
                            return [2 /*return*/, userReposData];
                    }
                });
            });
        },
        repos: function (_a, req) {
            var value = _a.value, per_page = _a.per_page, page = _a.page;
            return __awaiter(_this, void 0, void 0, function () {
                var userRepos;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, fetchApi("https://api.github.com/search/repositories?q=" + value + "&per_page=" + per_page + "&page=" + page).then(function (res) { return res.json(); })];
                        case 1:
                            userRepos = _b.sent();
                            return [2 /*return*/, userRepos];
                    }
                });
            });
        }
    };
};
exports.resolvers = resolvers;
