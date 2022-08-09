@Login
Feature: 
  To validate the login functionality of facebook application

  Background: 
    Given User have to enter facebook login through chrome Browser

  @smoke @sanity
  Scenario: 
    To validate login using invalid username and invalid password

    When User have to enter invalid username and invalid password
      | username | Ashik              |
      | Password |      8978768778578 |
      | email    | ashik123@gmail.com |
    And User have to click the login button
    Then User should be in Invalid credentials page

  @smoke @Regression
  Scenario: 
    To validate login using valid username and invalid password

    When User have to enter valid username and invalid password
      | username | password     | email                 |
      | selenium | 757676476476 | selenium123@gmail.com |
      | java     |   7868758565 | java123@gmail.com     |
      | python   | 676767757579 | python123@gmail.com   |
    And User have to click the login button
    Then User should be in invalid credentials page
