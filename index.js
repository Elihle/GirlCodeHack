$(function() 
{

    // Compiling the table
    var addDisplay = document.getElementById("showInfo");
    var list = document.getElementById("template").innerHTML;
    var theTemplate = Handlebars.compile(list);

    // Ajax call to display the data from the database
    $.ajax({
            url: 'https://localhost:3018/api/shoes',
            type: 'GET',
            success: function(data) {
                    addDisplay.innerHTML = theTemplate({
                        welllnessType: data
                    })

            },
            error: function(error) {
                    // alert('Stock loading error');
            }
    });
})