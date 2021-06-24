class PostApi {
    static async getUserPosts(userId: number): Promise<Post[]> {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const postsData = await postsResponse.json();

        for (let post of postsData) {
            const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
            post.comments = await commentsResponse.json();
        }

        return postsData;
    }

    static async getAllUserPostComments(userId: number): Promise<Comment[]> {
        const data = await this.getUserPosts(userId);
        let comments: Comment[] = [];
        data.forEach((post: Post) => {
            comments =comments.concat(post.comments);
        });

        return new Promise<Comment[]>((resolve, reject) => {
            resolve(comments);
        });
    }

    static async getAllPostComments(postId: number): Promise<Comment[]> {
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments: Comment[] = await commentsResponse.json();

        return new Promise<Comment[]>((resolve, reject) => {
            resolve(comments);
        });
    }
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    comments: Comment[];
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export default PostApi;
