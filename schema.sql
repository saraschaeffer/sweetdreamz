DROP TYPE IF EXISTS dream_type;
CREATE TYPE dream_type AS ENUM ('nightmare', 'good dream', 'neutral', 'other');
DROP TYPE IF EXISTS emotions_type;
CREATE TYPE emotions_type AS ENUM ('anxiety', 'fear', 'pleasure', 'joy', 'other');

DROP TABLE IF EXISTS pastdreams;
CREATE TABLE pastdreams
(
  id integer NOT NULL,
  typeofdream dream_type NOT NULL,
  description text,
  people text[],
  recurringdream boolean,
  typeofemotion emotions_type,
  PRIMARY KEY ( id )
);