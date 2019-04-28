import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return Object.keys(it).some(k => {
        // console.log(it[k]);
        return it[k] && String(it[k]).toLowerCase().includes(searchText)
      }
      );
    });
  }
}
