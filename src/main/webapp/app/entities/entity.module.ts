import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IcepointSampleApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { IcepointSampleApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { IcepointSampleApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { IcepointSampleApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { IcepointSampleApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { IcepointSampleApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { IcepointSampleApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { IcepointSampleApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
import { IcepointSampleApplicationAssetsLogMySuffixModule } from './assets-log-my-suffix/assets-log-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        IcepointSampleApplicationRegionMySuffixModule,
        IcepointSampleApplicationCountryMySuffixModule,
        IcepointSampleApplicationLocationMySuffixModule,
        IcepointSampleApplicationDepartmentMySuffixModule,
        IcepointSampleApplicationTaskMySuffixModule,
        IcepointSampleApplicationEmployeeMySuffixModule,
        IcepointSampleApplicationJobMySuffixModule,
        IcepointSampleApplicationJobHistoryMySuffixModule,
        IcepointSampleApplicationAssetsLogMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IcepointSampleApplicationEntityModule {}
