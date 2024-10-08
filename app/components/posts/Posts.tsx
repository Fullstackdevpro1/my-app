import type React from 'react'
import type { PostInterface } from '@/types/post-types'
import PostCard from './PostCard'

interface TypesProps {
	posts: PostInterface[]
}

const Posts: React.FC<TypesProps> = ({ posts }) => {
	return (
		<div className='grid sm:grid-cols-2 lg:grid-cols-4  gap-4'>
			{posts && posts.length > 0 ? (
				posts.map(post => <PostCard post={post} key={post.id} />)
			) : (
				<p>No posts available.</p>
			)}
		</div>
	)
}

export default Posts
