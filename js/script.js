let money, time ;

function start() {

    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
  
    while(isNaN(money) || money === "" || money === null  ) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function  chooseExpenses(){
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
}
chooseExpenses();


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

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет:" + appData.moneyPerDay );

}

detectDayBudget();

function detectLevel() {
    if( appData.moneyPerDay < 90){
        console.log("Минимальный уровень достатка");
    }else if( appData.moneyPerDay > 90 && appData.moneyPerDay < 500){
        console.log("средний уровень достатка");
    }else if ( appData.moneyPerDay > 500){
        console.log("выокий уровень достатка");
    }
}
detectLevel();

function chekSavings() {

    if (appData.savings == true){
        let save = +prompt ("Какова сумма накоплений?"),
            percent = +prompt("под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("доход в месяц с вашего депазита:"+ appData.monthIncome);
    }
}
chekSavings();
function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();