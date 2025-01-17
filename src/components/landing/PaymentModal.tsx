import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2 } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planTitle: string;
  planPrice: string;
}

const PaymentModal = ({
  isOpen,
  onClose,
  planTitle,
  planPrice,
}: PaymentModalProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    paymentMethod: "pix",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePaymentMethodChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://apipagamentostropa.squareweb.app/create-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            plan: planTitle,
            amount: parseFloat(planPrice.replace("R$ ", "").replace(",", ".")),
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        if (formData.paymentMethod === "pix") {
          // Open PIX payment in new window
          window.open(data.init_point, "_blank");
        } else {
          // Redirect to credit card payment
          window.location.href = data.init_point;
        }
        onClose();
      } else {
        throw new Error(data.message || "Erro ao processar pagamento");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Erro ao processar pagamento. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black text-white">
        <DialogHeader>
          <DialogTitle>Complete seu cadastro - {planTitle}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                required
                value={formData.cpf}
                onChange={handleInputChange}
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label>Forma de Pagamento</Label>
            <RadioGroup
              value={formData.paymentMethod}
              onValueChange={handlePaymentMethodChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pix" id="pix" />
                <Label htmlFor="pix">PIX</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Cartão de Crédito</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3A5F0B] hover:bg-[#4A7F0B] text-[#FFD700] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processando...
                </>
              ) : (
                `Finalizar Compra - ${planPrice}`
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
