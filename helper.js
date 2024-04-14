const User = require('./user');

class UserHelper {
    async createUser(body) {
        try {
            const user = new User(body);
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getAllUsers() {
        try {
            return await User.find({});
        } catch (error) {
            throw error;
        }
    }

    async getUserById(query) {
        try {
            const user = await User.findById(query.user_id);
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(body) {
        try {
            console.log("body ------", body);
            const user = await User.findByIdAndUpdate(body.user_id, body, { new: true });
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(query) {
        try {
            const result = await User.deleteOne({ _id: query.user_id });
            if (result.deletedCount === 0) {
                throw new Error("User not found or already deleted");
            }
            return { message: "User deleted successfully" };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserHelper();
