import { Component, Input, NgZone, OnInit } from '@angular/core';
import { CloudinaryUploadService } from 'src/app/shared/service/upload/cloudinary.service';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { server } from 'src/environments/environment';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @Input()
  responses: Array<any>;
 
  @Output()
  uploadResponseEvent:EventEmitter<String>;
 
  public hasBaseDropZoneOver: boolean = false;

  public uploader: FileUploader;
  public title: string;

  constructor(
      private cloudinary: Cloudinary,
      private zone: NgZone,
      private uploadService:CloudinaryUploadService
  ) {
      this.responses = [];
      this.title = '';
      this.uploadResponseEvent = new EventEmitter<String>();
  }

  ngOnInit(): void {
      this.uploader = this.uploadService.getUploader();
      // Add custom tag for displaying the uploaded photo in the list
      this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
          form.append('upload_preset', server.upload_presist);
          let tags = 'myphotoalbum';
          if (this.title) {
              form.append('context', `photo=${this.title}`);
              tags = `myphotoalbum,${this.title}`;
          }
          
          form.append('tags', tags);
          form.append('file', fileItem);
         
          fileItem.withCredentials = false;
          return { fileItem, form };
      };
    
      // Insert or update an entry in the responses array
      const upsertResponse = fileItem => {
          this.zone.run(() => {
              // Update an existing entry if it's upload hasn't completed yet

              // Find the id of an existing item
              const existingId = this.responses.reduce((prev, current, index) => {
                  if (current.file.name === fileItem.file.name && !current.status) {
                      return index;
                  }
                  return prev;
              }, -1);
              if (existingId > -1) {
                  // Update existing item with new data
                  this.responses[existingId] = Object.assign(this.responses[existingId], fileItem);
              } else {
                  // Create new response
                  this.responses.push(fileItem);
              }
          });
      };

      this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) =>{
          upsertResponse(
              {
                  file: item.file,
                  status,
                  data: JSON.parse(response)
              }
            
          );
            this.uploadResponse(JSON.parse(response));
            }
      this.uploader.onProgressItem = (fileItem: any, progress: any) =>
          upsertResponse(
              {
                  file: fileItem.file,
                  progress
              }
          );
  }

  updateTitle(value: string) {
    
      this.title = value;
  }
  public uploadResponse(value:any){
      this.uploadResponseEvent.emit(value);
  }
  public fileOverBase(e: any): void {
      this.hasBaseDropZoneOver = e;
  }

  getFileProperties(fileProperties: any) {
      // Transforms Javascript Object to an iterable to be used by *ngFor
      if (!fileProperties) {
          return null;
      }
      return Object.keys(fileProperties)
          .map((key) => ({ 'key': key, 'value': fileProperties[key] }));
  }
}