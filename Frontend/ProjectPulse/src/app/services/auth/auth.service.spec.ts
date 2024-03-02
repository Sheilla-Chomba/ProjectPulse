import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { expectedUsers } from '../testdata/user';

describe('AuthService', () => {
  let service: AuthService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('logs in a user', ()=>{
    let mockUser = {
      email: 'user@gmail.com',
      password: 'user',
    };
    
    service.loginUser(mockUser).subscribe(res=>{
      expect(res.message).toEqual('Logged  in successfully');
    })

    const mockReq = testingController.expectOne('http://localhost:4100/auth/login');
    expect(mockReq.request.method).toEqual('POST')
    expect(mockReq.request.body).toEqual(mockUser)
    mockReq.flush({"message": "Logged  in successfully"})
  })
});
