import { useEffect, useMemo, useState } from "react";
import { PenLine, Send, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type BlogPost = {
  id: string;
  title: string;
  author: string;
  body: string;
  createdAt: string;
};

const STORAGE_KEY = "denticare_blog_posts";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState({ title: "", author: "Denticare Clinic", body: "" });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setPosts(JSON.parse(stored));
    } catch {}
  }, []);

  const featuredPosts = useMemo(
    () => posts.length > 0 ? posts : [
      {
        id: "welcome",
        title: "How to Keep Your Smile Healthy Between Visits",
        author: "Denticare Clinic",
        body: "Brush twice daily, floss gently, and book regular scaling appointments to keep your teeth bright, healthy, and comfortable.",
        createdAt: new Date().toISOString(),
      },
    ],
    [posts],
  );

  const savePosts = (nextPosts: BlogPost[]) => {
    setPosts(nextPosts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPosts));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (form.title.trim().length < 3 || form.body.trim().length < 20) {
      toast.error("Please add a title and a longer blog post.");
      return;
    }
    const newPost: BlogPost = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      author: form.author.trim() || "Denticare Clinic",
      body: form.body.trim(),
      createdAt: new Date().toISOString(),
    };
    savePosts([newPost, ...posts]);
    setForm({ title: "", author: "Denticare Clinic", body: "" });
    toast.success("Blog published.");
  };

  return (
    <section id="blog" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            Clinic Journal
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-3 text-primary-deep">
            Denticare <span className="text-gradient">Blog</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Publish dental tips, clinic updates, treatment guides, or anything the owner wants to share.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-card-gradient rounded-3xl p-6 sm:p-8 border border-border/60 shadow-soft space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-hero-gradient grid place-items-center text-primary-foreground shadow-elegant">
                <PenLine className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-primary-deep">Write a Blog</h3>
                <p className="text-sm text-muted-foreground">Add and publish instantly.</p>
              </div>
            </div>

            <Input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Blog title"
              maxLength={90}
              required
            />
            <Input
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder="Author"
              maxLength={60}
            />
            <Textarea
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
              placeholder="Write your blog post here..."
              rows={8}
              required
            />
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send className="w-4 h-4" />
              Upload Blog
            </Button>
          </form>

          <div className="lg:col-span-3 grid gap-5">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-card-gradient rounded-3xl p-6 sm:p-8 border border-border/60 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                      {new Date(post.createdAt).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-2 text-primary-deep">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">By {post.author}</p>
                  </div>
                  {post.id !== "welcome" && (
                    <button
                      type="button"
                      onClick={() => savePosts(posts.filter((item) => item.id !== post.id))}
                      className="w-10 h-10 rounded-xl grid place-items-center text-muted-foreground hover:text-primary-deep hover:bg-secondary transition-colors"
                      aria-label="Delete blog post"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <p className="mt-5 text-foreground/80 leading-relaxed whitespace-pre-line">{post.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;