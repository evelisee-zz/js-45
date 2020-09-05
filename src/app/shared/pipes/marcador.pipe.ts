import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marcador'
})
export class MarcadorPipe implements PipeTransform {


  transform(value: string): string {

    if(value.toLowerCase().includes('importante')){
      return `[URGENT] ${value}`
    }

    if(value.toLowerCase().includes('favoritos')){
      return `[FAV] ${value}`
    }
    return value;
  }

}
