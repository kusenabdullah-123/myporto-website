import Image from "next/image";
const PortoFolioHome = ({ portofolio, url }) => {
  return (
    <section
      id="portofolio"
      className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="text-lg font-semibold text-primary">Portfolio</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">
              Project Terbaru
            </h2>
            <p className="font-medium text-slate-500">
              Project Terbaru Yang Saya Buat
            </p>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          {portofolio.map((item, index) => {
            return (
              <div className="mb-12 p-4 md:w-1/2" key={index}>
                <div className="relative h-80 w-full overflow-hidden rounded-md shadow-sm">
                  <Image
                    priority
                    alt="Mountains"
                    src={`${url}api/images/${item.image}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="mt-7 mb-3 text-xl font-semibold text-dark dark:text-white">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PortoFolioHome;
