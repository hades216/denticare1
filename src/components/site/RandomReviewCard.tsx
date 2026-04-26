import { useEffect, useState } from "react";
import { Sparkles, Star } from "lucide-react";
import { clinicReviews, type Review } from "@/data/reviews";

const LAST_REVIEW_KEY = "denticare_last_random_review";

const pickRandomReview = () => {
  const lastIndex = Number(localStorage.getItem(LAST_REVIEW_KEY));
  const pool = clinicReviews.length > 1
    ? clinicReviews.map((review, index) => ({ review, index })).filter(({ index }) => index !== lastIndex)
    : clinicReviews.map((review, index) => ({ review, index }));
  const selected = pool[Math.floor(Math.random() * pool.length)] ?? { review: clinicReviews[0], index: 0 };
  localStorage.setItem(LAST_REVIEW_KEY, String(selected.index));
  return selected.review;
};

const RandomReviewCard = () => {
  const [review, setReview] = useState<Review>(clinicReviews[0]);

  useEffect(() => {
    setReview(pickRandomReview());
  }, []);

  return (
    <div className="glass rounded-3xl p-8 shadow-elegant float-anim">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-hero-gradient grid place-items-center text-primary-foreground shadow-elegant">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <div className="font-display text-xl font-semibold text-primary-deep">
            Denticare Clinic
          </div>
          <div className="text-xs text-muted-foreground">Premium Dental Care</div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
        <span className="ml-1 text-sm font-semibold text-primary-deep">4.7</span>
        <span className="text-xs text-muted-foreground">· 30 Google Reviews</span>
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed">"{review.text}"</p>
      <p className="text-xs text-muted-foreground mt-2">— {review.name}</p>
    </div>
  );
};

export default RandomReviewCard;