const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spot"
    },
    date: String,
    approved: Boolean
});

module.exports = mongoose.model("Booking", BookingSchema);