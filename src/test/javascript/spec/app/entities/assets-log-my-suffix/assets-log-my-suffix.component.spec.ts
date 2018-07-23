/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { IcepointSampleApplicationTestModule } from '../../../test.module';
import { AssetsLogMySuffixComponent } from 'app/entities/assets-log-my-suffix/assets-log-my-suffix.component';
import { AssetsLogMySuffixService } from 'app/entities/assets-log-my-suffix/assets-log-my-suffix.service';
import { AssetsLogMySuffix } from 'app/shared/model/assets-log-my-suffix.model';

describe('Component Tests', () => {
    describe('AssetsLogMySuffix Management Component', () => {
        let comp: AssetsLogMySuffixComponent;
        let fixture: ComponentFixture<AssetsLogMySuffixComponent>;
        let service: AssetsLogMySuffixService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [IcepointSampleApplicationTestModule],
                declarations: [AssetsLogMySuffixComponent],
                providers: []
            })
                .overrideTemplate(AssetsLogMySuffixComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(AssetsLogMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AssetsLogMySuffixService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new AssetsLogMySuffix(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.assetsLogs[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
