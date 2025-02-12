import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/shadcn/avatar';
import { Badge } from '@/components/shadcn/badge';
import { Button } from '@/components/shadcn/button';
import { Post } from '@/lib/schema';
import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { formatDate } from '@/hooks/use-posts';

function Detail() {
  const location = useLocation();
  const post: Post = location.state?.user;
  const navigate = useNavigate();

  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    );
  }, []);

  const returnToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col gap-6">
      <div ref={cardRef} className="rounded-md border p-6 w-fit">
        <div className="flex items-center gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage
              className="rounded-full"
              src={post.author.avatar}
              alt={post.author.name}
            />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">{post.author.name}</h1>
            <h2 className="text-gray-500">
              @{post.author.name.toLowerCase().replace(' ', '_')}
            </h2>
            <p className="text-sm text-gray-600">
              {formatDate(post.publishDate)}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600 mt-2">{post.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Badge variant={'outline'} key={category.id}>
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <Button onClick={returnToHome} className="w-fit cursor-pointer">
        <ArrowLeftIcon /> Back
      </Button>
    </div>
  );
}

export default Detail;
