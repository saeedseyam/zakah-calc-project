let select = document.getElementById('select');
let error = document.getElementById('error');
let number = document.getElementById('number');
let zakahResult = document.getElementById('zakah-result');
let items = document.getElementById('items');
let gold = document.getElementById('gold');
let zakahMmoney = document.getElementById('zakah-money');
let bussiness = document.getElementById('bussiness');
let rekaz = document.getElementById('rekaz');
let errorNum = document.getElementById('errorNum');
let btnResult = document.getElementById('btn-result');

select.onclick = function(){
    items.style.display =  items.style.display === 'none'? 'block' : 'none';
    error.style.display = 'none';  
}

gold.onclick = function(){
    select.innerHTML = 'الذهب من عيار 24 جرام نقي';
    error.style.display = 'none'; 
    items.style.display = 'none'; 
}

zakahMmoney.onclick = function(){
    select.innerHTML = 'زكاة المال';
    error.style.display = 'none'; 
    items.style.display = 'none'; 
}

bussiness.onclick = function(){
    select.innerHTML = 'زكاة التجارة';
    error.style.display = 'none'; 
    items.style.display = 'none'; 
}

rekaz.onclick = function(){
    select.innerHTML = 'زكاة الركاز';
    error.style.display = 'none'; 
    items.style.display = 'none'; 
}

btnResult.onclick = function(){
    if(select.innerHTML === 'الذهب من عيار 24 جرام نقي'){
        let result = number.value * 0.025;
        zakahResult.innerHTML = result + ' جنيه مصري';
        error.style.display = 'none'; 
    } else if(select.innerHTML === 'زكاة المال'){
        let result = number.value * 0.025;
        zakahResult.innerHTML = result + ' جنيه مصري';
        error.style.display = 'none'; 
    } else if(select.innerHTML === 'زكاة التجارة'){
        let result = number.value * 0.025;
        zakahResult.innerHTML = result + ' جنيه مصري';
        error.style.display = 'none'; 
    } else if(select.innerHTML === 'زكاة الركاز'){
        let result = number.value * 0.02;
        zakahResult.innerHTML = result + ' جنيه مصري';
        error.style.display = 'none'; 
    } else {
        error.style.display = 'block'; 
    }

    if(number.value === ''){
        errorNum.style.display = 'block';
    }else{
        errorNum.style.display = 'none';
    }

}

