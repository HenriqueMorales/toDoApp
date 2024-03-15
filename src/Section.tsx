const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="shadow-[#31363F] shadow-lg mt-10 max-w-[80%] lg:max-w-[900px] mx-auto p-4 rounded-md flex flex-col gap-2 bg-[#222831]">
      {children}
    </section>
  );
};

export default Section;
