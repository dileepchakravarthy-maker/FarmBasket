export const WHATSAPP_NUMBER = "919177518695";

export const getWhatsAppLink = (message = "Hi, I want to order fresh vegetables") => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const getCartWhatsAppLink = (cartItems) => {
  if (!cartItems || cartItems.length === 0) {
    return getWhatsAppLink("Hi, I want to order fresh vegetables.");
  }

  let message = "Hi Farm Basket! I would like to order the following fresh items:\n\n";
  
  cartItems.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (Qty: ${item.quantity})\n`;
  });

  message += "\nPlease let me know the total price and delivery details. Thanks!";
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
