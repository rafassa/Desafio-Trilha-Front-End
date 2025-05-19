import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class PesquisaPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!Array.isArray(value)) return []; // Retorna um array vazio se `value` não for um array
    if (!args) return value;
    args = args.toLowerCase();
    return value.filter((item: any) => JSON.stringify(item).toLowerCase().includes(args));
  }
  

}
