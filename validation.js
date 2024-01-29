function Validate_Form() {
    let choose = document.forms["myForm"]["choose"].value;
    let date = document.forms["myForm"]["date"].value;
    let amount = document.forms["myForm"]["amount"].value;
    let deposit = document.forms["myForm"]["deposit"].value;
    let radio = document.forms["myForm"]["radio"].value;
    let x = document.getElementById("less").value;
    let y = parseInt(x);

    if(choose == "Choose") {
        alert("Please select a serial number");
        return false;
    }else
    if(date == "") {
        alert("Please Choose Date");
        return false;
    } else
    if(amount == "" || amount < 50){
        alert("Need to put amount or amount is lessthan 50");
        return false;
    }else
    if(deposit == ""){
        alert("Deposit Number is Must");
        return false;
    }else
    if(radio == ""){
        alert("Type is Must: Deposit, Loan or Withdrawal");
        return false;
    }
}

