import { Component } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    rows: any[] = [];
    cols: any[] = [];

    myUploader($event): void {
        var file: File = $event.files[0];
        var myReader: FileReader = new FileReader();
        var self = this;

        // Clean up the data....
        this.cols = [];
        this.rows = [];

        // This actually reads in the file. 
        myReader.readAsText(file);

        // This gets called when the file has been loaded. 
        myReader.onloadend = function (e) {

            let resText: string = myReader.result as string;

            // Split each line out as a separate string. 
            var rows = resText.split(/\r\n|\r|\n/g);

            // Get the headers from the first row.
            var s = rows[0].split(',');
            s.forEach(e => {
                self.cols.push({ field: e, header: e })
            });
            console.log(self.cols);

            // Get the rowdata itself.
            var temp: any[] = [];
            for (var i = 1; i < rows.length - 1; i++) {
                temp.push(rows[i].split(','));
            }
            self.rows = temp;
        }
    }

    clearGrid(){
        this.cols=[];
        this.rows = [];
    }
}
