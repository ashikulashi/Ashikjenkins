package org.stepdefinition;

import org.base.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {

	@Before

	public void bef() {
		System.out.println("Bef Sceanrioa>>>>");
		launchBrowser();
		maxBrowser();

	}

	@Before(order = 2)

	public void befSce2() {
		System.out.println("bef sce 2");

	}

	@Before(order = 1)

	public void befSce1() {
		System.out.println("bef sce 1");

	}

	@Before(order = 3)

	public void befSce3() {
		System.out.println("bef sce 3");

	}

	@After(order = 3)

	public void aftSce3() {
		System.out.println("aft sce3");

	}

	@After(order = 2)

	public void aftSce2() {
		System.out.println("aft sce2");

	}

	@After(order = 1)

	public void aftSce1() {
		System.out.println("aft sce1");

	}

	@After

	public void aft(Scenario s) {
		System.out.println("aft sceanrio>>>>");

		if (s.isFailed()) {

			TakesScreenshot tk = (TakesScreenshot) driver;

			byte[] screen = tk.getScreenshotAs(OutputType.BYTES);

			s.embed(screen, "image/png");

		}

		toQuit();

	}

}
