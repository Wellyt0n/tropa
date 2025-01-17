import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Check } from "lucide-react";
import PaymentModal from "./PaymentModal";

interface PlanFeatureProps {
  text: string;
}

const PlanFeature = ({ text }: PlanFeatureProps) => (
  <div className="flex items-center gap-2">
    <Check className="h-4 w-4 text-[#3A5F0B]" />
    <span className="text-black/90">{text}</span>
  </div>
);

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  title = "Transforme Suas Vendas no Mercado Livre",
  subtitle = "Descubra oportunidades únicas de crescimento financeiro e torne-se um vendedor de sucesso na maior plataforma de e-commerce da América Latina",
}: HeroSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    title: string;
    price: string;
  } | null>(null);

  const handlePlanClick = (planTitle: string, planPrice: string) => {
    setSelectedPlan({ title: planTitle, price: planPrice });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-[600px] w-full bg-black flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-16">
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h1 className="logo-text text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-[#FFD700] mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Pricing Section */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#3A5F0B] text-[#FFD700] px-6 py-2 rounded-full mb-8">
            INVESTIMENTO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">
            Escolha o plano ideal para impulsionar seus resultados.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-4">
          {/* Mensal Plan */}
          <Card className="bg-white border-2 border-[#3A5F0B] p-8 relative overflow-hidden">
            <div className="inline-block bg-[#3A5F0B] text-[#FFD700] px-4 py-1 rounded-full mb-4">
              Plano Popular
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Mensal</h3>
            <div className="text-4xl font-bold text-[#3A5F0B] mb-4">
              R$ 15,00
            </div>
            <p className="text-black/80 mb-8">1 mês</p>
            <Button
              className="w-full bg-[#3A5F0B] hover:bg-[#4A7F0B] text-[#FFD700] hover:text-[#FFD700] font-bold mb-8"
              size="lg"
              onClick={() => handlePlanClick("Plano Mensal", "R$ 15,00")}
            >
              Junte-se agora!
            </Button>
            <div className="space-y-4">
              <PlanFeature text="Acesso aos monitores: Amazon, Casas Bahia, Loja do Mecânico, Magalu" />
              <PlanFeature text="Acesso a várias promoções filtradas" />
              <PlanFeature text="Acesso a extensão exclusiva do Mercado Livre" />
              <PlanFeature text="Área de membros" />
              <PlanFeature text="Muito mais" />
            </div>
          </Card>

          {/* Trimestral Plan */}
          <Card className="bg-white border-2 border-[#3A5F0B] p-8 relative overflow-hidden">
            <div className="inline-block bg-[#3A5F0B] text-[#FFD700] px-4 py-1 rounded-full mb-4 font-bold">
              Plano Recomendado
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">Trimestral</h3>
            <div className="text-4xl font-bold text-[#3A5F0B] mb-4">
              3x R$ 12,50
            </div>
            <p className="text-black/80 mb-8">3 meses</p>
            <Button
              className="w-full bg-[#3A5F0B] hover:bg-[#4A7F0B] text-[#FFD700] hover:text-[#FFD700] font-bold mb-8"
              size="lg"
              onClick={() => handlePlanClick("Plano Trimestral", "3x R$ 12,50")}
            >
              Junte-se agora!
            </Button>
            <div className="space-y-4">
              <PlanFeature text="Acesso aos monitores: Amazon, Casas Bahia, Loja do Mecânico, Magalu" />
              <PlanFeature text="Acesso a várias promoções filtradas" />
              <PlanFeature text="Acesso a extensão exclusiva do Mercado Livre" />
              <PlanFeature text="Área de membros" />
              <PlanFeature text="Muito mais" />
            </div>
          </Card>
        </div>
      </div>

      {selectedPlan && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          planTitle={selectedPlan.title}
          planPrice={selectedPlan.price}
        />
      )}
    </div>
  );
};

export default HeroSection;
