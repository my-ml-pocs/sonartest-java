-- Maybe we'll create a person table - something to hold our librarians and borrowers
create table library.PERSON (
    id serial PRIMARY KEY,
    name VARCHAR2(100) NOT NULL
);
