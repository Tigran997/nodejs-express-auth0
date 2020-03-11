function AccountValidator(){
   
    this.formFields = [$('#name-tf'), $('#email-tf'), $('#user-tf'), $('#pass-tf')];
    this.controlGroups = [$('#name-cg'), $('#email-cg'), $('#user-cg'), $('#pass-cg')];

    this.alert = $('.modal-form-errors');
    this.alert.modal({ show: false, keyboard: true, backdrop: true });

    this.validateName = function (s){
        return s.length >= 3; 
    }

    this.validatePassword = function (s){
        if ($('#userId').val() && s === ''){
            return true;
        }
        else{
            return s.length >=6;
        }
    }

    this.validateEmail = function (e){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(e);
    }

    this.showErrors = function(a){
        $('.modal-form-errors .modal-body p').text('Please correct the following problems :');
        var ul = $('.modal-form-errors .modal-body ul');
        ul.empty();
        for (var i = 0; i < a.length; i++) ul.append('<li>' + a[i] + '</li>');
        this.alert.modal('show');
    }

}


AccountValidator.prototype.showInvalidEmail = function(){
    this.controlGroups[1].addClass('error');
    this.showErrors(['That email address is already in use.']);
}

AccountValidator.prototype.showInvalidUserName = function (){
    this.controlGroups[2].addClass('error');
    this.showErrors(['That username is already in use.']);
}

AccountValidator.prototype.validateForm = function (){
    var e = [];
    for (var i = 0; i < this.controlGroups.length; i++) this.controlGroups[i].removeClass('error');
    if(this.validateName())
}