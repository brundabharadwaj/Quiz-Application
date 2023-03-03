# Quiz-Application _ Design Details
Database Design :

<b>Table: Users</b></br>
user_id (int, primary key)</br>
name (varchar)</br>
email (varchar)</br>
password (varchar)</br>

<b>Table: Quizzes</b></br>
quiz_id (int, primary key)</br>
quiz_name (varchar)</br>
quiz_description (varchar)</br>
quiz_maker_id (int, foreign key to Users.user_id)</br>

 <b>Table: Questions</b></br>
question_id (int, primary key)</br>
question_text (varchar)</br>
question_difficulty (varchar)</br>
  
Table: Answers</br>
answer_id (int, primary key)</br>
answer_text (varchar)</br>
is_correct (boolean)</br>

Table: Quiz_Questions</br>
quiz_id (int, foreign key to Quizzes.quiz_id)</br>
question_id (int, foreign key to Questions.question_id)</br>

Table: Question_Answers</br>
question_id (int, foreign key to Questions.question_id)</br>
answer_id (int, foreign key to Answers.answer_id)</br>

