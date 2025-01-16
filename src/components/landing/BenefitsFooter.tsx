import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Clock, RefreshCw } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard = ({
  title = "Benefit Title",
  description = "Benefit description goes here",
  icon = <Users className="h-6 w-6" />,
}: BenefitCardProps) => {
  return (
    <Card className="h-full bg-[#1E4007] border-0">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-[#FFD700] p-2 text-[#2B5C0F]">
            {icon}
          </div>
          <CardTitle className="text-lg text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};

interface BenefitsFooterProps {
  benefits?: BenefitCardProps[];
}

const BenefitsFooter = ({ benefits }: BenefitsFooterProps) => {
  const defaultBenefits = [
    {
      title: "Comunidade Exclusiva",
      description:
        "Faça parte de uma comunidade seleta de vendedores do Mercado Livre",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Acesso Imediato",
      description:
        "Comece sua jornada agora mesmo com acesso instantâneo a todos os recursos",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Pagamento Seguro",
      description:
        "Realize seus pagamentos com total segurança através de nossa plataforma",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "7 Dias de Garantia",
      description:
        "Garantia de satisfação ou seu dinheiro de volta em até 7 dias",
      icon: <RefreshCw className="h-6 w-6" />,
    },
  ];

  const displayBenefits = benefits || defaultBenefits;

  return (
    <footer className="w-full bg-[#2B5C0F] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayBenefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default BenefitsFooter;
