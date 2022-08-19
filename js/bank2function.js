function inputMoney(inputid){
    const getElement=document.getElementById(inputid);
    const getBlance=getElement.value;
    const getBlanceFloat=parseFloat(getBlance)
    getElement.value='';
    return getBlanceFloat;
    

}
function getTextMoney(textid){
    const getElement=document.getElementById(textid);
    const getBalance=getElement.innerText;
    const getBlanceFloat=parseFloat(getBalance);
    return getBlanceFloat;

}
function setBalance(textid,balance){
    const getElement=document.getElementById(textid);
    getElement.innerText=balance;
}


document.getElementById('deposite-btn').addEventListener('click',function(){
    const getMoney=inputMoney('deposite-blance');
    const depositeBlance=getTextMoney('first-dipo-blance');
    const getMainBlance=getTextMoney('main-blance');
    const addBlance=getMoney+depositeBlance;
    const mainBalance=getMoney+getMainBlance;
    console.log(addBlance)
    setBalance('first-dipo-blance',addBlance);
    setBalance('main-blance',mainBalance);
})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const getMoney=inputMoney('withdra-id');
    const depositeBlance=getTextMoney('witheradivtk');
    const getMainBlance=getTextMoney('main-blance');
   if(getMoney<=getMainBlance)
   {
    const addBlance=getMoney+depositeBlance;
    const mainBalance=getMainBlance-getMoney;
    setBalance('witheradivtk',addBlance);
    setBalance('main-blance',mainBalance);
   }
   else{
    alert('Not enough Money')
   }

    console.log(getMoney)
})