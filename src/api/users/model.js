const { Schema, model } = require('mongoose')

const AddressSchema = new Schema({
  address1: String,
  address2: String,
  zip_code: String,
  state: String,
  city: String,
  country: String
})

const UserSchema = new Schema(
  {
    name: String,
    dob: Date,
    address: AddressSchema,
    description: String
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt'
    }
  }
)

model('User', UserSchema)
