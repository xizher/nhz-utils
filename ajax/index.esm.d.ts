import { AxiosInstance, AxiosRequestHeaders, AxiosRequestConfig } from 'axios';

declare class AjaxAxios {
    private static _defaultAxiosInstance;
    private static setDefaultAxiosInstance;
    private _axiosInstance;
    private _url;
    private _data;
    private _params;
    private _header;
    private _config;
    constructor(axiosInstance?: AxiosInstance);
    mountGet<T>(): Promise<T>;
    mountPost<T>(): Promise<T>;
    setUrl(url: string): this;
    setData(data: object): this;
    setParams(params: object): this;
    setHeader(header: AxiosRequestHeaders): this;
    setConfig(config: AxiosRequestConfig): this;
}
declare function createAxios(instance?: AxiosInstance): AjaxAxios;

export { AjaxAxios, createAxios };
