package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefinition.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@Rerun\\failed.txt", glue = "org.stepdefinition", dryRun = false, plugin = {
		"rerun:C:\\Users\\elcot\\eclipse-workspace\\Cucumber7PM\\Rerun\\failed.txt" })

public class TestRerunner {
	
	@AfterClass

	public static void report() {

		JVMReport.generateJvmReport(System.getProperty("user.dir") + "\\AllReports\\jsonReport\\fb.json");

	}
	
	

}
