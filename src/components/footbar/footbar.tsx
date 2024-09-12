export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-7xl sm:text-5xl md:text-[10rem] font-bold mb-4">
          Excy Studio
        </h2>
        <p className="text-center text-sm my-10">
          Copyright © {new Date().getFullYear()} Excy Studio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
