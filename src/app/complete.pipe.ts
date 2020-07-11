import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/Todo';

@Pipe({
  name: 'complete'
})
export class CompletePipe implements PipeTransform {
  
  transform(value: Todo[], filter: string): Todo[] {
    let displayedObj: Todo[] = [];
    if(filter) {
      for(let obj of value) {
        if(obj.task.toLowerCase().includes(filter.toLowerCase())) {
          displayedObj.push(obj);
        }
      }
    } else {
      displayedObj = value;
    }
    return displayedObj;
  }
}

