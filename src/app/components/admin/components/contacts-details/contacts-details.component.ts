import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Observable, map } from 'rxjs';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss'],
})
export class ContactsDetailsComponent implements OnInit {
  id!: number;
  user!: Observable<IUser>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user']));
  }
}
