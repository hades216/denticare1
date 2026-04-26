import { CheckCircle2 } from "lucide-react";
import clinic1 from "@/assets/clinic-1.png";
import clinic2 from "@/assets/clinic-2.png";
import clinic3 from "@/assets/clinic-3.png";

const points = [
  "State-of-the-art sterilization and modern equipment",
  "Comfortable, calming environment for anxious patients",
  "Transparent pricing and clear treatment plans",
  "PMDC verified specialist with 16+ years of experience",
];

const About = () => (
  <section id="about" className="relative py-24 lg:py-32 bg-soft-gradient">
    <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          <img
            src={clinic1}
            alt="Denticare treatment room"
            loading="lazy"
            className="rounded-2xl shadow-elegant aspect-[4/5] object-cover w-full"
          />
          <div className="flex flex-col gap-4 mt-8">
            <img
              src={clinic3}
              alt="Clinic waiting area"
              loading="lazy"
              className="rounded-2xl shadow-soft aspect-square object-cover w-full"
            />
            <img
              src={clinic2}
              alt="Reception"
              loading="lazy"
              className="rounded-2xl shadow-soft aspect-square object-cover w-full"
            />
          </div>
        </div>
        <div className="absolute -bottom-6 left-6 glass rounded-2xl px-6 py-4 shadow-elegant">
          <div className="font-display text-3xl font-semibold text-gradient">4.7★</div>
          <div className="text-xs text-muted-foreground">30+ Google Reviews</div>
        </div>
      </div>

      <div className="animate-fade-in-up">
        <span className="text-sm font-semibold tracking-widest text-primary uppercase">
          About Denticare
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-3 text-primary-deep">
          A Modern Clinic Built on{" "}
          <span className="text-gradient">Trust & Expertise</span>
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Denticare Dental Clinic in Islamabad is led by Asst. Prof. Dr. Muhammad
          Omer Siddiqui — a PMDC verified specialist dedicated to ethical,
          comfortable and world-class dental care. Whether you're here for a
          routine check-up or a complete smile makeover, you're in expert hands.
        </p>

        <ul className="mt-8 space-y-4">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;