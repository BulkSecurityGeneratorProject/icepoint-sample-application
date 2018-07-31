import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IcepointSampleApplicationSharedModule } from 'app/shared';
import {
    RegionMySuffixComponent,
    RegionMySuffixDetailComponent,
    RegionMySuffixUpdateComponent,
    RegionMySuffixDeletePopupComponent,
    RegionMySuffixDeleteDialogComponent,
    regionRoute,
    regionPopupRoute
} from './';

const ENTITY_STATES = [...regionRoute, ...regionPopupRoute];

@NgModule({
    imports: [IcepointSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RegionMySuffixComponent,
        RegionMySuffixDetailComponent,
        RegionMySuffixUpdateComponent,
        RegionMySuffixDeleteDialogComponent,
        RegionMySuffixDeletePopupComponent
    ],
    entryComponents: [
        RegionMySuffixComponent,
        RegionMySuffixUpdateComponent,
        RegionMySuffixDeleteDialogComponent,
        RegionMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IcepointSampleApplicationRegionMySuffixModule {}
