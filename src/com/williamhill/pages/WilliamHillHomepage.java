package com.williamhill.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import com.williamhill.base.WilliamhillHelper;



public class WilliamHillHomepage extends WilliamhillHelper
{
	
	private final String baseUrl = "http://sports.williamhill.com/betting/en-gb";
	private WebElement logo;
	private WebElement football;
	
	// Launch WilliamHil home page 
	public void GivenINavigateToWilliamHillHomePage() throws Exception
	{
		launchUrl(baseUrl);
			
	}
	
	public void AndIAmOnWilliamHillHomePage() throws Exception
	{
		logo = getElementByXpath("//a[@title='William Hill Sports homepage']");
		Assert.assertTrue(logo.isDisplayed());

	}
	
	// when user click on football, football listing page will return

	public WilliamHillFootballListingPage AndIClickOnFootball() throws Exception 
	{
		football = getElementByCssSelector(".contextual-nav__icon.icon-football");
		football.click();
		
		return new WilliamHillFootballListingPage();
	}
	
	
}
