# Schema Information

## investortable
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
property_id | string    | not null, foreign key (references properties)

## followtable
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
property_id | integer   | not null, foreign key (references properties)

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_url   | string    | not null, unique
property_id | integer   | not null, foreign key (references properties)
type        | string    | not null

## properties
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
str_num     | integer   |
street      | string    | not null, index true
city        | string    | not null, index true
state       | string    | not null, index true
zip         | integer   | not null, index true
description | string    | not null
price       | integer   | not null, index true
num_investors| integer  | not null
num_beds    | integer   | not null
prop_type   | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
phone_number    | string    |
