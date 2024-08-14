CREATE TABLE [dbo].[Booking] (
    [BookingId]          INT          IDENTITY (1, 1) NOT NULL,
    [VehicleNumber]      VARCHAR (10) NOT NULL,
    [Date]               DATE         NOT NULL,
    [ParkingCostPerHour] FLOAT (53)   NOT NULL,
    [VehicleType]        TINYINT      NOT NULL,
    [StartTime]          TIME     NOT NULL,
    [EndTime]            TIME         NOT NULL,
    [TotalCost]          FLOAT (53)   NOT NULL,
    [Slot]              NVARCHAR(10)          NOT NULL,
    [UserId]             INT          NOT NULL,
    PRIMARY KEY CLUSTERED ([BookingId] ASC),
    FOREIGN KEY ([UserId]) REFERENCES [dbo].[User] ([UserId])
);

