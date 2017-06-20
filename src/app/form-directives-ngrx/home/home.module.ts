import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieComponent} from './movie-list/movie/movie.component';
import {MovieHoverInfoComponent} from './movie-list/movie/movie-hover-info/movie-hover-info.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MenubarComponent} from './menubar/menubar.component';
import {HomeComponent} from './home.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {StatsComponent} from './stats/stats.component';
import { CommentListComponent } from './movie-details/comment-list/comment-list.component';
import { CommentComponent } from './movie-details/comment-list/comment/comment.component';
import { CommentFormComponent } from './movie-details/comment-form/comment-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MovieListComponent,
    MovieComponent,
    MovieHoverInfoComponent,
    SidebarComponent,
    MenubarComponent,
    HomeComponent,
    MovieDetailsComponent,
    StatsComponent,
    CommentListComponent,
    CommentComponent,
    CommentFormComponent,
  ],
  exports: [
    MovieListComponent,
    MovieComponent,
    MovieHoverInfoComponent,
    SidebarComponent,
    MenubarComponent,
    HomeComponent,
    MovieDetailsComponent,
    StatsComponent,
  ]
})
export class HomeModule {
}
