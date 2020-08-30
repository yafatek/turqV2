CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY                  NOT NULL,
  first_name text                        ,
  last_name text                         ,
  email text UNIQUE                      NOT NULL,
  password text                          NOT NULL
);

CREATE TABLE IF NOT EXISTS contests (
  id SERIAL PRIMARY KEY                  NOT NULL,
  title TEXT                             NOT NULL,
  end_date TIMESTAMP                     NOT NULL,
  prize INT                              NOT NULL,
  rules TEXT                             ,
  criteria TEXT                          NOT NULL,
  description TEXT                       NOT NULL,
  approved BOOL DEFAULT 'false'          NOT NULL,
  author_id INT REFERENCES users (id)    NOT NULL
);

CREATE TABLE IF NOT EXISTS legislation (
  id SERIAL PRIMARY KEY                  NOT NULL,
  title TEXT                             NOT NULL,
  chapter TEXT                           NOT NULL,
  section TEXT                           NOT NULL,
  accomplishes TEXT                      NOT NULL,
  terms TEXT                             NOT NULL,
  purpose TEXT                           NOT NULL,
  provisions TEXT                        NOT NULL,
  exceptions TEXT                              ,
  other TEXT                             ,
  contest_id INT REFERENCES contests (id) NOT NULL,
  author_id INT REFERENCES users (id)    NOT NULL
);
