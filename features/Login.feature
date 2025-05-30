Feature: Amazon Project


Scenario: Navigate To Bible Page
        Given I visit the online bible app 
        Then click on bible text on the upper left 
        When I type "mark 14:17" and hit enter
        Then click on mark 14 17 NIV
        Then the text "Mark 14:17" is displayed
        Then click on the humbergar menu
        Then click on sign in from the dropdown
        When I type email "isakafuseini@gmail.com" and hit enter
        When I type password "Snoopy.10" and hit enter
        Then the message "We’re sorry, something went wrong. Please try again." is displayed
            