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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var app_1 = require("../../app");
var globals_1 = require("@jest/globals");
(0, globals_1.describe)('Unit test for app handler', function () {
    var _this = this;
    (0, globals_1.it)('verifies successful response', function () { return __awaiter(_this, void 0, void 0, function () {
        var event, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event = {
                        httpMethod: 'get',
                        body: '',
                        headers: {},
                        isBase64Encoded: false,
                        multiValueHeaders: {},
                        multiValueQueryStringParameters: {},
                        path: '/hello',
                        pathParameters: {},
                        queryStringParameters: {},
                        requestContext: {
                            accountId: '123456789012',
                            apiId: '1234',
                            authorizer: {},
                            httpMethod: 'get',
                            identity: {
                                accessKey: '',
                                accountId: '',
                                apiKey: '',
                                apiKeyId: '',
                                caller: '',
                                clientCert: {
                                    clientCertPem: '',
                                    issuerDN: '',
                                    serialNumber: '',
                                    subjectDN: '',
                                    validity: { notAfter: '', notBefore: '' }
                                },
                                cognitoAuthenticationProvider: '',
                                cognitoAuthenticationType: '',
                                cognitoIdentityId: '',
                                cognitoIdentityPoolId: '',
                                principalOrgId: '',
                                sourceIp: '',
                                user: '',
                                userAgent: '',
                                userArn: ''
                            },
                            path: '/hello',
                            protocol: 'HTTP/1.1',
                            requestId: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
                            requestTimeEpoch: 1428582896000,
                            resourceId: '123456',
                            resourcePath: '/hello',
                            stage: 'dev'
                        },
                        resource: '',
                        stageVariables: {}
                    };
                    return [4 /*yield*/, (0, app_1.lambdaHandler)(event)];
                case 1:
                    result = _a.sent();
                    (0, globals_1.expect)(result.statusCode).toEqual(200);
                    (0, globals_1.expect)(result.body).toEqual(JSON.stringify({
                        message: 'hello world'
                    }));
                    return [2 /*return*/];
            }
        });
    }); });
});
