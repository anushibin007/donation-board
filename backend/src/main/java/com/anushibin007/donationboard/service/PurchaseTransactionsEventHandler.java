package com.anushibin007.donationboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;
import com.anushibin007.donationboard.model.DonationData;
import com.anushibin007.donationboard.model.PurchaseTransactions;
import com.anushibin007.donationboard.repo.DonationRepo;

@Component
@RepositoryEventHandler(PurchaseTransactions.class)
public class PurchaseTransactionsEventHandler {

	private final DonationRepo donationRepo;

	@Autowired
	public PurchaseTransactionsEventHandler(DonationRepo donationRepo) {
		this.donationRepo = donationRepo;
	}

	@HandleAfterCreate
	public void handleAfterCreate(PurchaseTransactions transaction) {
		DonationData donationData = donationRepo.findById(1)
				.orElseThrow(() -> new RuntimeException("DonationData not found"));

		donationData.setCurrentDonation(donationData.getCurrentDonation() + transaction.getAmount());
		donationRepo.save(donationData);
	}
}
