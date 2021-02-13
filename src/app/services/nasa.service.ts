import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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
    getImage(requestDate: Date): Observable<Potd> {
        return of(this.testRecord);

        return this.httpClient
            .get<Potd[]>(this.getRequestUrl(requestDate))
            .pipe(
                map((imgList) => imgList[0])
            );
    }

    private getRequestUrl(requestDate: Date): string {
        const date = this.datePipe.transform(requestDate, 'yyyy-MM-dd');

        return `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${date}&end_date=${date}`
    }

    private testRecord: Potd = {
        "copyright": "Petr Horalek",
        "date": "2021-01-01",
        "explanation": "The South Celestial Pole is easy to spot in star trail images of the southern sky. The extension of Earth's axis of rotation to the south, it's at the center of all the southern star trail arcs. In this starry panorama streching about 60 degrees across deep southern skies the South Celestial Pole is somewhere near the middle though, flanked by bright galaxies and southern celestial gems. Across the top of the frame are the stars and nebulae along the plane of our own Milky Way Galaxy. Gamma Crucis, a yellowish giant star heads the Southern Cross near top center, with the dark expanse of the Coalsack nebula tucked under the cross arm on the left. Eta Carinae and the reddish glow of the Great Carina Nebula shine along the galactic plane near the right edge. At the bottom are the Large and Small Magellanic clouds, external galaxies in their own right and satellites of the mighty Milky Way. A line from Gamma Crucis through the blue star at the bottom of the southern cross, Alpha Crucis, points toward the South Celestial Pole, but where exactly is it? Just look for south pole star Sigma Octantis. Analog to Polaris the north pole star, Sigma Octantis is little over one degree fom the the South Celestial pole.",
        "hdurl": "https://apod.nasa.gov/apod/image/2101/2020_12_16_Kujal_Jizni_Pol_1500px-3.png",
        "media_type": "image",
        "service_version": "v1",
        "title": "Galaxies and the South Celestial Pole",
        "url": "https://apod.nasa.gov/apod/image/2101/2020_12_16_Kujal_Jizni_Pol_1500px-3.jpg"
    };
}