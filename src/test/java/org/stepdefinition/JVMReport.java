package org.stepdefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	
	public static  void generateJvmReport(String jsonFile) {
		
		//1.Mention file location
		
		File f=new File(System.getProperty("user.dir")+"\\AllReports\\JVMReport");
		
		//2 Add the Details
		
		Configuration c=new Configuration(f, "Facebook Application");
		
		c.addClassifications("platform", "Windows");
		c.addClassifications("JDK version", "1.8");
		
		//3.Add the json file into list
		
		List<String> l=new ArrayList<String>();
		l.add(jsonFile);
		
		//4 ReportBuilderClass
		
		ReportBuilder r=new ReportBuilder(l, c);
		r.generateReports();
		
		
		

	}

}
