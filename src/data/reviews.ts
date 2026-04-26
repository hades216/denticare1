export type Review = {
  name: string;
  text: string;
  when: string;
  rating: number;
  meta?: string;
  badge?: string;
};

export const clinicReviews: Review[] = [
  {
    name: "Muhammad Hamza",
    meta: "3 reviews",
    when: "3 days ago",
    badge: "New",
    rating: 5,
    text: "I had a great experience. Dr Omer & his wife, both are professional doctors. Highly recommended.",
  },
  {
    name: "Irum Gilani",
    when: "7 months ago",
    rating: 5,
    text: "My experience with Dr Omar has been very good. He is an expert dental surgeon with ethical behaviour which is rare combination. Dr Omar made every effort to make my experience comfortable and satisfying. I strongly recommend him.",
  },
  {
    name: "Ghazal Zaman",
    when: "9 months ago",
    rating: 5,
    text: "I got my scaling, filling and extractions done from Denticare and the experience has been amazing! The clinic is super clean, and the doctor is very skilled, professional and gentle. Highly recommend!",
  },
  {
    name: "Hamza Qaiser",
    when: "9 months ago",
    rating: 5,
    text: "My overall experience with Denticare has been excellent. Dr. Omer is extremely humble and cooperative — truly one of the best! I didn't feel any pain even after my extractions. Highly recommended!",
  },
  {
    name: "Sana Ahmed",
    when: "5 months ago",
    rating: 5,
    text: "Beautiful clinic and very modern equipment. Dr. Omer explained every step before starting. My whitening results are amazing — couldn't be happier!",
  },
  {
    name: "Bilal Khan",
    when: "4 months ago",
    rating: 5,
    text: "Got my crown done here. The fit and finish are perfect, and the team is genuinely caring. Worth every rupee.",
  },
  {
    name: "Ayesha Malik",
    when: "3 months ago",
    rating: 5,
    text: "Took my daughter for her first dental visit. The staff was so gentle and patient with her. Highly recommended for kids too!",
  },
];