let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for ( let i = 0; i < 2; i++ ) {

    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if((typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null
    && a != '' && b != '' && a.length < 30 ){
        console.log('done');
        appData.expenses[a]= b ;
    } else {
        i=0;
    }
}
// let i = 0;

// do{
//         i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");

//     if((typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null
//     && a != '' && b != '' && a.length < 30 ){
//         appData.expenses[a]= b ;
//     } else {

//     }

// } while	(i<2);

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет:" + appData.moneyPerDay );

if( appData.moneyPerDay < 90){
    console.log("Минимальный уровень достатка");
}else if( appData.moneyPerDay > 90 && appData.moneyPerDay < 500){
    console.log("средний уровень достатка");
}else if ( appData.moneyPerDay > 500){
    console.log("выокий уровень достатка");
}
