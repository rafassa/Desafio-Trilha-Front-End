import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class PesquisaPipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!Array.isArray(value)) return [];
    if (!args) return value;
    args = args.toLowerCase();
    return value.filter((item: any) =>
      JSON.stringify(item).toLowerCase().includes(args),
    );
  }
}
