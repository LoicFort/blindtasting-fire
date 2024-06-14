import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {UsersService} from "../../../core/services/users.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {


}
