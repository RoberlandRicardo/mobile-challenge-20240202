import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
    baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
    timeout: 15000,
})

export enum Method {
    GET, 
    POST, 
    PUT, 
    DELETE,
};

export interface RequisitionParams {
    method: Method,
    endpoint: string,
    data?: any,
    headers?: object,
}

const useSendRequisition = () => {

    async function sendRequisition({method, endpoint, data, headers}: RequisitionParams): Promise<AxiosResponse<any,any> | null> {

        var response: AxiosResponse<any,any> | null = null;

        const config: AxiosRequestConfig<any> = {
            headers: {
                ...headers,
            }
        }

        try {
            switch (method) {
                case Method.GET:
                    response = await api.get(endpoint, config)
                break;
            }
        } catch (e: any) {
            response = e.response;
            
        }
       
        return response;
        
    }

    return {
        sendRequisition,
    }
}

export default useSendRequisition;