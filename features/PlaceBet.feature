Feature: Place Bet
				As a WilliamHill Customer
				I want the ability to place bet on an English Premier League event

Scenario Outline: Place a bet on English Premier Football League event
				Given I navigate to WilliamHill home page
				And William logo is displayed
				And I click on football
				When I click on odd for the home team to Win
				Then betting slip content displayed 
				And I enter betting value "<Betting Value>"
				Then the returns offered on the bet displayed
				And  betting  odds is displayed
				And I place the bet

Scenarios:
 |Betting Value|
 |   0.05      | 
 
				
