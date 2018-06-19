import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TerningspillComponent } from './terningspill.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DropdownModule} from 'primeng/primeng';
import { ButtonModule} from 'primeng/primeng';
import { ProgressSpinnerModule} from 'primeng/primeng';
import { TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule} from 'primeng/primeng';
import { DataTableModule} from 'primeng/primeng';
import { SharedModule} from 'primeng/primeng';



describe('TerningspillComponent', () => {
  let component: TerningspillComponent;
  let fixture: ComponentFixture<TerningspillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        FormsModule,
        DropdownModule,
        ButtonModule,
        ProgressSpinnerModule,
        TabViewModule,
        CodeHighlighterModule,
        DataTableModule,
        SharedModule],
      declarations: [ TerningspillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerningspillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(TerningspillComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.debug(compiled.querySelector('h2').textContent);
    expect(compiled.querySelector('h2').textContent).toContain('Velkommen til terningspillet Nærmest 1');

  }));

});
