// DEPENDENCIES
import { Component, OnInit } from '@angular/core';

// JSON CLASSES & INTERFACES
import { IServerMessage } from '../../interfaces/server-message';
import { IUser } from '../../interfaces/user';
import { User } from '../../classes/user';

// PROVIDERS
import { Router } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { AnswerQuestionService } from '../../services/answer-question/answer-question.service';
import { IQuestion } from '../../interfaces/question';
import { Question } from '../../classes/question';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: IUser;
  questions: Array<IQuestion>;
  constructor(private _router: Router, private _userService: UserService, private _answQuesServ: AnswerQuestionService) {
    this.user = new User();
    this.questions = [];
  }

  ngOnInit() {
    this._userService.user.subscribe((observeUser) => {
      this.user = observeUser;
      console.log(observeUser);
    });
    this._userService.ensureUserIsLoggedIn((res) => {
      if (!res.success) {
        this._router.navigateByUrl('/');
      } else {
      }
    });
    this._answQuesServ.getQuestions((response) => {
      this._answQuesServ.questions.subscribe((questions) => {
        console.log('updated questions');
        console.log(questions);
        this.questions = questions;
      });
    });
  }

  logout() {

    // this will attempt to navigate to login reg regardless
    // of response. Login reg component can handle this
    this._userService.logoutUser((response) => {
      this._router.navigate(['']);
    });
  }

  addQuestion() {
    this._router.navigate(['new-question']);
  }

  showAnswers(id: string) {
    this._router.navigateByUrl(`/question/${id}`);
  }

  answerQuestion(id: string) {
    this._router.navigateByUrl(`/new-answer/${id}`);
  }
}
