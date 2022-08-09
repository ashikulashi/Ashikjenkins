package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinition.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources", glue = "org.stepdefinition",snippets=SnippetType.CAMELCASE, dryRun = false, 
plugin = {"pretty",
		"html:C:\\Users\\elcot\\eclipse-workspace\\Cucumber7PM\\AllReports\\htmlReport",
		"junit:C:\\Users\\elcot\\eclipse-workspace\\Cucumber7PM\\AllReports\\junitreport\\facebook.xml",
		"json:C:\\Users\\elcot\\eclipse-workspace\\Cucumber7PM\\AllReports\\jsonReport\\fb.json",
		"rerun:C:\\Users\\elcot\\eclipse-workspace\\Cucumber7PM\\Rerun\\failed.txt" })
public class TestRunner {

	@AfterClass

	public static void report() {

		JVMReport.generateJvmReport(System.getProperty("user.dir") + "\\AllReports\\jsonReport\\fb.json");

	}

}
