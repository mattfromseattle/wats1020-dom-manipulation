//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$(document).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

    // When button is clicked, the text fields and button are faded out.
    $("#loginButton").click(function() {
        $("#email, #password, #loginButton").fadeOut();
        //      2. Fill the user's first and last name into `div.user-info`.
        //      (NOTE: You do not have to perform any validation on the data as
        //          a base requirement.)

    });

    // This looks for the button to be clicked and then expose the hidden content.
    $('.view-details').on('click', function(event) {
        //This will show an event with timestamp in the console.
            console.log(event);
            var targetElement = event.target;
            var container = targetElement.parentElement.parentElement;
            // This finds the 'hidden' text on the page to display.
            $(container).find('.details').each(function(index, el){
                //This looks to see if the content is visible. If it is, it closes it.
                if ($(el).is(':visible')) {
                    //This animation will slide the content to close with a set interval.
                    $(el).slideUp(1000);
                    //This changes the label of the button to be 'View Details'
                    targetElement.innerText = "View Details"
                    // If the content isn't visible, the hidden content slides down
                } else {
                    $(el).slideDown(1000);
                    // Button text is updated to show as 'Hide Details'
                    targetElement.innerText = "Hide Details"
                }
            })
    });

// TODO: Create a function that listens for clicks on the voting buttons and
// looks at the `data-vote` attribute on each button to see what was voted for,
// then determines the updated vote breakdown to adjust the progress bars.
//      1. Set up an event listener on the buttons with the `vote` class.
//      2. When a button is clicked, look at the `data-vote` attribute to determine
//          what the user is voting for ("great" or "greatest").
//      3. Increment the counter for whichever vote talley is affected.
//      4. Determine the respective percentages (out of 100) for each progress bar.
//      5. Modify the `width` attribute on each progress bar to set the updated percentage.

});
