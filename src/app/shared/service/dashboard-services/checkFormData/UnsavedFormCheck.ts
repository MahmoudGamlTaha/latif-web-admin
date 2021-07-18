import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { HasUnsavedData } from './UnsavedData';


@Injectable()
export class HasUnsavedDataGuard implements HasUnsavedData {
  canDeactivate(component: HasUnsavedData): boolean {
    if (component.hasUnsavedData && component.hasUnsavedData()) {
      return confirm('You have some unsaved form data.Are you sure, you want to leave this page?');
    }
    return true;
  }
  hasUnsavedData():boolean{
    return true;
  }
}