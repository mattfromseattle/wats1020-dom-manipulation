//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$(document).ready(function () {
    var userInfo = {
        firstName: 'Matt',
        lastName: 'Dewey'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

    // Function looks for the interaction with the button to hide the text field input boxes
    $("#login-form .btn-sm").click(function () {
        $("#login-form").toggle(1000);
        // After hiding the input fields, it displays the user's first and last name.
        $(".user-info").text("Greetings, " + userInfo.firstName + " " + userInfo.lastName + "!");
        $(".user-info").css({
            'font-size': $(this).val()
        });
        $(".user-info").toggle(2000);
    });

// This looks for the button to be clicked and then expose the hidden content.
$('.view-details').on('click', function (event) {
    //This will show an event with timestamp in the console.
    console.log(event);
    var targetElement = event.target;
    var container = targetElement.parentElement.parentElement;
    // This finds the 'hidden' text on the page to display.
    $(container).find('.details').each(function (index, content) {
        //This looks to see if the content is visible. If it is, it closes it.
        if ($(content).is(':visible')) {
            //This animation will slide the content to close with a set interval.
            $(content).slideUp(1000);
            //This changes the label of the button to be 'View Details'
            targetElement.innerText = "View Details"
            // If the content isn't visible, the hidden content slides down
        } else {
            $(content).slideDown(1000);
            // Button text is updated to show as 'Hide Details'
            targetElement.innerText = "Hide Details"
        }
    })

// This is the section for the voting buttons
});
// This listens for a click event on one of the voting buttons.
    $('.vote').on('click', function (event) {
        //This will increment the total voting count for each click.
       voteCounts.total++;
        var targetElement = event.target;
        // Check to see if the vote is going to 'great' or 'greatest'
        if ($(targetElement).data('vote') === 'great') {
            // Incrememt the 'great' vote count by 1.
            voteCounts.great++;
        } else {
            // Incrememt the 'greatest' vote count by 1.
            voteCounts.greatest++;
        }
        // Tally the votes and divide by 100 to get a percentage.
        var greatPercent = (voteCounts.great / voteCounts.total * 100);
        var greatestPercent = (voteCounts.greatest / voteCounts.total * 100);
        // Adjust the styling on the vote tally graph, adjusting size of each according to votes.
        $('.great-progress').css('width', greatPercent + '%');
        $('.greatest-progress').css('width', greatestPercent + '%');
    });
    });