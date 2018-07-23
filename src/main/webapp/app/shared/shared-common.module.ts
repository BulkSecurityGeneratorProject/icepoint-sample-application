import { NgModule } from '@angular/core';

import { IcepointSampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [IcepointSampleApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [IcepointSampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class IcepointSampleApplicationSharedCommonModule {}
