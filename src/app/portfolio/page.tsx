import Link from "next/link";

const PortfolioPage = () => {
  const galleryData = [
    {
      title: "Illustrations",
      imageUrl: "/illustration.png",
    },
    {
      title: "Websites",
      imageUrl: "/websites.jpg",
    },
    {
      title: "Applications",
      imageUrl: "/apps.jpg",
    },
  ];
  return (
    <div className="">
      <h1 className="texth1">Choose a gallery</h1>
      <div className="flex gap-10  text-white flex-wrap w-full max-md:flex-col max-md:items-center ">
        {galleryData.map((item, index) => {
          return (
            <Link
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: "cover",
              }}
              href={`/portfolio/${item.title.toLowerCase()}`}
              key={index}
              className="borderstyle hover:animate-hover-slow"
            >
              <span className="titleh1 texth1    ">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );    
};

export default PortfolioPage;
