import Image from "next/image";

const articles = [
  {
    id: 1,
    image: "/image-currency.jpg",
    by: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    body: "The world is getting smaller and we&apos;re becoming more mobile. So why should you be forced to only receive money in a single...",
    alt: "Illustration showing global currency exchange",
  },
  {
    id: 2,
    image: "/image-restaurant.jpg",
    by: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    body: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    alt: "Restaurant scene with meals on a table",
  },
  {
    id: 3,
    image: "/image-plane.jpg",
    by: "By Wilson Hutton",
    title: "Take your Digitalbank card wherever you go",
    body: "We want you to enjoy your travels. This is why we don&apos;t charge any fees on purchases while you&apos;re abroad. We&apos;ll even show you...",
    alt: "Airplane flying during sunset",
  },
  {
    id: 4,
    image: "/image-confetti.jpg",
    by: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    body: "After a lot of hard work by the whole team, we&apos;re excited to launch our closed beta. It&apos;s easy to request an invite through the site...",
    alt: "Confetti falling in celebration",
  },
];

export default function LatestArticles() {
  return (
    <section
      aria-labelledby="latest-articles-title"
      className="flex flex-col items-center justify-center gap-10 px-6 py-16 md:gap-16 md:px-10 md:py-20 lg:items-start lg:gap-14 lg:px-12"
    >
      <h2
        id="latest-articles-title"
        className="text-center text-[2rem] leading-[120%] font-light tracking-[-0.5px] text-[#2D314D] md:text-[2.5rem] md:tracking-[-0.75px] lg:text-left"
      >
        Latest Articles
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <article
            key={article.id}
            className="flex h-full w-full max-w-[330px] flex-col rounded-md shadow-lg"
          >
            <Image
              src={article.image}
              alt={article.alt}
              width={328}
              height={200}
              loading="lazy"
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1024px) 50vw,
                     25vw"
              className="h-[200px] w-full rounded-t-md object-cover"
            />

            <div className="flex flex-col px-6 py-6">
              <p className="text-[10px] leading-[115%] text-[#9597A5]">
                {article.by}
              </p>

              <h3 className="my-4 text-base leading-[120%] font-light tracking-[-0.25px] text-[#2D314D] transition-colors duration-300 ease-in-out hover:text-[#30C88F]">
                {article.title}
              </h3>

              <p className="text-sm leading-[115%] text-[#9597A5]">
                {article.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
