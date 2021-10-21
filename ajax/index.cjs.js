'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var object = require('../object');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

class AjaxAxios {
    static _defaultAxiosInstance = axios__default["default"].create();
    static setDefaultAxiosInstance(instance) {
        this._defaultAxiosInstance = instance;
    }
    _axiosInstance;
    _url;
    _data;
    _params;
    _header;
    _config;
    constructor(axiosInstance) {
        this._axiosInstance = axiosInstance ?? AjaxAxios._defaultAxiosInstance;
    }
    async mountGet() {
        const config = object.extend({}, this._config, {
            headers: this._header,
            params: this._params,
            data: this._data,
        });
        const res = await this._axiosInstance.get(this._url, config);
        return res.data;
    }
    async mountPost() {
        const config = object.extend({}, this._config, {
            headers: this._header,
            params: this._params,
        });
        const res = await this._axiosInstance.post(this._url, this._data, config);
        return res.data;
    }
    setUrl(url) {
        this._url = url;
        return this;
    }
    setData(data) {
        this._data = data;
        return this;
    }
    setParams(params) {
        this._params = params;
        return this;
    }
    setHeader(header) {
        this._header = header;
        return this;
    }
    setConfig(config) {
        this._config = config;
        return this;
    }
}
function createAxios(instance) {
    return new AjaxAxios(instance);
}

Object.defineProperty(exports, 'axios', {
  enumerable: true,
  get: function () { return axios__default["default"]; }
});
exports.AjaxAxios = AjaxAxios;
exports.createAxios = createAxios;
