"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
var react_i18next_1 = require("react-i18next");
var react_router_dom_1 = require("react-router-dom");
var react_hook_form_1 = require("react-hook-form");
var paths_1 = require("../services/router/paths");
var global_1 = require("../services/types/global");
var global_2 = require("../services/constants/global");
var user_1 = require("../services/types/user");
var Section_1 = require("../components/UI/Section/Section");
var Title_1 = require("../components/UI/Title/Title");
var Form_1 = require("../components/UI/Form/Form");
var types_1 = require("../components/UI/Form/types");
var FormField_1 = require("../components/UI/FormField/FormField");
var Input_1 = require("../components/UI/Input/Input");
var Button_1 = require("../components/UI/Button/Button");
var store_1 = require("../services/hooks/store");
var store_2 = require("../services/store");
function UserInfoScreen() {
    var _this = this;
    var _a, _b, _c, _d;
    var _e = react_1.useState(null), response = _e[0], setResponse = _e[1];
    var t = react_i18next_1.useTranslation().t;
    var _f = react_hook_form_1.useForm(), handleSubmit = _f.handleSubmit, control = _f.control, errors = _f.formState.errors;
    var onSubmit = handleSubmit(function (submitData) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, submitData];
    }); }); });
    react_1.useEffect(function () {
        if (Object.keys(errors).length > 0) {
            setResponse({
                status: types_1.EResponseStatuses.error,
                errors: errors
            });
        }
    }, [errors]);
    var currentUser = store_1.selectCurrentUser(store_2.store.getState());
    if (!currentUser) {
        return react_1["default"].createElement(react_router_dom_1.Navigate, { to: paths_1["default"].signin.url, replace: true });
    }
    return (react_1["default"].createElement(Section_1["default"], null,
        react_1["default"].createElement(Title_1["default"], { position: global_1.EnumHorizontalPosition.center }, t('userInfo.title')),
        react_1["default"].createElement(Form_1["default"], { onSubmit: onSubmit, response: response },
            react_1["default"].createElement(FormField_1["default"], null,
                react_1["default"].createElement(react_hook_form_1.Controller, { name: "gender", control: control, defaultValue: user_1.Genders.man, rules: {
                        required: true
                    }, render: function (_a) {
                        var field = _a.field, fieldState = _a.fieldState;
                        return (react_1["default"].createElement(FormField_1["default"], { type: FormField_1.EnumFormFieldType.row },
                            react_1["default"].createElement(Input_1.Input, { name: field.name, type: Input_1.EnumInputType.radio, value: user_1.Genders.man, label: t('form.field.genderOptions.man'), error: fieldState === null || fieldState === void 0 ? void 0 : fieldState.error, onChange: field.onChange, checked: field.value === user_1.Genders.man }),
                            react_1["default"].createElement(Input_1.Input, { name: field.name, type: Input_1.EnumInputType.radio, value: user_1.Genders.woman, label: t('form.field.genderOptions.woman'), error: fieldState === null || fieldState === void 0 ? void 0 : fieldState.error, onChange: field.onChange, checked: field.value === user_1.Genders.woman })));
                    } })),
            react_1["default"].createElement(FormField_1["default"], null,
                react_1["default"].createElement(Input_1.InputControlled, { type: Input_1.EnumInputType.number, value: (_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.age) === null || _a === void 0 ? void 0 : _a.toString(), name: "age", required: true, label: t('form.field.age'), control: control })),
            react_1["default"].createElement(FormField_1["default"], null,
                react_1["default"].createElement(Input_1.InputControlled, { type: Input_1.EnumInputType.number, value: (_b = currentUser === null || currentUser === void 0 ? void 0 : currentUser.height) === null || _b === void 0 ? void 0 : _b.toString(), name: "height", required: true, label: t('form.field.height'), control: control, units: t("units." + global_2.UNITS.sm) })),
            react_1["default"].createElement(FormField_1["default"], null,
                react_1["default"].createElement(Input_1.InputControlled, { type: Input_1.EnumInputType.number, value: (_c = currentUser === null || currentUser === void 0 ? void 0 : currentUser.weight) === null || _c === void 0 ? void 0 : _c.toString(), name: "weight", required: true, label: t('form.field.weight'), control: control, units: t("units." + global_2.UNITS.kg) })),
            react_1["default"].createElement(FormField_1["default"], null,
                react_1["default"].createElement(Input_1.InputControlled, { type: Input_1.EnumInputType.number, value: (_d = currentUser === null || currentUser === void 0 ? void 0 : currentUser.weightGoal) === null || _d === void 0 ? void 0 : _d.toString(), name: "weightGoal", required: true, label: t('form.field.weightGoal'), control: control, units: t("units." + global_2.UNITS.kg) })),
            react_1["default"].createElement(FormField_1["default"], { type: FormField_1.EnumFormFieldType.actions },
                react_1["default"].createElement(Button_1["default"], { type: Button_1.EnumButtonType.submit }, t('userInfo.form.btnSubmit'))))));
}
exports["default"] = UserInfoScreen;
