package com.anushibin007.donationboard.repo;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.anushibin007.donationboard.model.PurchaseTransactions;

@RepositoryRestResource(collectionResourceRel = "transactions", path = "transactions")
public interface PurchaseTransactionsRepo extends PagingAndSortingRepository<PurchaseTransactions, Integer> {

}
