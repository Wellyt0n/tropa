import React from "react";
import { Card } from "@/components/ui/card";

const AdvantagesSection = () => {
  return (
    <section className="w-full bg-black py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-[#FF6B00] p-8 border-0">
          <div className="text-white">
            <h2 className="text-3xl font-bold text-center mb-8">
              Vantagens de assinar o plano
            </h2>
            <div className="space-y-4 text-lg">
              <p>✅ Acesso exclusivo a múltiplos monitores de ofertas</p>
              <p>✅ Promoções em tempo real antes de esgotarem</p>
              <p>✅ Alertas automáticos das melhores oportunidades</p>
              <p>✅ Produtos com preços reduzidos e cupons especiais</p>
              <p>✅ Economia garantida em suas compras online</p>
              <p>✅ Acesso a um grupo VIP com dicas e ofertas exclusivas</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AdvantagesSection;
