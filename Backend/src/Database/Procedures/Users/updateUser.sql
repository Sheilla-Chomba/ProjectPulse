CREATE OR ALTER PROCEDURE updateUser(
    @user_id VARCHAR(100),
    @f_name VARCHAR(200), 
    @l_name VARCHAR(200),
    @email VARCHAR(200), 
    @password VARCHAR(100))
AS
BEGIN
    UPDATE Users SET 
        f_name=@f_name, 
        l_name=@l_name, 
        email=@email, 
        Password=@password
    WHERE user_id = @user_id
END