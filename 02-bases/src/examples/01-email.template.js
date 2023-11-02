export const emailTemplate = (firstName, lastName, orderId) => {
  return `
        Dear ${firstName} ${lastName},
        
        Thank you for your recent order with us. Your order ID is ${orderId}.
        
        If you have any questions or concerns about your order, please don't hesitate to contact us.
        
        Best regards,
        Your Company Name
    `;
};
