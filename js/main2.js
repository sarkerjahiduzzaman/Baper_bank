//Bank Page
//Deposite btn add litchener
document.getElementById('deposite-btn').addEventListener('click',function(){
    //find deposite blance
    const getDepoElement=document.getElementById('deposite-blance');
    const depositeBlance=getDepoElement.value;
   // console.log(depositeBlance)
   //add deposite and show deposite div
   const getDepositeTag=document.getElementById('first-dipo-blance');
     const showDepositeBlance=getDepositeTag.innerText;
  // console.log(showDepositeBlance)
   //console.log(parseFloat(depositeBlance)+parseFloat(showDepositeBlance))
   getDepositeTag.innerText=parseFloat(depositeBlance)+parseFloat(showDepositeBlance)
   //get balance tag connect
   const getBalanceTag=document.getElementById('main-blance');
   const getBalance=getBalanceTag.innerText;
   getBalanceTag.innerText=parseFloat(getBalance)+parseFloat(depositeBlance);
   //last empty the deposite input 
   getDepoElement.value='';

})


//withdraw button work
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawTag=document.getElementById('withdra-id');
    const withdrawBalance=withdrawTag.value;
    const withdraDiv=document.getElementById('witheradivtk')
    const withdraDivBalance=withdraDiv.innerText;
     //get balance tag connect
   const getBalanceTag=document.getElementById('main-blance');
   const getBalance=getBalanceTag.innerText;

   if(parseFloat(withdrawBalance)<=parseFloat(getBalance))
   {

    withdraDiv.innerText=parseFloat(withdrawBalance)+parseFloat(withdraDivBalance);
    getBalanceTag.innerText=parseFloat(getBalance)-parseFloat(withdrawBalance);

   }
   else 
   {
    alert('Not enough amount ')
   }
   
   withdrawTag.value='';

})