package com.icepoint.sample.service;

import com.icepoint.sample.service.dto.AssetsLogDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing AssetsLog.
 */
public interface AssetsLogService {

    /**
     * Save a assetsLog.
     *
     * @param assetsLogDTO the entity to save
     * @return the persisted entity
     */
    AssetsLogDTO save(AssetsLogDTO assetsLogDTO);

    /**
     * Get all the assetsLogs.
     *
     * @return the list of entities
     */
    List<AssetsLogDTO> findAll();


    /**
     * Get the "id" assetsLog.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<AssetsLogDTO> findOne(Long id);

    /**
     * Delete the "id" assetsLog.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
