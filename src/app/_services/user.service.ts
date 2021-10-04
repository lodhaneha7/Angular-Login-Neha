import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    
    getUserDetails() {
        return this.http.get<User[]>(`${environment.apiUrl}api/v1/Shopper?MemberId=1711141`);
    }
}