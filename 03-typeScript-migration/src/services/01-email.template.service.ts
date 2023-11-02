interface IEmailTemplate {
  firstName: string;
  lastName: string;
  orderId: number;
}
export const emailTemplate = (data: IEmailTemplate) => {
  const { firstName, lastName, orderId } = data;
  return `
        Dear ${firstName} ${lastName},
        
        Thank you for your recent order with us. Your order ID is ${orderId}.
        
        If you have any questions or concerns about your order, please don't hesitate to contact us.
        
        Best regards,
        Your Company Name
    `;
};
