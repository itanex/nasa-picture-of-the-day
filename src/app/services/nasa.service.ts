import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Potd } from '../picture-of-the-day/potd.model';

/** 
 * Service to request data from the NASA API. 
 * @remarks Only implements fetching of Picture of the Day as per design
 * */
@Injectable({
    providedIn: 'root'
})
export class NasaService {
    constructor(
        /** HTTP Client reference to make API request */
        private httpClient: HttpClient,
        /** DatePipe reference for convenient date transforms */
        private datePipe: DatePipe,
    ) { }

    /**
     * Fetches the first image returned for the requested date.
     * @param requestDate The requested date of the image
     * @return Observable of the Picture of the Day Record
     */
    getImages(requestDate: Date): Observable<Potd[]> {
        return this.httpClient
            .get<Potd[]>(this.getRequestUrl(requestDate));
    }

    private getRequestUrl(requestDate: Date): string {
        const date = this.datePipe.transform(requestDate, 'yyyy-MM-dd');

        return `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${date}&end_date=${date}`
    }
}
