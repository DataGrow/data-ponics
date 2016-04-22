let Schema = mongoose.Schema;

let Data = new Schema(
{
    waterTemp: Number,
    airTemp: Number,
    humidity: Number,
    light: Number
});



let ArchivedUnit = new Schema(
{
    name: { type: String, required: true },
    product: { type: String, required: true },
    harvest: {
        id: { type: Number, required: true},
        startTime: { type: Date }
        endTime: { type: Date, default: Date.now }
    }, 

    day: [{
            hour: [{
                     Data
                  }]
         }]
});

module.exports = mongoose.model("ArchivedUnit", ArchivedUnit);