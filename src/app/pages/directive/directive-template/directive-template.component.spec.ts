import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTemplateComponent } from './directive-template.component';

describe('DirectiveTemplateComponent', () => {
  let component: DirectiveTemplateComponent;
  let fixture: ComponentFixture<DirectiveTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectiveTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
