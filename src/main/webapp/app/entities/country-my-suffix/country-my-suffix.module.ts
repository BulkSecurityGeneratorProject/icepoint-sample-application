import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IcepointSampleApplicationSharedModule } from 'app/shared';
import {
    CountryMySuffixComponent,
    CountryMySuffixDetailComponent,
    CountryMySuffixUpdateComponent,
    CountryMySuffixDeletePopupComponent,
    CountryMySuffixDeleteDialogComponent,
    countryRoute,
    countryPopupRoute
} from './';

const ENTITY_STATES = [...countryRoute, ...countryPopupRoute];

@NgModule({
    imports: [IcepointSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CountryMySuffixComponent,
        CountryMySuffixDetailComponent,
        CountryMySuffixUpdateComponent,
        CountryMySuffixDeleteDialogComponent,
        CountryMySuffixDeletePopupComponent
    ],
    entryComponents: [
        CountryMySuffixComponent,
        CountryMySuffixUpdateComponent,
        CountryMySuffixDeleteDialogComponent,
        CountryMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IcepointSampleApplicationCountryMySuffixModule {}
