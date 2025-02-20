
import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
}

export const Post = ({ username, userImage, image, caption, likes }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="bg-instagram-white border border-gray-200 rounded-lg mb-6 animate-fade-up">
      <div className="flex items-center p-4">
        <Avatar className="w-8 h-8 mr-3">
          <AvatarImage src={userImage} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <span className="font-semibold">{username}</span>
      </div>

      <div className="relative aspect-square">
        <img
          src={image}
          alt={`Post by ${username}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Heart
              className={`w-6 h-6 cursor-pointer transition-all ${
                isLiked
                  ? "fill-instagram-red stroke-instagram-red"
                  : "hover:scale-110"
              }`}
              onClick={handleLike}
            />
            <MessageCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <Send className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          </div>
          <Bookmark className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        <div className="font-semibold mb-2">{likesCount} likes</div>
        <div>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </div>
      </div>
    </div>
  );
};
