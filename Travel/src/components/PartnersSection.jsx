const partners = [
  { name: "axon", text: "axon" },
  { name: "Jetstar", text: "Jetstar✈" },
  { name: "Expedia", text: "◆Expedia" },
  { name: "Qantas", text: "✦QANTAS" },
  { name: "Alitalia", text: "Alitalia" },
];

const PartnersSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-16 opacity-60">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="text-base sm:text-xl md:text-2xl font-bold text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
            >
              {partner.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;