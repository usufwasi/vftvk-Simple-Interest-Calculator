function compute()
{
    /*
        Get principal value from the form.
        Perform necessary validation to ensure
        0 or -ve values are not processed.
    */
    var principal = document.getElementById("principal").value;
    if (principal <= 0)
    {
        alert("Principal value cannot be 0 or a negative number.")
        document.getElementById("principal").value = 1;
        document.getElementById("principal").focus();

        return;
    }

    /*
        Get interest rate and number of years from
        the form.
    */
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    /*
        Calculate interest value from the values read.
    */
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);

    /*
        Convert number of years value into an actual
        year.
    */
    var year = new Date().getFullYear()+parseInt(years);

    /*
        Display result on the form.
    */
    var result_span = document.getElementById("result");
    result_span.innerHTML = "If you deposit <span class='highlight'>"+principal+"</span><br>at an interest rate of <span class='highlight'>"+rate+"%</span>,<br>You will receive an amount of <span class='highlight'>"+amount+"</span>,<br>in the year <span class='highlight'>"+year+"</span>";

    /*
        Reset form and return focus to prinipal value field.
    */
    resetCalculator();
}

/*
    This function updates the interst rate value when
    the slider is moved.
*/
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

/*
    This function returns focus back to principal form
    field, once the compute interest button has been
    pressed.
*/
function resetCalculator()
{
    document.getElementById("principal").value = 1;
    document.getElementById("principal").focus();

    document.getElementById("years").value = 1;
}