import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ThemeService } from "ng2-charts";
import { FileUploader, FileUploaderOptions } from "ng2-file-upload";
import {server} from '../../../../environments/environment'
@Injectable({
    providedIn:'root'
})
export class CloudinaryUploadService{
  private http:HttpClient;
  constructor(){
  }
  private uploader: FileUploader;
  public getUploader() : FileUploader{
    const uploaderOptions: FileUploaderOptions = {
        url:server.cloudinary_url,
        autoUpload:true,
        isHTML5:true,
        removeAfterUpload:true,
        headers: [
            {
              name: 'X-Requested-With',
              value: 'XMLHttpRequest'
            }
          ]
  };
  this.uploader = new FileUploader(uploaderOptions);
  return this.uploader;
}
}