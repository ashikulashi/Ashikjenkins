package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class LoginPojo extends BaseClass {

	// 1.We need create non-parametrized constructor

	public LoginPojo() {

		PageFactory.initElements(driver, this);
	}

	// 2.We need declare our webElement as private

	@CacheLookup
	@FindBys({

			@FindBy(xpath = "//input[@id='email']"), // true AND Operator
			@FindBy(xpath = "//input[@name='email']")// true

	})

	private  WebElement txtEmail;
	
	@CacheLookup
	@FindAll({

			@FindBy(xpath = "//input[@id='password']"), // true OR operator
			@FindBy(xpath = "//input[@name='pass']")// true

	})

	private WebElement txtPass;

	@FindBy(xpath = "//button[@name='login']")
	private WebElement btnLogin;

	// 3.Getters to access those webElements outside of the Class

	public WebElement getTxtEmail() {
		return txtEmail;
	}

	public WebElement getTxtPass() {
		return txtPass;
	}

	public WebElement getBtnLogin() {
		return btnLogin;
	}

}
