Feature: Ask A Question In Bible Web App

        @csone
        Scenario: Submit A Question Compiled Steps
            Given I visit the online "bible" app
             Then I nagigate to the signin page
             Then I wait for "1" seconds
             Then send a question to the support team
             Then the text "Submit Form" is displayed on the page
            