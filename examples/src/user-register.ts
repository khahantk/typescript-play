module User{
    export class UserRegister extends User{
        validate(a: number, b: boolean){
            console.log('validate - register');
            jQuery.ajax({async: false});
            
        }
        submit(){
            console.log('submit -register');
            
        }
        reset(){
            console.log('success - register');
        }
        success(){
            console.log('success - register');
        }
        
}
}
