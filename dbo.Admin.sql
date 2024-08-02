CREATE TABLE [dbo].[Admin] (
    [AdminId]    INT          IDENTITY (1, 1) NOT NULL,
    [FirstName]  VARCHAR (50) NOT NULL,
    [LastName]   VARCHAR (10) NOT NULL,
    [Email]      VARCHAR (50) NOT NULL,
    [Password]   VARCHAR (10) NOT NULL,
    [IsloggedIn] BIT          NOT NULL,
	UNIQUE (Email),
    PRIMARY KEY CLUSTERED ([AdminId] ASC)
);

