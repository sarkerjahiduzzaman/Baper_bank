document.getElementById('login-btn').addEventListener('click',function(){
    const getElement=document.getElementById('email');
    const getEmail=getElement.value;
    console.log(getEmail)
    const getElement2=document.getElementById('password');
    const getPassword=getElement2.value;
    if(getEmail=='jahid@gmail.com'&&getPassword=='2451999')
    {
        location.href = "bank.html";
    }
    else 
    {
        alert('Enter an valid email and password')
    }
    getElement.value='';
    getElement2.value='';
})

