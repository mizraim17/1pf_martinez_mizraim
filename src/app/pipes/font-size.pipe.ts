import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fontSize',
})
export class FontSizePipe implements PipeTransform {
  transform(element: any): string {
    let resultado: string;
    resultado = `${element.nombre}  ${element.apellido}`;
    return resultado;
  }
}
