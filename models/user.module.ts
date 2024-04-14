import { IUser } from '@/types/user';
import { Schema, model, models } from 'mongoose'

const userSchema = new Schema<IUser>({
    profile: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN', 'SELLER'],
        default: 'USER'
    }
})

const userModel = models.User || model('User', userSchema);

export default userModel