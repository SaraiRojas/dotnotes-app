-- -----------------------------------------------------
-- Drop Schema dotnotes_db
-- -----------------------------------------------------

-- DROP SCHEMA IF EXISTS dotnotes_db;
DROP DATABASE IF EXISTS dotnotes_db;

-- -----------------------------------------------------
-- Create Schema dotnotes_db
-- -----------------------------------------------------

-- CREATE SCHEMA IF NOT EXISTS dotnotes_db charset utf8;
CREATE DATABASE dotnotes_db charset utf8;
USE dotnotes_db;

-- -----------------------------------------------------
-- Create Table `dotnotes_db`.`brands`
-- -----------------------------------------------------
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users(
    id              INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_code       VARCHAR(255) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP NULL DEFAULT NULL,
    deleted_at      TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (id)
);

-- -----------------------------------------------------
-- Dump data on Table `dotnotes_db`.`users`
-- -----------------------------------------------------

LOCK TABLES users WRITE;
INSERT INTO users VALUES (1, '32-861-5209', null, null, null) ,(2, '82-995-6538', null, null, null) ,(3, '84-293-7581', null, null, null) ,(4, '48-297-5187', null, null, null) ,(5, '43-962-0926', null, null, null) ,(6, '70-578-6268', null, null, null) ,(7, '18-519-6391', null, null, null) ,(8, '46-455-8643', null, null, null) ,(9, '13-115-8552', null, null, null) ,(10, '73-104-4497', null, null, null);
UNLOCK TABLES;


-- -----------------------------------------------------
-- Create Table `dotnotes_db`.`notes`
-- -----------------------------------------------------

DROP TABLE IF EXISTS notes;

CREATE TABLE IF NOT EXISTS notes(
    id              INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title           VARCHAR(255) NOT NULL,
    content         TEXT DEFAULT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP NULL DEFAULT NULL,
    deleted_at      TIMESTAMP NULL DEFAULT NULL,
    user_id        INT UNSIGNED DEFAULT NULL,
    PRIMARY KEY (id),
    KEY fk_notes_user_id (user_id asc) visible,
    CONSTRAINT fk_notes_user_id
        FOREIGN KEY (user_id)
        REFERENCES users (id)
);


LOCK TABLES notes WRITE;
INSERT INTO notes VALUES (1, 'One and Only, The (Eneste ene, Den)', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.', null, null, null, 10),(2, 'London Paris New York', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', null, null, null, 10),(3, 'Mission, The (Cheung fo)', 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.', null, null, null, 6),(4, 'Eagle Has Two Heads, The (L''aigle à deux têtes)', 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', null, null, null, 2),(5, 'Sheepman, The', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.', null, null, null, 6),(6, 'Other People''s Money', 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.', null, null, null, 4),(7, 'Samurai Assassin (Samurai)', 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', null, null, null, 10),(8, 'Overboard', 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.', null, null, null, 5),(9, 'Devil to Pay!, The', 'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', null, null, null, 10),(10, 'Campus Radio', 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.', null, null, null, 4),(11, 'Target Shoots First, The', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', null, null, null, 9),(12, 'After the Thin Man', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.', null, null, null, 10),(13, 'Girl', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.', null, null, null, 5),(14, 'Boot, Das (Boat, The)', 'Vivamus in felis eu sapien cursus vestibulum.', null, null, null, 10),(15, 'Life with Father', 'Nam dui.', null, null, null, 6),(16, 'Parenthood', 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.', null, null, null, 10),(17, 'Entre Amigos (Planta 4ª)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', null, null, null, 1),(18, 'Apple Dumpling Gang Rides Again, The', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', null, null, null, 3),(19, 'Showgirls', 'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.', null, null, null, 10),(20, 'Stevie Nicks: Live at Red Rocks', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', null, null, null, 5),(21, 'Hitler: A Film from Germany (Hitler - ein Film aus Deutschland)', 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', null, null, null, 2),(22, 'The Day That Lasted 21 Years', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.', null, null, null, 1),(23, 'Cops', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.', null, null, null, 1),(24, 'Warning for the Joensson Gang (Varning för Jönssonligan)', 'Nulla tellus. In sagittis dui vel nisl.', null, null, null, 3),(25, 'Legionnaire', 'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.', null, null, null, 6),(26, 'By the Sea', 'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.', null, null, null, 3),(27, 'Year of the Comet', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', null, null, null, 3),(28, 'Bionicle: Mask of Light (Bionicle: Mask of Light - The Movie)', 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.', null, null, null, 7),(29, 'Proposition, The', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', null, null, null, 3),(30, 'Favela Rising', 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.', null, null, null, 5);
UNLOCK TABLES;

-- -- -----------------------------------------------------
-- -- Create Table `dotnotes_db`.`users`
-- -- -----------------------------------------------------

-- drop table if exists users;

-- create table if not exists users(
--     id int unsigned auto_increment not null,
--     created_at timestamp null default null,
--     updated_at timestamp null default null,
--     first_name varchar(255) not null,
--     last_name varchar(255) not null,
--     email varchar(255) not null,
--     password varchar(255) not null,
--     image varchar(255) null, 
--     cart_id int unsigned default null,
--     role_id int unsigned default null,
--     primary key(id),
--     key fk_users_role_idx (role_id asc) visible,
--     key fk_users_cart_idx (cart_id asc) visible,
--     constraint fk_users_role_idx
--         foreign key (role_id)
--         references roles (id),
--     constraint fk_users_cart_idx
--         foreign key (cart_id)
--         references carts (id)
-- );

-- -- -----------------------------------------------------
-- -- Dump data on Table `dotnotes_db`.`users`
-- -- -----------------------------------------------------

-- lock tables users write;
-- insert into users values (1, NULL, NULL, 'Jesus', 'Aguirre', 'jaguirre@laniak.com', '$2a$12$NA9mZyGR09yG683FgxvOHOHeU8k94eGFr4AIJENXwsNnUEzC1js0y', 'user_1.jpg', NULL, 1); 
-- unlock tables;
