import Link from 'next/link'
import type React from 'react'
import Header from '@/app/components/header/Header'
import { Button } from '@/app/components/ui/button'
import { postService } from '@/services/postService'

interface PostPageProps {
	params: {
		id: string
	}
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
	const post = await postService.getById(params.id)

	return (
		<div className='p-10 relative h-[100vh]'>
			<Header />
			<div className='mt-5'>
				<h1 className='uppercase scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
					{post.title}
				</h1>
				<p className='leading-7 [&:not(:first-child)]:mt-6 w-[50%]'>
					{post.body}
				</p>
			</div>
			<Link href='/'>
				<Button variant={'outline'} className='absolute bottom-10 right-10'>
					Back
				</Button>
			</Link>
		</div>
	)
}

export default PostPage
