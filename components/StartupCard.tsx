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

  const pimage = "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/310742344_392526826405264_6825354008718597029_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=h9cUGVFP6I4Q7kNvwEe5tpN&_nc_oc=Adk8ptBsUpwl9gaXGAp3IHj00ko1S3yMfe1Ulg2H-iEj-yUuEwMWrk72ByugWC0Hvjc&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=Nur3dfE9D8A_GPTzdzyqZA&oh=00_AfK9wqKiTBWzH9k8qYnnA9eIYceHJPYw7QXzOwJKAeFkEg&oe=6828561A";
  
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
          <Image src={pimage} alt="placeholder" width={48} height={48} className="rounded-full" />
        </Link>

      </div>

      <Link href={`/startup/${_id}`}>

        <p className='startup-card_desc'>
          {description}
        </p>
        <img src={image} alt='startup-card_img' className='startup-card_img'/>

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