package com.icepoint.sample.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.icepoint.sample.service.AssetsLogService;
import com.icepoint.sample.web.rest.errors.BadRequestAlertException;
import com.icepoint.sample.web.rest.util.HeaderUtil;
import com.icepoint.sample.service.dto.AssetsLogDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing AssetsLog.
 */
@RestController
@RequestMapping("/api")
public class AssetsLogResource {

    private final Logger log = LoggerFactory.getLogger(AssetsLogResource.class);

    private static final String ENTITY_NAME = "assetsLog";

    private final AssetsLogService assetsLogService;

    public AssetsLogResource(AssetsLogService assetsLogService) {
        this.assetsLogService = assetsLogService;
    }

    /**
     * POST  /assets-logs : Create a new assetsLog.
     *
     * @param assetsLogDTO the assetsLogDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new assetsLogDTO, or with status 400 (Bad Request) if the assetsLog has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/assets-logs")
    @Timed
    public ResponseEntity<AssetsLogDTO> createAssetsLog(@RequestBody AssetsLogDTO assetsLogDTO) throws URISyntaxException {
        log.debug("REST request to save AssetsLog : {}", assetsLogDTO);
        if (assetsLogDTO.getId() != null) {
            throw new BadRequestAlertException("A new assetsLog cannot already have an ID", ENTITY_NAME, "idexists");
        }
        AssetsLogDTO result = assetsLogService.save(assetsLogDTO);
        return ResponseEntity.created(new URI("/api/assets-logs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /assets-logs : Updates an existing assetsLog.
     *
     * @param assetsLogDTO the assetsLogDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated assetsLogDTO,
     * or with status 400 (Bad Request) if the assetsLogDTO is not valid,
     * or with status 500 (Internal Server Error) if the assetsLogDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/assets-logs")
    @Timed
    public ResponseEntity<AssetsLogDTO> updateAssetsLog(@RequestBody AssetsLogDTO assetsLogDTO) throws URISyntaxException {
        log.debug("REST request to update AssetsLog : {}", assetsLogDTO);
        if (assetsLogDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        AssetsLogDTO result = assetsLogService.save(assetsLogDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, assetsLogDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /assets-logs : get all the assetsLogs.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of assetsLogs in body
     */
    @GetMapping("/assets-logs")
    @Timed
    public List<AssetsLogDTO> getAllAssetsLogs() {
        log.debug("REST request to get all AssetsLogs");
        return assetsLogService.findAll();
    }

    /**
     * GET  /assets-logs/:id : get the "id" assetsLog.
     *
     * @param id the id of the assetsLogDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the assetsLogDTO, or with status 404 (Not Found)
     */
    @GetMapping("/assets-logs/{id}")
    @Timed
    public ResponseEntity<AssetsLogDTO> getAssetsLog(@PathVariable Long id) {
        log.debug("REST request to get AssetsLog : {}", id);
        Optional<AssetsLogDTO> assetsLogDTO = assetsLogService.findOne(id);
        return ResponseUtil.wrapOrNotFound(assetsLogDTO);
    }

    /**
     * DELETE  /assets-logs/:id : delete the "id" assetsLog.
     *
     * @param id the id of the assetsLogDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/assets-logs/{id}")
    @Timed
    public ResponseEntity<Void> deleteAssetsLog(@PathVariable Long id) {
        log.debug("REST request to delete AssetsLog : {}", id);
        assetsLogService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
