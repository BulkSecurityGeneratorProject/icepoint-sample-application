import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IAssetsLogMySuffix } from 'app/shared/model/assets-log-my-suffix.model';
import { AssetsLogMySuffixService } from './assets-log-my-suffix.service';

@Component({
    selector: 'jhi-assets-log-my-suffix-update',
    templateUrl: './assets-log-my-suffix-update.component.html'
})
export class AssetsLogMySuffixUpdateComponent implements OnInit {
    private _assetsLog: IAssetsLogMySuffix;
    isSaving: boolean;
    transDatetime: string;

    constructor(private assetsLogService: AssetsLogMySuffixService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ assetsLog }) => {
            this.assetsLog = assetsLog;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.assetsLog.transDatetime = moment(this.transDatetime, DATE_TIME_FORMAT);
        if (this.assetsLog.id !== undefined) {
            this.subscribeToSaveResponse(this.assetsLogService.update(this.assetsLog));
        } else {
            this.subscribeToSaveResponse(this.assetsLogService.create(this.assetsLog));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IAssetsLogMySuffix>>) {
        result.subscribe((res: HttpResponse<IAssetsLogMySuffix>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get assetsLog() {
        return this._assetsLog;
    }

    set assetsLog(assetsLog: IAssetsLogMySuffix) {
        this._assetsLog = assetsLog;
        this.transDatetime = moment(assetsLog.transDatetime).format(DATE_TIME_FORMAT);
    }
}
