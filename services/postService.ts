import type { PostInterface } from '@/types/post-types'

class PostService {
	private baseUrl = 'https://jsonplaceholder.typicode.com/posts/'
	async getAll(): Promise<PostInterface[]> {
		try {
			const response = await fetch(this.baseUrl)

			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`)
			}

			const data = await response.json()
			return data
		} catch (error) {
			console.error('Failed to fetch posts:', error)
			throw error
		}
	}

	async getById(id: string): Promise<PostInterface> {
		try {
			const response = await fetch(this.baseUrl + id)

			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`)
			}

			const data = await response.json()
			return data
		} catch (error) {
			console.error('Failed to fetch posts:', error)
			throw error
		}
	}
}

export const postService = new PostService()
