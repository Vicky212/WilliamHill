package com.williamhill.pages;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import com.williamhill.base.WilliamhillHelper;

public class WilliamHillFootballListingPage extends WilliamhillHelper
{

	private WebElement odd;
	private WebElement bettingSlip;
	private WebElement betValue;
	private WebElement toReturn;
	private WebElement bettingOdd;
	private WebElement betButton;

	// Football listing page inherit all the generic locator and methods from william hill helper class
	
	// Sunderland to win Home
	public void AndIClickOnOddForHomeTeamToWin () throws Exception
	{
		odd = getElementById("OB_OU1508754302");
		odd.click();
	}
	
	public void AndBettingSlipContentIsDisplayed () throws Exception
	{
		bettingSlip = getElementById("betslip-content");
		Assert.assertTrue(bettingSlip.isDisplayed());
	}
	
	public void AndIEnterABettingValue (String value) throws Exception
	{
		betValue = getElementById("stake-input__1508754302L");
		betValue.sendKeys(value);
	}
	
	public void AndTheReturnsOfferedOnTheBetSlipIsDisplayed () throws Exception
	{
		toReturn = getElementById("total-to-return-price");
		Assert.assertTrue(toReturn.isDisplayed());
	}
	
	public void AndTheBettingOddIsDisplayed () throws Exception
	{
		bettingOdd = getElementById("total-to-return-price");
		Assert.assertTrue(bettingOdd.isDisplayed());
	}
	
	public void AndIClickOnPlaceBetButton() throws Exception
	{
		betButton = getElementById("place-bet-button");
		betButton.click();
	}
	
	
}
