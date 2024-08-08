CREATE TABLE [dbo].[Cost] (
    [CostId]                 INT        IDENTITY (1, 1) NOT NULL,
    [ParkingCostPerHourBike] FLOAT (53) NOT NULL,
    [ParkingCostPerHourCar]  FLOAT (53) NOT NULL,
    PRIMARY KEY CLUSTERED ([CostId] ASC)
);

