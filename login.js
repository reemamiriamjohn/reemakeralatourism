function validation(){
    var email = document.getElementById('email').value;
    var emailcheck =/^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})?$/;
    if(emailcheck.test(email)){
      document.getElementById('emailerror').innerHTML= " ";
    }else{
      document.getElementById('emailerror').innerHTML = "** email is invalid **";
        return false;
    }
    }