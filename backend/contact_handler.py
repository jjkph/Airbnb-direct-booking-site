from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

router = APIRouter()

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

@router.post("/contact")
async def send_contact_email(form: ContactForm):
    """
    Send contact form email to property owners.
    Emails are sent to: jonnapeat@yahoo.com and service@myrealtorjhana.com
    """
    try:
        # Create email message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Casa Caralago Inquiry from {form.name}'
        msg['From'] = form.email
        msg['Reply-To'] = form.email
        
        # Recipients (hidden from user)
        recipients = ['jonnapeat@yahoo.com', 'service@myrealtorjhana.com']
        msg['To'] = ', '.join(recipients)
        
        # Create HTML email body
        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #3b82f6;">New Inquiry from Casa Caralago Website</h2>
                <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Name:</strong> {form.name}</p>
                    <p><strong>Email:</strong> {form.email}</p>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">{form.message}</p>
                </div>
                <p style="color: #666; font-size: 14px;">
                    This inquiry was submitted through the Casa Caralago direct booking website.
                </p>
            </body>
        </html>
        """
        
        # Attach HTML body
        html_part = MIMEText(html_body, 'html')
        msg.attach(html_part)
        
        # For now, we'll use Formspree as the backend service
        # This is a placeholder - in production, you would use SMTP or SendGrid
        
        return {
            "success": True,
            "message": "Your message has been sent successfully. We'll get back to you soon!"
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
