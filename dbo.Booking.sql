CREATE TABLE [dbo].[Booking] (
    [BookingId]          INT          IDENTITY (1, 1) NOT NULL,
    [VehicleNumber]      VARCHAR (10) NOT NULL,
    [Date]               DATE         NOT NULL,
    [ParkingCostPerHour] FLOAT (53)   NOT NULL,
    [VehicleType]        TINYINT      NOT NULL,
    [StartTime]          DATETIME     NOT NULL,
    [EndTime]            DATE         NOT NULL,
    [TotalCost]          FLOAT (53)   NOT NULL,
    [Slots]              INT          NOT NULL,
    PRIMARY KEY CLUSTERED ([BookingId] ASC)
);

