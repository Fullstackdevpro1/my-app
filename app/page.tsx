import Posts from './components/posts/Posts'
import Header from './components/header/Header'
import { postService } from '@/services/postService'

export default async function PostsPage() {
	const posts = await postService.getAll()

	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<Header />
			<main>
				<Posts posts={posts} />
			</main>
		</div>
	)
}
