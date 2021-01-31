import {AfterContentInit, Component} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements AfterContentInit {

  item$: Observable<any[]>;
  cols: number;
  gridByBreakpoint = {
    xl: 6,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private mediaObserver: MediaObserver,
    firestore: AngularFirestore
  ) {
    this.item$ = firestore.collection('channels').valueChanges();
  }

  ngAfterContentInit() {
    this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      this.cols = this.gridByBreakpoint[changes[0].mqAlias];
      console.log('cols', this.cols);
    });
  }

}
