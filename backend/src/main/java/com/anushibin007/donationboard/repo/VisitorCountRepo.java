package com.anushibin007.donationboard.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.anushibin007.donationboard.model.VisitorCount;

@RepositoryRestResource(collectionResourceRel = "visitorcount", path = "visitorcount")
public interface VisitorCountRepo extends CrudRepository<VisitorCount, Integer> {

}
