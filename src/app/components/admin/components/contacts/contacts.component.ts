import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, mapTo, merge } from 'rxjs';
import { IUser } from '../../interface/user';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, ResolveEnd, ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {


  constructor(private adminService: AdminService, private router: Router, private activedRoute: ActivatedRoute) {}

  personalList!: Observable<IUser[]>;

  ngOnInit(): void {
    this.personalList = this.activedRoute.data.pipe(map((data) => data?.['users']));


}
}