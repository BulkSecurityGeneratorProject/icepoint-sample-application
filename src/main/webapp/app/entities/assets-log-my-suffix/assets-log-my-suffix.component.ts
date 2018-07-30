import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IAssetsLogMySuffix } from 'app/shared/model/assets-log-my-suffix.model';
import { Principal } from 'app/core';
import { AssetsLogMySuffixService } from './assets-log-my-suffix.service';

@Component({
    selector: 'jhi-assets-log-my-suffix',
    templateUrl: './assets-log-my-suffix.component.html'
})
export class AssetsLogMySuffixComponent implements OnInit, OnDestroy {
    assetsLogs: IAssetsLogMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private assetsLogService: AssetsLogMySuffixService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.assetsLogService.query().subscribe(
            (res: HttpResponse<IAssetsLogMySuffix[]>) => {
                this.assetsLogs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInAssetsLogs();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IAssetsLogMySuffix) {
        return item.id;
    }

    registerChangeInAssetsLogs() {
        this.eventSubscriber = this.eventManager.subscribe('assetsLogListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
