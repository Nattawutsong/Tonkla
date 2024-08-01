import { useState, useRef } from "react";

let nextId = 0;

export default function CreateCard() {
    const [formData, setFormData] = useState({
        name: '',
        note: '',
        address: '',
        phone: '',
        employeeId: ''
    });
    const [image, setImage] = useState(null);
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const imageRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const handleClickAdd = () => {
        const { name, note, address, phone, employeeId } = formData;
        if (!name || !note || !address || !phone || !employeeId) {
            alert("Please fill in all fields.");
            return;
        }
        setCards(prevCards => [
            ...prevCards,
            {
                id: nextId++,
                ...formData,
                image: image ? URL.createObjectURL(image) : null
            }
        ]);
        resetForm();
    };

    const resetForm = () => {
        setFormData({
            name: '',
            note: '',
            address: '',
            phone: '',
            employeeId: ''
        });
        setImage(null);
        if (imageRef.current) {
            imageRef.current.value = '';
        }
    };

    const handleViewDetails = (card) => {
        setSelectedCard(card);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-gray-900 min-h-screen text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">Add Business Card</h1>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                <label className="block text-lg font-semibold mb-2">Name</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-700 rounded w-full p-3 mb-4 bg-gray-900 text-white"
                />
                <label className="block text-lg font-semibold mb-2">Card Information</label>
                <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    className="border border-gray-700 rounded w-full p-3 mb-4 bg-gray-900 text-white"
                    rows="4"
                />
                <label className="block text-lg font-semibold mb-2">Address</label>
                <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border border-gray-700 rounded w-full p-3 mb-4 bg-gray-900 text-white"
                />
                <label className="block text-lg font-semibold mb-2">Phone Number</label>
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-700 rounded w-full p-3 mb-4 bg-gray-900 text-white"
                />
                <label className="block text-lg font-semibold mb-2">Employee ID</label>
                <input
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    className="border border-gray-700 rounded w-full p-3 mb-4 bg-gray-900 text-white"
                />
                <label className="block text-lg font-semibold mb-2">Upload Image</label>
                <input
                    type="file"
                    accept="image/*"
                    ref={imageRef}
                    onChange={handleImageChange}
                    className="mb-4 text-gray-900"
                />
                <button
                    onClick={handleClickAdd}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition"
                >
                    Add Card
                </button>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-center">Business Card List</h2>
            {cards.length === 0 ? (
                <p className="text-lg text-center text-gray-400">No cards available</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg shadow-md">
                        <thead className="bg-gray-700 text-gray-200">
                            <tr>
                                <th className="border border-gray-600 p-4">No.</th>
                                <th className="border border-gray-600 p-4">Name</th>
                                <th className="border border-gray-600 p-4">Card Information</th>
                                <th className="border border-gray-600 p-4">Address</th>
                                <th className="border border-gray-600 p-4">Phone Number</th>
                                <th className="border border-gray-600 p-4">Employee ID</th>
                                <th className="border border-gray-600 p-4">Image</th>
                                <th className="border border-gray-600 p-4">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards.map((card, index) => (
                                <tr key={card.id} className="hover:bg-gray-700">
                                    <td className="border border-gray-600 p-3 text-center">{index + 1}</td>
                                    <td className="border border-gray-600 p-3">{card.name}</td>
                                    <td className="border border-gray-600 p-3">{card.note}</td>
                                    <td className="border border-gray-600 p-3">{card.address}</td>
                                    <td className="border border-gray-600 p-3">{card.phone}</td>
                                    <td className="border border-gray-600 p-3">{card.employeeId}</td>
                                    <td className="border border-gray-600 p-3 text-center">
                                        {card.image && (
                                            <img
                                                src={card.image}
                                                alt={`Image of ${card.name}`}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                        )}
                                    </td>
                                    <td className="border border-gray-600 p-3 text-center">
                                        <button
                                            onClick={() => handleViewDetails(card)}
                                            className="bg-blue-600 text-white py-1 px-3 rounded-lg shadow hover:bg-blue-700 transition"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal for card details */}
            {selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h2 className="text-2xl font-bold mb-4">Card Details</h2>
                        <p className="mb-2"><strong>Name:</strong> {selectedCard.name}</p>
                        <p className="mb-2"><strong>Card Information:</strong> {selectedCard.note}</p>
                        <p className="mb-2"><strong>Address:</strong> {selectedCard.address}</p>
                        <p className="mb-2"><strong>Phone Number:</strong> {selectedCard.phone}</p>
                        <p className="mb-2"><strong>Employee ID:</strong> {selectedCard.employeeId}</p>
                        {selectedCard.image && (
                            <img
                                src={selectedCard.image}
                                alt={`Detailed view of ${selectedCard.name}`}
                                className="w-full h-48 object-cover mb-4 rounded"
                            />
                        )}
                        <button
                            onClick={handleCloseModal}
                            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
