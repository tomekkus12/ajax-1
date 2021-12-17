$(document).ready(function() {

    $("#get-data").click(function() {
    
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php")
        .done(function(data) {

            console.log(data);

            let imie = $("<p></p>").text(`Imię: ${data.imie}`);
            let nazwisko = $("<p></p>").text(`Nazwisko: ${data.nazwisko}`);
            let zawod = $("<p></p>").text(`Zawód: ${data.zawod}`);
            let firma = $("<p></p>").text(`Firma: ${data.firma}`);

            let kontener = $("<div></div>");
            kontener.attr('id', "dane-programisty");
            $("body").append(kontener);

            kontener.append(imie);
            kontener.append(nazwisko);
            kontener.append(zawod);
            kontener.append(firma);
   
        })
        .fail(function(error) {
            console.error(error);
        })

    });


});