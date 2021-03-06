import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IcepointSampleApplicationSharedModule } from 'app/shared';
import {
    AssetsLogMySuffixComponent,
    AssetsLogMySuffixDetailComponent,
    AssetsLogMySuffixUpdateComponent,
    AssetsLogMySuffixDeletePopupComponent,
    AssetsLogMySuffixDeleteDialogComponent,
    assetsLogRoute,
    assetsLogPopupRoute
} from './';

const ENTITY_STATES = [...assetsLogRoute, ...assetsLogPopupRoute];

@NgModule({
    imports: [IcepointSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        AssetsLogMySuffixComponent,
        AssetsLogMySuffixDetailComponent,
        AssetsLogMySuffixUpdateComponent,
        AssetsLogMySuffixDeleteDialogComponent,
        AssetsLogMySuffixDeletePopupComponent
    ],
    entryComponents: [
        AssetsLogMySuffixComponent,
        AssetsLogMySuffixUpdateComponent,
        AssetsLogMySuffixDeleteDialogComponent,
        AssetsLogMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IcepointSampleApplicationAssetsLogMySuffixModule {}
