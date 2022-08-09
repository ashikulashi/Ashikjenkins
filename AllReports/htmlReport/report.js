$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/Forgottenpass.feature");
formatter.feature({
  "name": "",
  "description": "  To validate forgotten password functionality of facebook application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@forgotpass"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "      To validate forgotten password",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@forgotpass"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter facebook login through chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_facebook_login_through_chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to click forgotten password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_have_to_click_forgotten_password()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Forgotten password\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SF67MDM\u0027, ip: \u0027192.168.0.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\elcot\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50214}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bdfc2dd7e67d3408b9b434fd1bc53dce\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Forgotten password\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.base.BaseClass.btnClick(BaseClass.java:66)\r\n\tat org.stepdefinition.StepDefinition.user_have_to_click_forgotten_password(StepDefinition.java:21)\r\n\tat ✽.User have to click forgotten password(file:src/test/resources/FeatureFiles/Forgottenpass.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User have to enter email or phoneNo",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_email_or_phoneNo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User have to click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_have_to_click_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Login.feature");
formatter.feature({
  "name": "",
  "description": "  To validate the login functionality of facebook application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter facebook login through chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_facebook_login_through_chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    To validate login using invalid username and invalid password",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User have to enter invalid username and invalid password",
  "rows": [
    {
      "cells": [
        "username",
        "Ashik"
      ]
    },
    {
      "cells": [
        "Password",
        "8978768778578"
      ]
    },
    {
      "cells": [
        "email",
        "ashik123@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_invalid_username_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be in Invalid credentials page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter facebook login through chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_facebook_login_through_chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    To validate login using valid username and invalid password",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User have to enter valid username and invalid password",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "email"
      ]
    },
    {
      "cells": [
        "selenium",
        "757676476476",
        "selenium123@gmail.com"
      ]
    },
    {
      "cells": [
        "java",
        "7868758565",
        "java123@gmail.com"
      ]
    },
    {
      "cells": [
        "python",
        "676767757579",
        "python123@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_valid_username_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be in invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_should_be_in_invalid_credentials_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});