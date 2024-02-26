export default class TimeHelper {
    static getCurrentDate():Date {
        return new Date();
    }
     
    static getTimeStampISOString(){
        return  new Date().toISOString();
    }
    static timestampToReadable(timestamp: number):string {
        const date = new Date(timestamp);

        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + (date.getDate() + 1)).slice(-2);
        const hours = ('0' + (date.getHours() + 1)).slice(-2);
        const minutes = ('0' + (date.getMinutes() + 1)).slice(-2);
        const seconds = ('0' + (date.getSeconds() + 1)).slice(-2);

        const readableFOrmat = `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`;

        return readableFOrmat;

    }

    static formatDate(date: Date, format: string= 'YYYY-MM-DD HH:mm:ss'): string {

        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2,'0');
        const day = date.getDate().toString().padStart(2,'0');
        const hours = date.getHours().toString().padStart(2,'0');
        const minutes = date.getMinutes().toString().padStart(2,'0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return format
                    .replace('YYYY', year)
                    .replace('MM', month)
                    .replace('DD', day)
                    .replace('HH', hours)
                    .replace('mm', minutes)
                    .replace('ss', seconds)
    }

    static getTimeDifference(startTimestamp: number, endTimeSTamp: number): number {
        return Math.abs(endTimeSTamp - startTimestamp);
    }
    static async sleep(ms: number){
        return new Promise(resolve => setTimeout(resolve,ms));
    }

    static addMinutesToCurrentTime(minutes: number){
        var twentyMinutesLater = new Date();
        return twentyMinutesLater.setMinutes(twentyMinutesLater.getMinutes() + 20);
    }
}
