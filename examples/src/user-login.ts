module User{
    export class UserLogin extends User{
        validate(){
            console.log('validate - login');
        }
        submit(){
            console.log('submit - login');
        }
        reset(){
            console.log('reset - login');
        }
        
    }
}