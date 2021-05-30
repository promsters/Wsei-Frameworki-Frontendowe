import {User} from "../entities/User";

class UserApi {
    static async getUserData(userId: number): Promise<User> {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await userResponse.json();
        const photoResponse = await fetch(`https://jsonplaceholder.typicode.com/photos/${userId}`);
        const photoData = await photoResponse.json();

        return {...userData, ...{avatar: photoData.thumbnailUrl}} as User;
    }
}

export default UserApi;
