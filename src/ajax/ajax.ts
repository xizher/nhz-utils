import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { extend } from '../object'

export class AjaxAxios {

  private static _defaultAxiosInstance : AxiosInstance = axios.create()

  private static setDefaultAxiosInstance (instance: AxiosInstance) : void {
    this._defaultAxiosInstance = instance
  }

  private _axiosInstance : AxiosInstance

  private _url: string

  private _data: object

  private _params: object

  private _header: AxiosRequestHeaders

  private _config: AxiosRequestConfig

  constructor (axiosInstance?: AxiosInstance) {
    this._axiosInstance = axiosInstance ?? AjaxAxios._defaultAxiosInstance
  }

  public async mountGet<T> () : Promise<T> {
    const config = extend<AxiosRequestConfig, AxiosRequestConfig>({}, this._config, {
      headers: this._header,
      params: this._params,
      data: this._data,
    })
    const res = await this._axiosInstance.get<T>(this._url, config)
    return res.data
  }

  public async mountPost<T> () : Promise<T> {
    const config = extend<AxiosRequestConfig, AxiosRequestConfig>({}, this._config, {
      headers: this._header,
      params: this._params,
    })
    const res = await this._axiosInstance.post<T>(this._url, this._data, config)
    return res.data
  }

  public setUrl (url: string) : this {
    this._url = url
    return this
  }

  public setData (data: object) : this {
    this._data = data
    return this
  }

  public setParams (params: object) : this {
    this._params = params
    return this
  }

  public setHeader (header: AxiosRequestHeaders) : this {
    this._header = header
    return this
  }

  public setConfig (config: AxiosRequestConfig) : this {
    this._config = config
    return this
  }

}

export function createAxios (instance?: AxiosInstance) : AjaxAxios {
  return new AjaxAxios(instance)
}
