
import { Header } from "@/components/Header";
import { Post } from "@/components/Post";

const posts = [
  {
    username: "photographe_pro",
    userImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop",
    caption: "Travailler sur mon nouveau projet photo 📸",
    likes: 123,
  },
  {
    username: "tech_lover",
    userImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
    caption: "La technologie d'aujourd'hui est incroyable! 🚀",
    likes: 89,
  },
  {
    username: "future_vision",
    userImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&fit=crop",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop",
    caption: "Le futur est maintenant ✨",
    likes: 432,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-instagram-background">
      <Header />
      <main className="container max-w-2xl mx-auto px-4 pt-20">
        <div className="space-y-6">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
