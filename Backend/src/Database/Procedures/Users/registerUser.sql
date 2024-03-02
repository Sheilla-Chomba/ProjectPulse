CREATE OR ALTER PROCEDURE registerUser(
    @user_id VARCHAR(100), 
    @f_name VARCHAR(200),
    @l_name VARCHAR(200),
    @email VARCHAR(255),
    @Password VARCHAR(200)
    )
AS
BEGIN 
    INSERT INTO Users(user_id, f_name,l_name, email, Password)
    VALUES(@user_id, @f_name,@l_name, @email, @Password)
END
