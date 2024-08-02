CREATE TABLE [dbo].[User] (
    [UserId]      INT          IDENTITY (1, 1) NOT NULL,
    [FirstName]   VARCHAR (50) NOT NULL,
    [LastName]    VARCHAR (50) NOT NULL,
    [Email]       VARCHAR (50) NOT NULL,
    [Password]    VARCHAR (50) NOT NULL,
    [PhoneNumber] VARCHAR (10) NOT NULL,
    [Gender]      VARCHAR (10) NULL,
    [Age]         INT          NOT NULL,
    [IsloggedIn]  BIT          NOT NULL,
    PRIMARY KEY CLUSTERED ([UserId] ASC),
    UNIQUE NONCLUSTERED ([PhoneNumber] ASC),
    UNIQUE NONCLUSTERED ([Email] ASC)
);

