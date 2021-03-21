import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {

    filterFnc(obj: any, filtred: any){
        let search=[]
        if(filtred.age!==''||
        filtred.gender === '' ||
        filtred.nationality === '' ||
        filtred.room_space === ''){
            return search.push(filtred.age)

        }else if(filtred.age===''&&
        filtred.gender !== '' &&
        filtred.nationality === '' &&
        filtred.room_space === ''){
            return search.push(filtred.gender)

        }else if(filtred.age===''&&
        filtred.gender === '' &&
        filtred.nationality !== '' &&
        filtred.room_space === ''){
            return search.push(filtred.nationality)

        }
        else if(filtred.age===''&&
        filtred.gender === '' &&
        filtred.nationality === '' &&
        filtred.room_space !== ''){
            return search.push(filtred.room_space)

        }
 
    }
  transform(element: any[], filtred: any): any[] {
    if (!element) return [];
    if (
      filtred.age === '' &&
      filtred.gender === '' &&
      filtred.nationality === '' &&
      filtred.room_space === ''
    )
      return element;

    return element.filter((ele) => {
      return this.filterFnc(ele,filtred)
    });
  }
}
