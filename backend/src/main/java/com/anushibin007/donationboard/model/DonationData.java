package com.anushibin007.donationboard.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class DonationData {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int totalDonation;
	private int boostAmount;
	private int currentDonation;

	public int getTotalDonation() {
		return totalDonation;
	}

	public void setTotalDonation(int totalDonation) {
		this.totalDonation = totalDonation;
	}

	public int getBoostAmount() {
		return boostAmount;
	}

	public void setBoostAmount(int boostAmount) {
		this.boostAmount = boostAmount;
	}

	public int getCurrentDonation() {
		return currentDonation;
	}

	public void setCurrentDonation(int currentDonation) {
		this.currentDonation = currentDonation;
	}

}
