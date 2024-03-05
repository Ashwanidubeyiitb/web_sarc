-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS todo_app;

-- Use the created database
USE todo_app;

-- Table to store user information
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Table to store todo items
CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    description TEXT,
    date DATE,
    time TIME,
    completed BOOLEAN NOT NULL DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Check if the index exists before creating it
SELECT COUNT(*) INTO @index_exists FROM information_schema.statistics WHERE table_schema = 'todo_app' AND table_name = 'todos' AND index_name = 'idx_user_id';

-- If index doesn't exist, create it using dynamic SQL
-- IF @index_exists = 0 THEN
--     SET @sql = CONCAT('CREATE INDEX idx_user_id ON todos(user_id)');
--     PREPARE stmt FROM @sql;
--     EXECUTE stmt;
--     DEALLOCATE PREPARE stmt;
-- END IF;

-- Insert sample data for users
INSERT INTO users (email, password) VALUES ('user1@example.com', 'password123');
INSERT INTO users (email, password) VALUES ('user2@example.com', 'password456');

-- Insert sample data for todo items
INSERT INTO todos (title, user_id, description, date, time, completed) VALUES ('Task 1', 1, 'Description of Task 1', '2024-03-05', '10:00:00', 0);
INSERT INTO todos (title, user_id, description, date, time, completed) VALUES ('Task 2', 1, 'Description of Task 2', '2024-03-06', '12:00:00', 1);
INSERT INTO todos (title, user_id, description, date, time, completed) VALUES ('Task 3', 2, 'Description of Task 3', '2024-03-07', '14:00:00', 0);
