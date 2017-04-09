$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PlaceBet.feature");
formatter.feature({
  "line": 1,
  "name": "Place Bet",
  "description": "\t\tAs a WilliamHill Customer\n\t\tI want the ability to place bet on an English Premier League event",
  "id": "place-bet",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Place a bet on English Premier Football League event",
  "description": "",
  "id": "place-bet;place-a-bet-on-english-premier-football-league-event",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I navigate to WilliamHill home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "William logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on football",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on odd for the home team to Win",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "betting slip content displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter betting value \"\u003cBetting Value\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the returns offered on the bet displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "betting  odds is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I place the bet",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "place-bet;place-a-bet-on-english-premier-football-league-event;",
  "rows": [
    {
      "cells": [
        "Betting Value"
      ],
      "line": 17,
      "id": "place-bet;place-a-bet-on-english-premier-football-league-event;;1"
    },
    {
      "cells": [
        "0.05"
      ],
      "line": 18,
      "id": "place-bet;place-a-bet-on-english-premier-football-league-event;;2"
    }
  ],
  "keyword": "Scenarios"
});
formatter.before({
  "duration": 13185215246,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Place a bet on English Premier Football League event",
  "description": "",
  "id": "place-bet;place-a-bet-on-english-premier-football-league-event;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I navigate to WilliamHill home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "William logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on football",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on odd for the home team to Win",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "betting slip content displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter betting value \"0.05\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the returns offered on the bet displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "betting  odds is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I place the bet",
  "keyword": "And "
});
formatter.match({
  "location": "WilliamHillAcceptanceTest.i_navigate_to_WilliamHill_home_page()"
});
formatter.result({
  "duration": 8349508532,
  "status": "passed"
});
formatter.match({
  "location": "WilliamHillAcceptanceTest.william_logo_is_displayed()"
});
formatter.result({
  "duration": 150041506,
  "status": "passed"
});
formatter.match({
  "location": "WilliamHillAcceptanceTest.i_click_on_football()"
});
formatter.result({
  "duration": 126645170,
  "status": "passed"
});
formatter.match({
  "location": "WilliamHillAcceptanceTest.i_click_on_odd_for_the_home_team_to_Win()"
});
formatter.result({
  "duration": 6242630039,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"OB_OU1508754302\"}\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.0-beta4\u0027, revision: \u00273169782\u0027, time: \u00272016-09-29 10:29:23 -0700\u0027\nSystem info: host: \u0027DESKTOP-NMCOJ8P\u0027, ip: \u0027192.168.0.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\User\\AppData\\Local\\Temp\\scoped_dir95644_20534}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 9b93073b73b8b63c26cc88e574ba7275\n*** Element info: {Using\u003did, value\u003dOB_OU1508754302}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:636)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:369)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:418)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:361)\r\n\tat com.williamhill.base.WilliamhillHelper.getElement(WilliamhillHelper.java:107)\r\n\tat com.williamhill.base.WilliamhillHelper.getElementById(WilliamhillHelper.java:74)\r\n\tat com.williamhill.pages.WilliamHillFootballListingPage.AndIClickOnOddForHomeTeamToWin(WilliamHillFootballListingPage.java:21)\r\n\tat stepDefinition.WilliamHillAcceptanceTest.i_click_on_odd_for_the_home_team_to_Win(WilliamHillAcceptanceTest.java:40)\r\n\tat ✽.When I click on odd for the home team to Win(PlaceBet.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WilliamHillAcceptanceTest.betting_slip_content_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 23
    }
  ],
  "location": "WilliamHillAcceptanceTest.i_enter_betting_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WilliamHillAcceptanceTest.the_returns_offered_on_the_bet_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WilliamHillAcceptanceTest.betting_odds_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WilliamHillAcceptanceTest.i_place_the_bet()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8160525272,
  "status": "passed"
});
});