import React, { useEffect } from "react";

export const Payment = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js";
    script.setAttribute("data-preference-id", "283091124");
    script.setAttribute("data-button-label", "Pagar com Mercado Pago");
    document.getElementById("btn-checkout").appendChild(script);
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Pagamento</h2>
        <div id="btn-checkout"></div>
      </div>
    </div>
  );
};
