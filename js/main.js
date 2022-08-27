


document.getElementById('login-btn').addEventListener('click',function(){
     const getElement=document.getElementById('email');
    const getEmail=getElement.value;
    console.log(getEmail)
     const getElement2=document.getElementById('password');
     const getPassword=getElement2.value;

    

     function datafetch(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=>display1(data))
    
        
        }
        datafetch()
        
        function display1(data){
            for(const email of data)
            {

               // console.log(email.email)
            
                if(getEmail==email.email && getPassword=='2451999')
                {
                    console.log(email)
                   location.href = "bank.html";
                   break;
               }
               
           
        
        }
       /* else 
        {
            alert('Enter an valid email and password')
        }*/

        
    

    getElement.value='';
    getElement2.value='';
 }


})