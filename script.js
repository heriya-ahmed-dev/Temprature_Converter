
document.getElementById('convert').addEventListener('click',()=>{


let input = parseFloat(document.getElementById('input').value);
let to = document.getElementById('to').value;
let from = document.getElementById('from').value;

let Result = document.getElementById('result')
let celsius
let result

if (isNaN(input)){
    Result.value = 'Please inter number value'
    return
}

if(from == "C"){
    celsius = input
}
else if( from == "F"){
    celsius = (input - 32) * 9/5
}
else if(from == "K"){
    celsius = input - 273
}

if(to == "C"){
    result = celsius
}
else if(to == "F"){
    result = (celsius *9/5)+ 5/9
}
else if(to == "K"){
    result = celsius + 273
}


Result.value = result




})







