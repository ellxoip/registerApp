import { TestBed } from '@angular/core/testing';

import { RegistrodeprofesoresService } from './registrodeprofesores.service';

describe('RegistrodeprofesoresService', () => {
  let service: RegistrodeprofesoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrodeprofesoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
