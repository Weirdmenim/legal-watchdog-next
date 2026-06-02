import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="page-hero compact">
      <p className="eyebrow">404</p>
      <h1>That page is not available.</h1>
      <p>Return to the homepage or book a demo to discuss Legal WatchDog.</p>
      <ButtonLink href="/">Go Home</ButtonLink>
    </section>
  );
}
