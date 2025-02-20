
import { Heart, Search, PlusSquare, Home, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-instagram-white border-b border-gray-200 z-50">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold">Reactogram</div>
          
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-center max-w-xs">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher"
                className="bg-instagram-background rounded-lg pl-10 pr-4 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <Home className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <MessageCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <PlusSquare className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <Heart className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-gray-300 transition-all">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </div>
    </header>
  );
};
