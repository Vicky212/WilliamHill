package com.williamhill.base;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class WilliamhillHelper 

{
	// base class that holds all the generic 
	private static WebDriver driver;
	private static WebDriverWait wait;

	static {
		driver = null;
		wait = null;		
	}
	
	public static void WaitForElementToBeDisplayed(WebElement element) throws Exception 
	{
		wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
	
	// Methods lauch chrome browser or firefox browser
	public static void launchBrowser(String browser) throws Exception {
		switch (browser.toLowerCase()) {
		case "chrome":
			driver = initialiseChrome();
			break;
		case "firefox":
			driver = initialiseFirefox();
			break;

		default:
			System.out.println(browser + " is not recognised. So Chrome is launched instead");
			driver = initialiseChrome();
		}

		driver.manage().window().maximize();
	}

	public static void closeBrowser() throws Exception {
		driver.manage().deleteAllCookies();
		driver.close();
		driver.quit();
	}

	public static void launchUrl(String Url) {
		driver.navigate().to(Url);
	}

	private static WebDriver initialiseChrome() throws Exception {
		System.setProperty("webdriver.chrome.driver", "./lib2/chromedriver.exe");
		driver = new ChromeDriver();

		return driver;
	}

	private static WebDriver initialiseFirefox() throws Exception {
		driver = new FirefoxDriver();

		return driver;
	}
	
	// static method for element locator

	public static WebElement getElementById(String id) throws Exception {
		By locator = By.id(id);
		return getElement(locator);
	}

	public static WebElement getElementByClassName(String className) throws Exception {
		By locator = By.className(className);
		return getElement(locator);
	}

	public static WebElement getElementByName(String name) throws Exception {
		By locator = By.name(name);
		return getElement(locator);
	}

	public static WebElement getElementByCssSelector(String cssSelector) throws Exception {
		By locator = By.cssSelector(cssSelector);
		return getElement(locator);
	}

	public static WebElement getElementByXpath(String xpath) throws Exception {
		By locator = By.xpath(xpath);
		return getElement(locator);
	}
  
	// Custom methods to find elements

	private static WebElement getElement(By locator) throws Exception {

		WebElement element = null;
		int tryCount = 0;

		while (element == null) {
			try {

				element = driver.findElement(locator);

			} catch (Exception e) {
				if (tryCount == 3) {
					throw e;
				}

				Thread.sleep(2000);

				tryCount++;
			}
		}

		System.out.println(element.toString() + " is now retrieved");
		return element;

	}

	
	

}
