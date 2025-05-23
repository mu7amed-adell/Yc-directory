import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { Button } from './ui/button';
import { author } from '@/sanity/schemaTypes/author';
import { Author, Startup } from '@/sanity/types';
import { Skeleton } from './ui/skeleton';
import { cn } from "@/lib/utils"


export type startupTypeCard = Omit<Startup, "author"> & {author?: Author};

const StartupCard = ({post}: {post: startupTypeCard}) => {
  const {
    _createdAt, 
    views, 
    author, 
    title, 
    category, 
    _id, 
    image, 
    description 
  } = post;
  
  return (
    <li className='startup-card group'>
      <div className='flex-between'>

        <p className='startup_card_date'>
          {formatDate(_createdAt)}
        </p>   
        <div className='flex gap-1.5'>
          <EyeIcon className='size-6'/>
          <span className='text-16-medium'>{views}</span>
        </div>

      </div>

      <div className='flex-between mt-5 gap-5'>

        <div className='felx-1'>

          <Link href={`/user/${author?._id}`}>
          <p className='text-16-medium line-clamp-1'>{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className='test-25-semibold line-clamp-1'>
              {title}
            </h3>
          </Link>

        </div>

        <Link href={`/user/${author?._id}`}>
          <Image src={author?.image!} alt={author?.name!} width={48} height={48} className="rounded-full" />
        </Link>

      </div>

      <Link href={`/startup/${_id}`}>

        <p className='startup-card_desc'>
          {description}
        </p>
        <Image src={image} alt='startup-card_img' className='startup-card_img'/>

      </Link>

      <div className='flex-between gap-3 mt-5'>
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className='text-meduim'> {category}</p>
          </Link>
          <Button className='startup-card_btn' asChild>
            <Link href={`startups/${_id}`}>Details</Link>
          </Button>

      </div>


    </li>
  )
};
export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default StartupCard