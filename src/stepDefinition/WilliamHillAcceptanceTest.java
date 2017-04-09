package stepDefinition;

import com.williamhill.pages.WilliamHillFootballListingPage;
import com.williamhill.pages.WilliamHillHomepage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WilliamHillAcceptanceTest  
{
	// I create an  instance of WilliamHillHomepage object
	WilliamHillHomepage homepage = new WilliamHillHomepage();
	
	// I create an  instance of WilliamHill football listing page object
	WilliamHillFootballListingPage listingpage = new WilliamHillFootballListingPage();
	
	
	@Given("^I navigate to WilliamHill home page$")
	public void i_navigate_to_WilliamHill_home_page() throws Throwable 
	{
	    homepage.GivenINavigateToWilliamHillHomePage();
	}

	@Given("^William logo is displayed$")
	public void william_logo_is_displayed() throws Throwable 
	{
	  homepage.AndIAmOnWilliamHillHomePage();
	}

	@Given("^I click on football$")
	public void i_click_on_football() throws Throwable 
	{
	   homepage.AndIClickOnFootball();
	}

	@When("^I click on odd for the home team to Win$")
	public void i_click_on_odd_for_the_home_team_to_Win() throws Throwable 
	{
	    listingpage.AndIClickOnOddForHomeTeamToWin();
	}

	@When("^betting slip content displayed$")
	public void betting_slip_content_displayed() throws Throwable 
	{
	  listingpage.AndBettingSlipContentIsDisplayed();
	}

	@When("^I enter betting value \"([^\"]*)\"$")
	public void i_enter_betting_value(String value) throws Throwable 
	{
	  listingpage.AndIEnterABettingValue(value);
	}

	@Then("^the returns offered on the bet displayed$")
	public void the_returns_offered_on_the_bet_displayed() throws Throwable 
	{
	listingpage.AndTheReturnsOfferedOnTheBetSlipIsDisplayed();
	}

	@Then("^betting  odds is displayed$")
	public void betting_odds_is_displayed() throws Throwable 
	{
	   listingpage.AndTheBettingOddIsDisplayed();
	}

	@Then("^I place the bet$")
	public void i_place_the_bet() throws Throwable 
	{
	    listingpage.AndIClickOnPlaceBetButton();
	}


}
