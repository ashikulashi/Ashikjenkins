package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.base.BaseClass;
import org.pojo.Forgottenpass;
import org.pojo.LoginPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends BaseClass {

	@Given("User have to click forgotten password")
	public void user_have_to_click_forgotten_password() {

		Forgottenpass f = new Forgottenpass();

		btnClick(f.getBtnFrgtPass());

	}

	@When("User have to enter email or phoneNo")
	public void user_have_to_enter_email_or_phoneNo() {

		Forgottenpass f = new Forgottenpass();

		fill(f.getTxtSearchBox(), "98675875757");

	}

	@Then("User have to click the search button")
	public void user_have_to_click_the_search_button() {

		Forgottenpass f = new Forgottenpass();

		btnClick(f.getBtnSearch());

	}

	@Given("User have to enter facebook login through chrome Browser")
	public void user_have_to_enter_facebook_login_through_chrome_Browser() {

		loadUrl("https://en-gb.facebook.com/");

	}

	@When("User have to enter invalid username and invalid password")
	public void user_have_to_enter_invalid_username_and_invalid_password(io.cucumber.datatable.DataTable d) {

		// 1D map

		Map<String, String> mp = d.asMap(String.class, String.class);

		String email = mp.get("email");
		String pass = mp.get("Password");

		LoginPojo l = new LoginPojo();

		fill(l.getTxtEmail(), email);
		fill(l.getTxtPass(), pass);

	}

	@When("User have to click the login button")
	public void user_have_to_click_the_login_button() {

		LoginPojo l = new LoginPojo();

		btnClick(l.getBtnLogin());

	}

	@Then("User should be in invalid credentials page")
	public void user_should_be_in_invalid_credentials_page() {

		String url = driver.getCurrentUrl();

		if (url.contains("privacy_mutation_token")) {

			System.out.println("User is not in invalid credentials page");

		} else {

			System.out.println("User is  in invalid credentials page");

		}

	}

	@When("User have to enter valid username and invalid password")
	public void user_have_to_enter_valid_username_and_invalid_password(io.cucumber.datatable.DataTable d) {

		// 2D Map

		List<Map<String, String>> mp = d.asMaps();

		String email = mp.get(1).get("username");
		String pass = mp.get(0).get("password");

		LoginPojo l = new LoginPojo();

		fill(l.getTxtEmail(), email);
		fill(l.getTxtPass(), pass);

	}

	@When("User Click the Login button")
	public void user_Click_the_Login_button() {

		LoginPojo l = new LoginPojo();

		btnClick(l.getBtnLogin());

	}

	@Then("User should be in invalid credentials Page")
	public void user_should_be_in_invalid_credentials_Page() {

		String url = driver.getCurrentUrl();

		if (url.contains("privacy_mutation_token")) {

			System.out.println("User is not in invalid credentials page");

		} else {

			System.out.println("User is  in invalid credentials page");

		}

	}
}