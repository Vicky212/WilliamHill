package stepDefinition;

import com.williamhill.base.WilliamhillHelper;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class WilliamHillHooks extends WilliamhillHelper
{
	// this method will launch browser 
	@Before
	public void setUp() throws Exception
	{
		launchBrowser("chrome");
		
	}
	// this method will close browser
	@After
	public void tearDown() throws Exception
	{
		closeBrowser();
	}
	

}
