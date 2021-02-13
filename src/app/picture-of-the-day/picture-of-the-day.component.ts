import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NasaService } from '../services/nasa.service';
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
    ]
})
export class PictureOfTheDayComponent implements OnInit {
    /** 
     * Selected date to request the image of the day.
     * @remarks Bind to the form and used to send date to API request
     * */
    imageDate: Date = new Date();

    /**
     * Obseravable that represents the record received from the Nasa API
     */
    public data$!: Observable<Potd>;

    constructor(
        private nasaService: NasaService
    ) { }

    /**
     * Implement OnInit interface. Requests the Image for TODAY.
     */
    ngOnInit(): void {
        this.getSpecificDateImage(new Date());
    }

    /**
     * Requests the image from the Nasa API using the requested date.
     * @param requestedDate The date to request the Image for
     */
    getSpecificDateImage(requestedDate: Date) {
        this.data$ = this.nasaService
            .getImage(requestedDate);
    }
}
