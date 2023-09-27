document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const emailField = userEmail.value
    // console.log(emailField);
    const userPass = document.getElementById('user-pass');
    const passArea = userPass.value;
    // console.log(passArea);
    if(emailField === 'mehedinur637@gmail.com' && passArea === 'mehedinur637'){
       window.location.href = 'bank-inside.html' 
    }
    else{
        alert('invalid password')
    }
})

