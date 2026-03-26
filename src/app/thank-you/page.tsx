import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1601581987809-a874a81309c9?q=80&w=2400&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <section className="relative z-10 mx-auto max-w-3xl px-4 py-14 md:py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black mb-4">
            Thank You
          </h1>
          <p className="text-lg text-black/80 mb-2">
            Thank you. Your campaign request is in review.
          </p>
          <p className="text-base text-black/70 mb-2">
            We are already reviewing your submission and mapping the best next steps for your campaign.
          </p>
          <p className="text-base font-medium text-black/80 mb-8">
            Want to move faster? Call us now at{' '}
            <a href="tel:+17603858989" className="text-[#d18d00] hover:underline">(760) 385-8989</a>.
          </p>
          <Link
            href="/"
            className="inline-block rounded-2xl bg-[#d18d00] py-4 px-8 font-semibold text-black shadow-md hover:shadow-lg hover:bg-[#9a711a] active:scale-[0.99] transition-all duration-200 text-lg"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
