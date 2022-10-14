export function authHeader(){
    let token = JSON.parse(localStore.getItem('token'));

    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}