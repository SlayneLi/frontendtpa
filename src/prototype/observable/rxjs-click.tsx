import {fromEvent} from 'rxjs'
import { throttleTime } from 'rxjs/operators'

const delayClick$ = fromEvent(document,'click');

delayClick$
    .pipe(
        throttleTime(5000)
    )
    .subscribe((e:any) => alert(e));