CREATE TABLE [dbo].[Floor] (
    [FloorId]       INT           IDENTITY (1, 1) NOT NULL,
    [FloorName]     NVARCHAR (50) NOT NULL,
    [SlotAvailable] INT           NOT NULL,
    [SlotOccupied]  INT           NOT NULL,
    [TotalSlot]     INT           NOT NULL,
    PRIMARY KEY CLUSTERED ([FloorId] ASC)
);

