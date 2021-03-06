import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment-timezone';


@Component({
	selector: 'speaker-dteail-dialog',
	templateUrl: './speaker-detail-dialog.component.html',
	styleUrls: ['./speaker-detail-dialog.component.scss']
})
export class SpeakerDetailDialog {

	constructor( @Inject(MD_DIALOG_DATA) public data: any) { }

	formatTimeFromSetting(dateStr, format) {
		return moment(dateStr).tz(this.data.timeZone).format(format);
	}

	goToLink(link) {
		window.open(link, '_blank');
	}
}
