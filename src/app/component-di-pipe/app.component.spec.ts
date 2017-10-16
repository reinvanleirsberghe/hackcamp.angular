import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MovieListComponent,
        MovieComponent,
        MovieHoverInfoComponent,
        HeaderComponent,
        SidebarComponent,
        MenubarComponent,
        ShortenPipe,
      ],
      imports: [
        BrowserModule
      ],
      providers: [ApiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as logo 'app'`, async(() => {
    expect(component.logo).toEqual('../assets/images/hackflix_logo.svg');
  }));

  it(`should have as PICTURES_CDN_URL 'app'`, async(() => {
    expect(component.PICTURES_CDN_URL).toEqual(PICTURES_CDN_URL);
  }));

  it('should have a list of 50 movies', async(() => {
    expect(component.movies.length).toEqual(50);
  }));

  it('should render a list of movies', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.movie').length).toEqual(50);
  }));

  it('should have "All" category selected by default', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const tab = compiled.querySelector('.tab-filter > .filters > ul.filters-list > li > a.selected ');

    expect(tab.textContent).toEqual('All');
  }));

  it('should select the category tab when click on it', async(() => {
    const compiled = fixture.debugElement.nativeElement;

    const tabs = compiled.querySelectorAll('.tab-filter > .filters > ul.filters-list > li > a');
    const selectedTab = tabs[3];

    selectedTab.click();
    fixture.detectChanges();

    expect(selectedTab.className).toEqual('selected');
  }));
});
