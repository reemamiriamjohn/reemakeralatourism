function validation(){
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var emailcheck =/^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})?$/;
    var phonecheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(emailcheck.test(email)){
      document.getElementById('emailerror').innerHTML= " ";
    }else{
      document.getElementById('emailerror').innerHTML = "** email is invalid **";
        return false;
    }
    if(phonecheck.test(phone)){
      document.getElementById('phoneerror').innerHTML= " ";
    }else{
      document.getElementById('phoneerror').innerHTML = "** Phone Number is invalid **";
        return false;
    }
   }
