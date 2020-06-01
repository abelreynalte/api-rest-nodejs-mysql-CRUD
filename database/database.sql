create database ng_games_db;

use ng_games_db;

create table game(
    id int(11) not null auto_increment primary key,
    title varchar(180),
    description varchar(255),
    image varchar(200),
    created_at timestamp default current_timestamp
);

rename table game to games;

describe games;