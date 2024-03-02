import { TestBed } from '@angular/core/testing';

import { ApiConnectService } from '../api-connect/api-connect.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { expectedUsers } from '../testdata/user';

describe('ApiConnectService', () => {
  let service: ApiConnectService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiConnectService);
    testingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('gets all users', ()=>{
    service.getUsers().subscribe((users: any)=>{
      expect(users).toBeTruthy()
      expect(users.length).toBe(4)
    })

    const mockReq = testingController.expectOne('http://localhost:4100/users')
    mockReq.flush(Object.values(expectedUsers))
    expect(mockReq.request.method).toBe('GET')
  })

  it('gets user by id', ()=>{
    let id = 'b4f4d037-21d4-4673-915c-4caa4d2010a4';
    service.getOneUser(id).subscribe((user:any)=>{
      expect(user).toBeTruthy();
      expect(user.email).toBe('trial@gmail.com');
    })

    const mockReq = testingController.expectOne(`http://localhost:4100/users/${id}`)
    mockReq.flush(expectedUsers[0])
    expect(mockReq.request.method).toBe('GET')
  })

  it('registers a user', ()=>{
    
    service.signUpUser('user','user','user@gmail.com','user' ).subscribe(res=>{
      expect(res.message).toEqual('Account created successfully');
    })
    let mockUser = {
      f_name: 'user',
      l_name: 'user',
      email: 'user@gmail.com',
      password: 'user',
    };

    const mockReq = testingController.expectOne('http://localhost:4100/users');
    expect(mockReq.request.method).toEqual('POST')
    expect(mockReq.request.body).toEqual(mockUser)
    mockReq.flush({"message": "Account created successfully"})
  })

  it('deletes a user', ()=>{
    let id = 'b4f4d037-21d4-4673-915c-4caa4d2010a4';

    service.deleteUser(id).subscribe((res:any)=>{
      expect(res).toBeTruthy();
      expect(res.message).toBe('Account deleted successfully')
    })

    const mockReq = testingController.expectOne(`http://localhost:4100/users/delete/${id}`)
    expect(mockReq.request.method).toBe('DELETE')
  })
});

