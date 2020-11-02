import axios from 'axios'

export const createClient = (options = {}) => axios.create(options)

export default createClient()