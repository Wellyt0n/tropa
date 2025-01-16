import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Check } from "lucide-react";

interface PlanFeatureProps {
  text: string;
}

const PlanFeature = ({ text }: PlanFeatureProps) => (
  <div className="flex items-center gap-2">
    <Check className="h-4 w-4 text-[#FFD700]" />
    <span className="text-gray-300">{text}</span>
  </div>
);

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Transforme Suas Vendas no Mercado Livre",
  subtitle = "Descubra oportunidades únicas de crescimento financeiro e torne-se um vendedor de sucesso na maior plataforma de e-commerce da América Latina",
  ctaText = "Junte-se agora!",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <div className="min-h-[600px] w-full bg-[#2B5C0F] flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-16">
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Pricing Section */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#1E4007] text-white px-6 py-2 rounded-full mb-8">
            INVESTIMENTO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Escolha o plano ideal para impulsionar seus resultados.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-4">
          {/* Mensal Plan */}
          <Card className="bg-[#1E4007] border-0 p-8 relative overflow-hidden">
            <div className="inline-block bg-[#2B5C0F] text-white px-4 py-1 rounded-full mb-4">
              Plano Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Mensal</h3>
            <div className="text-4xl font-bold text-white mb-4">R$ 15,00</div>
            <p className="text-gray-400 mb-8">1 mês</p>
            <Button
              className="w-full bg-[#FFD700] hover:bg-[#FFC000] text-[#2B5C0F] hover:text-[#2B5C0F] font-bold mb-8"
              size="lg"
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
          <Card className="bg-[#1E4007] border-0 p-8 relative overflow-hidden">
            <div className="inline-block bg-[#FFD700] text-[#2B5C0F] px-4 py-1 rounded-full mb-4 font-bold">
              Plano Recomendado
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Trimestral</h3>
            <div className="text-4xl font-bold text-white mb-4">
              3x R$ 12,50
            </div>
            <p className="text-gray-400 mb-8">3 meses</p>
            <Button
              className="w-full bg-[#FFD700] hover:bg-[#FFC000] text-[#2B5C0F] hover:text-[#2B5C0F] font-bold mb-8"
              size="lg"
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
    </div>
  );
};

export default HeroSection;
