CREATE TABLE [dbo].[Slot] (
    [SlotId]        INT          IDENTITY (1, 1) NOT NULL,
    [SlotName]       NVARCHAR(10)          NOT NULL,
    [IsOccupied]    BIT          NOT NULL,
    [FloorId]    INT          NOT NULL,
    PRIMARY KEY CLUSTERED ([SlotId] ASC),
	UNIQUE ([SlotName]),
    FOREIGN KEY ([FloorId]) REFERENCES [dbo].[Floor] ([FloorId])
);

