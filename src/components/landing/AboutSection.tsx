import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Quem Somos
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                A Tropa do ML é uma iniciativa dedicada a proporcionar as
                melhores oportunidades de compras para seus membros. Com foco no
                monitoramento contínuo de diversos sites e plataformas de
                e-commerce, a Tropa identifica as promoções mais vantajosas e
                ofertas exclusivas, garantindo que os usuários tenham acesso
                rápido e eficiente a produtos com preços imbatíveis.
              </p>
              <p className="text-lg text-gray-300">
                Além disso, a comunidade da Tropa do ML busca criar um ambiente
                colaborativo onde dicas, alertas e informações sobre promoções
                são compartilhadas, maximizando o benefício para todos os
                participantes.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Tropa do ML Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
