module App{
    import UserLogin = User.UserLogin;
    import UserRegister = User.UserRegister;
    export function main(){

        console.log("it work");
        var userLogin = new UserLogin();
        userLogin.validate();
        userLogin.submit();
        userLogin.reset(); 
        jQuery.ajax({})
        
        var userRegister = new UserRegister();
        userRegister.validate();
        userRegister.submit();
        userRegister.reset(); 
       
    }
    
    
    export function init(){
        console.log('init');
    }

}
