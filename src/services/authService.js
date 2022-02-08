import axios from 'axios';
import React from 'react';

export default class AuthService{
    async setToken(token){
        axios.interceptors.request.use(
            config => {
              config.headers.authorization = `Bearer ${token}`;
              return config
            }
            )
    }
}
