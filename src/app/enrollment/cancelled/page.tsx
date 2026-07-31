export default function EnrollmentCancelledPage() {
  return (
    <main className="min-h-screen bg-black-hero px-5 py-16 text-text-light">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-black-card/80 p-8 text-center shadow-2xl md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-highlight">
          Enrollment paused
        </p>
        <h1 className="mt-4 text-4xl font-bold">No changes were made.</h1>
        <p className="mt-6 text-lg leading-8 text-text-mid">
          Your enrollment was not completed and no payment method was saved. You can return whenever you are ready.
        </p>
        <a href="/enrollment" className="luxury-button mt-10 inline-block">
          Return to enrollment
        </a>
      </div>
    </main>
  );
}
