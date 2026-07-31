export default function EnrollmentSuccessPage() {
  return (
    <main className="min-h-screen bg-black-hero px-5 py-16 text-text-light">
      <div className="mx-auto max-w-2xl rounded-3xl border border-gold-base/30 bg-black-card/80 p-8 text-center shadow-2xl md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-highlight">
          Enrollment received
        </p>
        <h1 className="mt-4 text-4xl font-bold">You are all set.</h1>
        <p className="mt-6 text-lg leading-8 text-text-mid">
          Your payment method was submitted securely. BrightPath will confirm your campaign enrollment and billing schedule with you directly.
        </p>
        <a href="https://bpmobilebillboards.com" className="luxury-button mt-10 inline-block">
          Return to BrightPath
        </a>
      </div>
    </main>
  );
}
