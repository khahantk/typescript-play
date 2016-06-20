namespace App{
    import UserLogin = User.UserLogin;
    import UserRegister = User.UserRegister;
    
    export function main(){

        console.log("main execute - it work");
        var userLogin = new UserLogin();
        userLogin.validate();
        userLogin.submit();
        userLogin.reset(); 
        
        
        var userRegister = new UserRegister();
        //userRegister.validate();
        userRegister.submit();
        userRegister.reset(); 
       
    }
    
    export function init(){
        console.log('init app');
    }

}
App.init();
App.main();
