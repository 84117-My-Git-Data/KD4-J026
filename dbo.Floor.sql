CREATE TABLE [dbo].[Floor] (
    [Id]            INT IDENTITY (1, 1) NOT NULL,
    [FloorNumber]   INT NOT NULL,
    [SlotAvailable] INT NOT NULL,
    [SlotOccupied]  INT NOT NULL,
    [TotalSlot]     INT NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

