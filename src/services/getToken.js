let url = 'http://localhost:3333/login';


export const getToken = (e, p) => {
    let payload = {
        "email": e,
        "password": p
    }
    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => response.json())
        .then(res => res.accessToken)
}