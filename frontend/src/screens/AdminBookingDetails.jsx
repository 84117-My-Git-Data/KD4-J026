import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { getAllBookings } from "../services/booking";

function AdminBookingDetails() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchBookings = async () => {
    debugger;
    try {
      //const response = await fetch('http://localhost:5285/api/Booking');
      const response = await getAllBookings()
      console.log(response.status);
      if (response.status == 200){
        debugger;
          //const data = response.data;
         // console.log(data)
          setBookings(response.data);
      } else {
        setError('Failed to fetch bookings');
      }
    } catch (err) {
      setError('Error fetching bookings: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchBookings()
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Navbar />
      <h2 style={{ textAlign: 'center' }}>Booking Details</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          margin: '20px 0',
          fontSize: '16px',
        }}
      >
        <thead>
          <tr>
            {[
              'Booking ID',
              'Vehicle Number',
              'Booking Date',
              'Vehicle Type',
              'Start Time',
              'End Time',
              'Total Cost',
              'Slots',
              'User Id',
              'Actions'
            ].map((header) => (
              <th
                key={header}
                style={{
                  borderBottom: '2px solid #ddd',
                  padding: '10px',
                  textAlign: 'left',
                  backgroundColor: '#f4f4f4',
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.BookingId}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{booking.bookingId}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{booking.vehicleNumber}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{new Date(booking.date).toLocaleDateString()}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{booking.vehicleType}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{booking.startTime}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{booking.endTime}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{booking.totalCost}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{booking.slots}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{booking.userId}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                <button
                  onClick={() => console.log('Edit booking with ID:', booking.BookingId)}
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => console.log('Delete booking with ID:', booking.BookingId)}
                  style={{ marginRight: '10px' }}
                >
                  Delete
                </button>
                <button
                  onClick={() => console.log('Payment for booking with ID:', booking.BookingId)}
                >
                  Payment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBookingDetails;
