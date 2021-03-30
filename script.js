$(document).ready(function (){

    $("button#calculate-pizza").click(CalculatePizzaCost);
    $("button#calculate-fee").click(CalculateBookFee);
});
function CalculatePizzaCost(e){
    //prevent from resetting
    e.preventDefault();
    // base charge
    let cheesePizza = 15;
    //get topping input * 1.25
    let toppings = parseFloat($("input#toppings").val()) * 1.25;
    //get coworker input
    let coworkers = parseFloat($("input#coworkers").val());
    //get total cost
    let total = cheesePizza + toppings;
    //get split cost
    let costSplit = total/coworkers;
    //create paragraph
    let output = $("<p>");
    output.css("color", "darkred");
    //add text to paragraph
    output.text(`Each person will have to pay $${costSplit.toFixed(2)}`);
    //append text
    $("div#pizza-form").append(output);
}
function CalculateBookFee(e){
    //prevent from resetting
    e.preventDefault();
    let days = parseFloat($("input#days").val());
    //days * .25 = books
    let books = days * 0.25;
    //days * .50 = dvds
    let dvds = days * 0.50;
    // get book input * books = bookCharge
    let bookCharge = parseFloat($("input#books").val()) * books;
    // get dvds input * dvds = dvdsCharge
    let dvdsCharge = parseFloat($("input#dvds").val()) * dvds;
    // total = dvdsCharge + booksCharge
    let totalCharge = bookCharge + dvdsCharge;
    //create paragraph
    for (let i = 0; i <= 3; i++) {
        let output = $("<p>");
        let letter = String.fromCharCode(i+96);
        output.addClass(letter);
        output.css("color", "darkred");
        //append text
        $("div#book-fee-form").append(output);
    }
        //add text to paragraph
        $("p.a").text(`The total Book charge is: $${bookCharge.toFixed(2)}`);
        $("p.b").text(`The total DVDs charge is: $${dvdsCharge.toFixed(2)}`);
        $("p.c").text(`The total Late Fee charge is: $${totalCharge.toFixed(2)}`);

}