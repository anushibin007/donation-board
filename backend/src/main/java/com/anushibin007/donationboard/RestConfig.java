package com.anushibin007.donationboard;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import com.anushibin007.donationboard.model.DonationData;
import com.anushibin007.donationboard.model.PurchaseTransactions;

@Configuration
public class RestConfig implements RepositoryRestConfigurer {
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		config.exposeIdsFor(DonationData.class, PurchaseTransactions.class);
	}
}
