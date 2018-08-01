$(document).ready(function(){
    var apiKey="771dcdb5b68bccab68b99a06d7bfa6ea";
    console.log(apiKey);

    $("#search-button").click(function () {
        console.log("botón de search clickeado");

        var search = $("#search").val();

        var $characters = $("#characters");
        $characters.html("<h1> Searching </h1>");

        $.ajax ({
            url: "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=thor&apikey=" + apiKey, 
            success: function(response) {
                var template = document.getElementById("template-content").innerHTML;
                console.log(template);
                
                //diferente template
                var template = document.getElementById("template_content").innerHTML;
                console.log("template");

                //limpiar cuerpo de html
                $characters.html("");

                response.data.results.forEach(function(character){
                    //console.log(character);
                    //console.log(character.name);
                    var data = {
                        name: character.name,
                        description: character.description,
                        img: character.thumbnail.path+"."+character.extension,
                    }
                    console.log(data);
                    var fillTemplate = fillTemplate(template,data);
                    console.log(fillTemplate);
                    $characters.append(fillTemplate);
                });
            }
        });
    });
});

function fillTemplate(template, data) {
    for(var index in data){
        var value = data[index];
        template = template.replace(new RegExp('{{'+index+'}}', 'g'), escapeHtml(value) );
    };
    return template;
};

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
};