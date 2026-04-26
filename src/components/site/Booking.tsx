import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CalendarCheck, Clock, MapPin, Phone, CheckCircle2 } from "lucide-react";

const services = [
  "Teeth Whitening",
  "Dental Implants",
  "Veneers",
  "Crowns & Bridges",
  "Root Canal Treatment",
  "Scaling & Polishing",
  "Permanent Fillings",
  "Braces & Orthodontics",
  "Children Dentistry",
  "General Consultation",
];

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Appointment requested!", {
      description: `We'll confirm your ${form.service} on ${form.date} at ${form.time} shortly.`,
    });
  };

  return (
    <section id="book" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 animate-fade-in-up">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Book Appointment
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-3 text-primary-deep">
              Schedule Your <span className="text-gradient">Visit</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fill the form and we'll confirm your appointment shortly. Walk-ins
              also welcome during clinic hours.
            </p>

            <div className="mt-8 space-y-4">
              <InfoCard icon={MapPin} title="Visit Us" text="Options Arcade, Main Road, PWD, Islamabad, 44000" />
              <InfoCard icon={Phone} title="Call Us" text="0333 5299143" href="tel:+923335299143" />
              <div className="p-5 rounded-2xl bg-card-gradient border border-border/60 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-hero-gradient grid place-items-center text-primary-foreground flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-primary-deep">Opening Hours</div>
                    <ul className="mt-3 space-y-1.5 text-sm">
                      {[
                        ["Monday", "5:00 – 8:30 PM"],
                        ["Tuesday", "5:00 – 8:30 PM"],
                        ["Wednesday", "5:00 – 8:30 PM"],
                        ["Thursday", "5:00 – 8:30 PM"],
                        ["Friday", "5:00 – 8:30 PM"],
                        ["Saturday", "5:00 – 8:30 PM"],
                        ["Sunday", "Closed"],
                      ].map(([day, time]) => (
                        <li key={day} className="flex justify-between gap-4">
                          <span className="text-muted-foreground">{day}</span>
                          <span className={time === "Closed" ? "text-accent font-semibold" : "text-primary-deep font-medium"}>{time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 animate-scale-in">
            <div className="relative bg-card-gradient rounded-3xl p-8 lg:p-10 border border-border/60 shadow-elegant">
              <div className="absolute -inset-1 bg-hero-gradient rounded-3xl blur-2xl opacity-20 -z-10" />

              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 mx-auto rounded-full bg-hero-gradient grid place-items-center text-primary-foreground shadow-elegant mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-primary-deep">
                    Request Received!
                  </h3>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                    Thank you, {form.name}. Our team will call you on{" "}
                    <span className="font-semibold text-primary-deep">{form.phone}</span>{" "}
                    shortly to confirm your appointment for{" "}
                    <span className="font-semibold text-primary-deep">{form.service}</span> on{" "}
                    <span className="font-semibold text-primary-deep">
                      {form.date} at {form.time}
                    </span>.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "", phone: "", email: "", service: "",
                        date: "", time: "", notes: "",
                      });
                    }}
                  >
                    Book Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name *">
                      <Input
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </Field>
                    <Field label="Phone Number *">
                      <Input
                        required
                        type="tel"
                        placeholder="03XX XXXXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </Field>
                  </div>

                  <Field label="Email (optional)">
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </Field>

                  <Field label="Service *">
                    <Select
                      value={form.service}
                      onValueChange={(v) => setForm({ ...form, service: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Preferred Date *">
                      <Input
                        required
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                      />
                    </Field>
                    <Field label="Preferred Time *">
                      <Select
                        value={form.time}
                        onValueChange={(v) => setForm({ ...form, time: v })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"].map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field label="Notes (optional)">
                    <Textarea
                      placeholder="Tell us briefly about your concern..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      rows={3}
                    />
                  </Field>

                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    <CalendarCheck className="w-5 h-5" />
                    Confirm Appointment
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By booking, you agree to be contacted at the number provided.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <Label className="mb-2 block text-sm font-medium text-primary-deep">{label}</Label>
    {children}
  </div>
);

const InfoCard = ({
  icon: Icon,
  title,
  text,
  href,
}: {
  icon: any;
  title: string;
  text: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-card-gradient border border-border/60 shadow-soft hover:shadow-elegant transition-all">
      <div className="w-12 h-12 rounded-xl bg-hero-gradient grid place-items-center text-primary-foreground flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="font-semibold text-primary-deep">{title}</div>
        <div className="text-sm text-muted-foreground mt-1">{text}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
};

export default Booking;