export default function CommunityWithImages() {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      title: "Power BI visual guides",
      desc: "Explore our Power BI custom visuals, designed to elevate your data storytelling and decision-making.",
      link: "View our visual guides >",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581090700227-4c4f50c8b1c3?q=80&w=1200",
      title: "Webinars",
      desc: "Join our experts for in-depth sessions on the latest innovations in data and analytics.",
      link: "Register here >",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
      title: "Best practice guides",
      desc: "Learn about the latest in the industry with our best practice guide blogs.",
      link: "Read our best practice guides >",
    },
  ];

  return (
    <section id="community" className="bg-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          Become a part of our community
        </h2>

        <p className="mt-4 max-w-2xl text-gray-600">
          Register for our upcoming webinars and view our newsletters
        </p>

        <div
          className="mt-12 grid gap-6 
                        grid-cols-1 
                        md:grid-cols-2 
                        xl:grid-cols-3"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>

                <p className="mb-6 text-sm text-gray-600">{card.desc}</p>

                <a
                  href="#"
                  className="text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
                >
                  {card.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
