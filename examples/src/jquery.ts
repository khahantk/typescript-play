export default class Contact{

    constructor(form){
        this.form = form;
    }
    init(){
        this.addEventListener();
    }
    addEventListener(){

        this.form.validate({
            rules: {
                name: {
                    minlength: 3,
                    required: true
                },
                email: {
                    minlength: 3,
                    required: true,
                    email: true
                },
                message: {
                    minlength: 3,
                    required: true
                },
            },
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            errorElement: 'span',
            errorClass: 'help-block',
            errorPlacement: function(error, element) {
                if(element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });
        $('#submitForm').click((event)=>{
            if(this.isValid()){
                this.submit();
            }
        });

    }
    isValid(){
        return this.form.valid();
    }
    submit(){
        $.ajax({
            type: "GET",
            url: '/data.json',
            data: {},
            success: this.handleSubmitSuccess.bind(this),
            dataType: 'json'
        });
    }
    handleSubmitSuccess(response){
        if(response.status){
            $(`<div class="alert alert-success" role="alert">${response.message}</div>`).appendTo('#response');
            this.reset();
        }else{
            $(`<div class="alert alert-warning" role="alert">${response.message}</div>`).appendTo('#response');
        }

    }
    reset(){
        ['#name', '#email', '#message'].map(selector=>{
            $(selector).val('');
        });
    }

}
