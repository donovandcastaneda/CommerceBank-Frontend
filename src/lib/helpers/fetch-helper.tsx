

const baseURL = 'http://localhost:8080';

const defaultHeaders = {
    'Content-Type': 'applicaition/json'
};

export const request = (method: string, url: any, data: any) => {
    const body = data ? JSON.stringify(data): undefined;

    const fullURL = `${baseURL}${url}`;

    const options = {
        method: method,
        headers: defaultHeaders,
        body:body,
    }

    if(method.toUpperCase() == 'GET'){
        delete options.body
    }

    return fetch (fullURL,options)
    .then(response => {
        if(!response.ok){
            throw new Error(`Network response was not ok: ${response.statusText}`)
        }
        return response.json()
    })
    .catch(error => {
        console.error('There was a problem with yuor fetch operation', error)
        throw error
    });
};