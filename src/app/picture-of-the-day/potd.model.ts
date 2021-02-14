/**
 * Interface model of expected nasa api data
 */
export interface Potd {
    /** Copyright of the Image */
    copyright: string,
    /** Date of the Image */
    date: string,
    /** Provided Image Explaination/Description */
    explanation: string,
    /** High Def URL of the image */
    hdurl: string,
    media_type: string,
    service_version: string,
    /** title of the image */
    title: string,
    /** Basic URL of the image */
    url: string,
}
