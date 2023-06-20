import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {delay, Observable, of} from 'rxjs';
import {AdminService} from '../services/admin.service';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUser[]> {

  constructor(private adminService: AdminService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> {
    return this.adminService.getPeronalList().pipe(
      delay(2000)
    )
  }
}
