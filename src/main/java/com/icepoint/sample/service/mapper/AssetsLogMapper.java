package com.icepoint.sample.service.mapper;

import com.icepoint.sample.domain.*;
import com.icepoint.sample.service.dto.AssetsLogDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity AssetsLog and its DTO AssetsLogDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface AssetsLogMapper extends EntityMapper<AssetsLogDTO, AssetsLog> {



    default AssetsLog fromId(Long id) {
        if (id == null) {
            return null;
        }
        AssetsLog assetsLog = new AssetsLog();
        assetsLog.setId(id);
        return assetsLog;
    }
}
