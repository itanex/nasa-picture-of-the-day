import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faExternalLinkAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { NasaService } from '../services/nasa.service';
import { dateToStuct } from '../shared/functions/date-to-stuct.fn';
import { NgbDateCustomParserFormatter } from '../shared/ngb-date-custom-parser-format'
import { Potd } from './potd.model';

/**
 * Picture of the Day Component displays date selector and the record of 
 * the requested date. Initial request is for TODAY.
 */
@Component({
    selector: 'picture-of-the-day',
    templateUrl: 'picture-of-the-day.component.html',
    styleUrls: [
        'picture-of-the-day.component.scss'
    ],
    providers: [{
        provide: NgbDateAdapter,
        useClass: NgbDateNativeAdapter
    }, {
        provide: NgbDateParserFormatter,
        useClass: NgbDateCustomParserFormatter
    }]
})
export class PictureOfTheDayComponent implements OnInit {
    /** 
     * Selected date to request the image of the day.
     * @remarks Bind to the form and used to send date to API request
     * */
    public imageDate!: Date;
    private previousDate!: Date;

    /**
     * Obseravable that represents the record received from the Nasa API
     */
    public data$!: Observable<Potd>;

    /** Past Date to restrict the date selector */
    public minDate!: NgbDateStruct;

    /** Current Date to restrict the date selector */
    public maxDate!: NgbDateStruct;

    /** FortAwesome Icon Reference */
    public faCalendarAlt: IconDefinition = faCalendarAlt;
    public faExternalLinkAlt: IconDefinition = faExternalLinkAlt;

    constructor(
        /** Nasa Service Reference */
        private nasaService: NasaService
    ) { }

    /**
     * Implement OnInit interface. Requests the Image for TODAY.
     */
    ngOnInit(): void {
        const todayDate = new Date();
        const pastDate = this.calculateAdjustedDate(todayDate, -2);

        this.imageDate = todayDate;
        this.previousDate = todayDate;
        this.minDate = dateToStuct(pastDate);
        this.maxDate = dateToStuct(todayDate);

        this.getSpecificDateImage(new Date());
    }

    /**
     * Adjusts the provided date by the number of months provided
     * @param date The date to adjust from
     * @param adjustMonth The number of months to adjust by
     */
    calculateAdjustedDate(date: Date, adjustMonth: number): Date {
        let pastDate = new Date(date.getTime());

        pastDate.setMonth(date.getMonth() + adjustMonth);

        return pastDate;
    }

    /**
     * Click Handler. Requests a new Image of the Day
     * @param $event Event passed from control
     */
    onSelectDate($event: any): void {
        this.getSpecificDateImage(this.imageDate);
    }

    /**
     * Requests the image from the Nasa API using the requested date.
     * @param requestedDate The date to request the Image for
     */
    getSpecificDateImage(requestedDate: Date) {
        // prevent current selection re-request
        if (this.previousDate != requestedDate) {
            this.previousDate = requestedDate;

            this.data$ = this.nasaService
                .getImage(requestedDate);
        }
    }
}
