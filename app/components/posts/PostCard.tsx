'use client'
import Link from 'next/link'
import type React from 'react'
import { useTheme } from 'next-themes'
import type { PostInterface } from '@/types/post-types'

interface PropsTypes {
	post: PostInterface
}

const PostCard: React.FC<PropsTypes> = ({ post }) => {
	const { theme } = useTheme()
	const title = post.title.slice(0, 20)
	return (
		<Link
			href={`post/${post.id}`}
			className={`${
				theme === 'dark' || !theme ? 'bg-black' : 'bg-slate-50'
			} p-5 w-[300px] rounded-3xl border border-solid border-gray-50 flex justify-center items-center cursor-pointer transition-transform duration-150 ease-in-out transform hover:scale-101 active:scale-95`}
		>
			<p className='uppercase'>{title} ...</p>
		</Link>
	)
}

export default PostCard
