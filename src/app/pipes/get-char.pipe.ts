import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  //even though we named the pipe 'get-char', it is known now aas 'getChar'
  name: 'getChar',
})
export class GetCharPipe implements PipeTransform {
  //we changed the type from unknown to 'any'
  transform(value: any, ...args: any[]): any {
    if (args[0] && args[0] < value.length) {
      return value[args[0]];
    }
    return value[0];
  }
}
