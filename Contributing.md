# Quiz-Application
Database Design :

Table: Users

user_id (int, primary key)
name (varchar)
email (varchar)
password (varchar)

Table: Quizzes
quiz_id (int, primary key)
quiz_name (varchar)
quiz_description (varchar)
quiz_maker_id (int, foreign key to Users.user_id)

Table: Questions
question_id (int, primary key)
question_text (varchar)
question_difficulty (varchar)
Table: Answers

answer_id (int, primary key)
answer_text (varchar)
is_correct (boolean)

Table: Quiz_Questions
quiz_id (int, foreign key to Quizzes.quiz_id)
question_id (int, foreign key to Questions.question_id)

Table: Question_Answers
question_id (int, foreign key to Questions.question_id)
answer_id (int, foreign key to Answers.answer_id)

