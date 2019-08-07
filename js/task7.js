'use strict'; 

let money, time,
    firstStartHTML = document.getElementById("start"),
    budgetHTML = document.getElementsByClassName("budget-value"),
    daybudgetHTML = document.getElementsByClassName("daybudget-value"),
    levelHTML = document.getElementsByClassName("level-value"),
    expensesHTML = document.getElementsByClassName("expenses-value"),
    optionalexpensesHTML = document.getElementsByClassName("optionalexpenses-value"),
    incomeHTML = document.getElementsByClassName("income-value"),
    monthsavingsHTML = document.getElementsByClassName("monthsavings-value"),
    yearsavingsHTML = document.getElementsByClassName("yearsavings-value"),
    expensesItemsHTML = document.getElementsByClassName("expenses-item"),
    approve1HTML = document.getElementsByTagName("button")[0],
    approve2HTML = document.getElementsByTagName("button")[1],
    calculateHTML = document.getElementsByTagName("button")[3],
    optionalExpensesHTML = document.querySelectorAll(".optionalexpenses .optionalexpenses-item"),
    countBudgetHTML = document.querySelector(".count-budget"),
    chooseIncomeLabelHTML = document.querySelector(".choose-income-label"),
    checkSavingsHTML = document.querySelector(".checksavings"),
    sumHTML = document.querySelector(".sum"),
    chooseSumHTML = document.querySelector(".choose-sum"),
    percentHTML = document.querySelector(".percent"),
    choosePercentHTML = document.querySelector(".choose-percent"),
    yearHTML = document.querySelector(".time-data .year"),
    monthHTML = document.querySelector(".time-data .month"),
    dayHTML = document.querySelector(".time-data .day");

function start() {
    money = +prompt("Your monthly budget?", "1000");

    while(isNaN(money) || money == "" || money == null) {
        alert("Something happened with your money... Please try again to answer the first question.");
        money = +prompt("Your monthly budget?", "1000");
    }

    time = prompt("enter current date in format YYYY-MM-DD", "2019-07-21");

}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    arrIncome: [],
    savings: false,
    howManyMadatoryExpenses: function() {
        let howManyMadatoryExpenses = +prompt("How many mandatory expense item for this month?", "0");

        if (howManyMadatoryExpenses == "") {
            howManyMadatoryExpenses = 0; 
        }
    
        while(isNaN(howManyMadatoryExpenses) || howManyMadatoryExpenses == null) {
            alert("Please enter how many madatory expenses do you have in a nuber");
            howManyMadatoryExpenses = +prompt("How many mandatory expense item for this month?", "0");
        }
    
        return Math.abs(Number(howManyMadatoryExpenses));
    },
    chooseExpenses: function() {
        let e = appData.howManyMadatoryExpenses();
        for(let i = 0; i < e; i++) {
            let a = prompt("Enter a mandatory expense item for this month.", ""),
                b = +prompt("How much it will cost?", "0");
        
            while(isNaN(b) || b == "" || b == null) {
                alert("please enter mandatory expense item cost in a number");
                b = +prompt("How much it will cost?", "0");
            }
        
            let d = "|" + i + "." + a + "|";
            appData.expenses[d] = b;
            }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("daily budget: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay <= 100) {
            appData.WealthLevel = "low"
        } else if (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 100) {
            appData.WealthLevel = "average"
        } else if (appData.moneyPerDay > 2000) {
            appData.WealthLevel = "high"
        } else {
            alert("Something went wrong")
        }
    
        alert(" Your wealth level is: " + appData.WealthLevel);
    },
    isSavings: function() {
        let i = confirm("Are you have any savings?");
    
        if(i) {
            appData.savings = true;
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("What is the sum of your savings?", "100");
    
            while(isNaN(save) || save == "" || save == null) {
                alert("Please enter sum of your savings in a nuber");
                save = +prompt("What is the sum of your savings?", "100");
            }
    
            
    
            let percent = +prompt("Under what percentage are your savings?", "5");
            console.log(percent);
            while(isNaN(percent) || percent == "" || percent == null) {
                alert("Please enter under what percentage are your savings in a nuber");
                percent = +prompt("Under what percentage are your savings?", "5");
            }
    
            appData.monthIncome = save/1200*percent;
            alert("Income from your deposit: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {

        let e = appData.howManyOptEpenses();

        for (let i = 0; i != e; i++) { 
            let c = +prompt("How much a mandatory expense item will cost?", "0");
    
            while(isNaN(c) || c == "" || c == null) {
                alert("Please enter mandatory expense item cost in a nuber");
                c = +prompt("How much a mandatory expense item will cost?", "0");
            }
    
            appData.optionalExpenses[i] = c;
        }
    },
    howManyOptEpenses: function() {
        let optExpenses = +prompt("How many optional expenses do you have", "3");

        if (optExpenses == "") {
            optExpenses = 0; 
        }
    
        while(isNaN(optExpenses) || optExpenses == null) {
            alert("Please enter how many optional expenses do you have in a nuber");
            optExpenses = +prompt("How many optional expenses do you have", "3");
        }
    
        return Math.abs(Number(optExpenses));
    },
    isTereAnyIncome: function() {
        if(confirm("Do you have any income?")) {
            return true;
        } else {
            return false;
        }
    },
    chooseIncome: function() {
        if(appData.isTereAnyIncome()) {
            let items = prompt("What will bring additional income? (Please indicate the answers with a comma)", "");

            while(typeof(items) !== "string" || items == null || items == "") {
                alert("You can't skip this");
                items = prompt("What will bring additional income? (Please indicate the answers with a comma)", "");
            }
            appData.arrIncome = items.split(", ");
            let items2 = prompt("Anything else");
            appData.arrIncome.push(items2.split(", "));
            appData.arrIncome.sort();
        }
    },
    AllIncome: function() {
        console.log("Our program includes data:");
        appData.arrIncome.forEach(function(item, i) {
            let a = i + 1;
            console.log(a + ": " + item);
        });
    }
    };















