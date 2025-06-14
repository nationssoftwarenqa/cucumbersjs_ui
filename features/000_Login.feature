Feature: Bible Web App Project
        

        @tstone
        @stgone
        @tst
        @stg
        Scenario: Search a scripture without logging in
            #Given I visit the online bible app 
            Given I visit the online bible app
             Then click on bible text on the upper left
             When I type "mark 14:17" and hit enter
             Then click on mark 14 17 NIV
             Then the text "Mark 14:17" is displayed

        @tstwo
        @stgtwo
        @tst
        @stg
        Scenario: Log into bible app with incorrect username
            Given I visit the online bible app
             Then click on the humbergar menu
             Then click on sign in from the dropdown
             When I type users "incusername" and hit enter
             When I type the users "password" and hit enter
             Then user clicks the Sign In button
             Then the message "We’re sorry, something went wrong. Please try again." is displayed

        @tsthree
        @stgthree
        @tst
        @stg
        Scenario: Log into bible app with incorrect password
            Given I visit the online bible app
             Then click on the humbergar menu
             Then click on sign in from the dropdown
             When I type users "username" and hit enter
             When I type the users "incpassword" and hit enter
             Then user clicks the Sign In button
             Then the message "We’re sorry, something went wrong. Please try again." is displayed

        @tstfour
        @stgfour
        @tst
        @stg
        Scenario: Log into bible app with incorrect username and password
            Given I visit the online bible app
             Then click on the humbergar menu
             Then click on sign in from the dropdown
             When I type users "incusername" and hit enter
             When I type the users "incpassword" and hit enter
             Then user clicks the Sign In button
             Then the message "We’re sorry, something went wrong. Please try again." is displayed

        @tstfive
        @stgfive
        @tst
        @stg
        Scenario: Log into bible app without creds
            Given I visit the online bible app
             Then click on the humbergar menu
             Then click on sign in from the dropdown
             Then user clicks the Sign In button
             Then I wait for "3" seconds
             Then the error "Unable to locate element" is displayed click on menu

        @tstsix
        @stgsix
        @tst
        @stg
        Scenario: Log into bible app with the correct creds
            Given I visit the online bible app
             Then click on the humbergar menu
             Then click on sign in from the dropdown
             When I type users "username" and hit enter
             When I type the users "password" and hit enter
             Then user clicks the Sign In button
             Then I wait for "3" seconds
             Then click on the humbergar menu
             Then the message "Sign Out" is displayed

        @tstsvn
        @stgsvn
        @tst
        @stg
        Scenario: Log into bible app in stage with incorrect username
            Given I visit the online bible app
            Given I visit the online bible app
             Then click on the humbergar menu
             Then click on sign in from the dropdown
             When I type users "incusername" and hit enter
             When I type the users "password" and hit enter
             Then user clicks the Sign In button
             Then the message "We’re sorry, something went wrong. Please try again." is displayed
            