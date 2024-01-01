const tokenKey = 'token';

const setToken=(token)=>{
    localStorage.setItem(tokenKey,token);
}

const getToken= () =>{
    return localStorage.getItem(tokenKey);
}

const removeToken = ()=>{
    return localStorage.removeItem(tokenKey);
}

const isAuthenticated = ()=>{
    if(localStorage.getItem(tokenKey) !== 'null' && localStorage.getItem(tokenKey) != null)
        return true;
    return false;
}

export {setToken,getToken,removeToken,isAuthenticated};