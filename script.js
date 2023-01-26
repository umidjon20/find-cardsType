// function repeatStr(str, num){
//   let string =str
   
    
//     console.log(string.repeat(num))

// }
    

// repeatStr('umid ', 4)

function upperFirst(str){
    console.log(str[0].toUpperCase() + str.slice(1))
}

upperFirst("umid")



function getCardNum(cardNum){
  

 if(cardNum.length == 0 ){
        alert('-You entered anything-')
    }else if(cardNum.length > 16 || cardNum.length < 16){
        alert(-'You entered incorrect number-')
    }else if(isNaN(+cardNum)){
        alert('You entered string\n -Please enter the number-')
    }else if(cardNum.slice(0, 4) == '8600'){
        alert(cardNum.slice(0, 4) + ' ' + '****' + '****' + ' ' + cardNum.slice(12, 16) + '\nYour card is -Uzcard-')
    }else if(cardNum.slice(0, 4) == '9860'){
        alert(cardNum.slice(0, 4) + ' ' + '****' + '****' + ' ' + cardNum.slice(12, 16) + '\nYour card is -Humo-')
    }else{
        alert('-This card wasn`t found-')
    }

}

let cardsType = prompt('..- Enter your card number -..')

getCardNum(cardsType)
