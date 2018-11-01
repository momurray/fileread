import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { FileUploadModule } from 'primeng/fileupload';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        ButtonModule,
        FileUploadModule,
        TableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
