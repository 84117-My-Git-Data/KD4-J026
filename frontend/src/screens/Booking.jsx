import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Unavbar from "../components/unavbar";

function Booking() {
    const [vehicleNo, setVehicleNo] = useState('');
    const [date, setDate] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [slot, setSlot] = useState('');
    const [floor, setFloor] = useState('');
    const [totalCost, setTotalCost] = useState('');
    const [selectedSlotId, setSelectedSlotId] = useState(null);

    const navigate = useNavigate();

    const handleVehicleTypeChange = (e) => {
        setVehicleType(e.target.value);
    };

    const handleFloorChange = (e) => {
        setFloor(e.target.value);
    };

    const handleSlotSelect = (slotId) => {
        setSelectedSlotId(slotId);
        setSlot(slotId); // Ensure the slot state is updated
    };

    const getVehicleTypeForBackend = () => {
        if (vehicleType === 'car') return 2;
        if (vehicleType === 'bike') return 1;
        return null;
    };

    const getFloorForBackend = () => {
        if (floor === 'A') return 1;
        if (floor === 'B') return 2;
        return null;
    };

    const onBooking = () => {
        if (vehicleNo.length === 0) {
            toast.error('Please enter Vehicle No');
        } else if (date.length === 0) {
            toast.error('Please enter Date');
        } else if (vehicleType.length === 0) {
            toast.error('Please enter Vehicle Type');
        } else if (startTime.length === 0) {
            toast.error('Please enter Start Time');
        } else if (endTime.length === 0) {
            toast.error('Please enter End Time');
        } else if (slot.length === 0) {
            toast.error('Please select a Slot');
        } else if (floor.length === 0) {
            toast.error('Please select a Floor');
        } else {
            const vehicleTypeForBackend = getVehicleTypeForBackend();
            const floorForBackend = getFloorForBackend();

            if (vehicleTypeForBackend !== null && floorForBackend !== null) {
                // Call register API, check the status
                fetch('http://localhost:5285/api/Booking/AddBooking', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        vehicleNo,
                        date,
                        vehicleType: vehicleTypeForBackend,
                        startTime,
                        endTime,
                        slot,
                        floor: floorForBackend,
                        totalCost
                    }),
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        toast.success('Successfully booked');
                        navigate('/userbooking');
                    } else {
                        toast.error(data.error || 'Booking failed');
                    }
                })
                .catch(error => toast.error('Error: ' + error.message));
            }
        }
    };

    const Slot = ({ slotId, isSelected, onSelect }) => {
        return (
            <div
                onClick={() => onSelect(slotId)}
                style={{
                    display: 'inline-block',
                    width: '60px',
                    height: '60px',
                    margin: '5px',
                    backgroundColor: isSelected ? 'red' : 'green',
                    cursor: 'pointer',
                    textAlign: 'center',
                    lineHeight: '60px',
                    color: 'white',
                }}
            >
                {isSelected ? 'Selected' : slotId}
            </div>
        );
    };

    const Floor = ({ floorLetter }) => {
        return (
            <div>
                <h4>Floor {floorLetter}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '330px' }}>
                    {Array.from({ length: 15 }, (_, index) => {
                        const slotId = `${floorLetter}${index + 1}`;
                        return (
                            <Slot
                                key={slotId}
                                slotId={slotId}
                                isSelected={selectedSlotId === slotId}
                                onSelect={handleSlotSelect}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="container-fluid">
            <Unavbar />
            <h2 className="page-header text-center my-4">Bookings</h2>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="vehicleNo" className="form-label">Vehicle No:</label>
                                    <input
                                        id="vehicleNo"
                                        value={vehicleNo}
                                        onChange={(e) => setVehicleNo(e.target.value)}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Date</label>
                                    <input
                                        id="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Vehicle Type</label>
                                    <div className="form-check">
                                        <input
                                            id="vehicleTypeCar"
                                            type="radio"
                                            value="car"
                                            checked={vehicleType === 'car'}
                                            onChange={handleVehicleTypeChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="vehicleTypeCar" className="form-check-label">Car</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="vehicleTypeBike"
                                            type="radio"
                                            value="bike"
                                            checked={vehicleType === 'bike'}
                                            onChange={handleVehicleTypeChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="vehicleTypeBike" className="form-check-label">Bike</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Floor</label>
                                    <div className="form-check">
                                        <input
                                            id="floorA"
                                            type="radio"
                                            value="A"
                                            checked={floor === 'A'}
                                            onChange={handleFloorChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="floorA" className="form-check-label">A</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="floorB"
                                            type="radio"
                                            value="B"
                                            checked={floor === 'B'}
                                            onChange={handleFloorChange}
                                            className="form-check-input"
                                        />
                                        <label htmlFor="floorB" className="form-check-label">B</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="startTime" className="form-label">Start Time</label>
                                    <input
                                        id="startTime"
                                        value={startTime}
                                        onChange={(e) => setStartTime(e.target.value)}
                                        type="time"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="endTime" className="form-label">End Time</label>
                                    <input
                                        id="endTime"
                                        value={endTime}
                                        onChange={(e) => setEndTime(e.target.value)}
                                        type="time"
                                        className="form-control"
                                    />
                                </div>
                                <Floor floorLetter={floor} />
                                <button type="button" onClick={onBooking} className="btn btn-primary">Book</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;
