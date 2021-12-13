import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etoilé'
})
export class EtoiléPipe implements PipeTransform {

  transform(nom: string): string{
    return '**'+nom+'**';
  }

}
