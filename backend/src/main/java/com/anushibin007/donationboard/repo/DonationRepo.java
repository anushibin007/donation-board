package com.anushibin007.donationboard.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.anushibin007.donationboard.model.DonationData;

@RepositoryRestResource(collectionResourceRel = "donations", path = "donations")
public interface DonationRepo extends CrudRepository<DonationData, Integer> {

}
