import {UserLogin} from './user-login';
import {UserRegister} from './user-register';

export function main() {
    console.log("it work");
    var userLogin = new UserLogin();
    userLogin.validate();
    userLogin.submit();
    userLogin.reset();

    var userRegister = new UserRegister();
    userRegister.validate();
    userRegister.submit();
    userRegister.reset();
}

export function init() {
    console.log('init');
}