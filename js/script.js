$(document).ready(function() {
    $(".formOne").submit(function(event) {
        const racism = $("select#racism").val();
        const bias = $("select#bias").val();
        const trump = $("select#trump").val();
        const border = $("select#border").val();
        const sports = $("select#sports").val();
        const gender = $("select#gender").val();
    

        if ( racism === 'Yes' && bias === 'No' && trump === 'No' && border === 'No' && sports === 'Yes' && gender === 'Yes') {
            $(".formOne").hide();
            $(".liberal").show();
        } else if ( racism === 'No' && bias === 'No' && trump === 'Yes' && border === 'Yes' && sports === 'No' && gender === 'Not all') {
            $(".formOne").hide();
            $(".moderate").show();
        }  else if ( racism === 'Yes' && bias === 'No' && trump === 'No' && border === 'Yes' && sports === 'No' && gender === 'Not all') {
            $(".formOne").hide();
            $(".liberal").show();
        }  else if ( racism === 'Yes' && bias === 'No' && trump === 'No' && border === 'Yes' && sports === 'No' && gender === 'No') {
            $(".formOne").hide();
            $(".liberal").show();
        } else if ( racism === 'No' && bias === 'No' && trump === 'No' && border === 'Yes' && sports === 'Yes' && gender === 'Not all') {
            $(".formOne").hide();
            $(".liberal").show();
        } else if (racism === 'No' && bias === 'Yes' && trump === 'Yes' && border === 'Yes' && sports === 'No' && gender === 'No') {
            $(".formOne").hide();
            $(".conservative").show();
        } else {
            $(".formOne").hide();
            $(".moderate").show();
        }
    
        event.preventDefault();

    });
    
});