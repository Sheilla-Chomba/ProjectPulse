CREATE TABLE Users(
    user_id VARCHAR(100) NOT NULL, 
    f_name VARCHAR(100) NOT NULL,
    l_name VARCHAR(100) NOT NULL, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    Password VARCHAR(200) NOT NULL, 
    isDeleted BIT Default 0
)

-- ALTER TABLE Users ADD isWelcomed BIT Default 0

-- SELECT * FROM Users

