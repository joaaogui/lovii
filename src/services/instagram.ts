import { AxiosInstance } from 'axios'
import { createClient } from './http'

export default class CheckoutService {
    private http: AxiosInstance
    constructor() {
        this.http = createClient({ baseURL: 'https://api.instagram.com/v1/' })
    }

    async getPhotos() {
        try {
            const { data } = await this.http.get('users/self/media/recent/?access_token=`${}`')
            return data
        } catch (e) {
            throw new Error('Error at getPlans:' + e)
        }
    }
}