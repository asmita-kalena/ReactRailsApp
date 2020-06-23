class ContactMailer < ActionMailer::Base
  default from: 'no-reply@gmail.com'
  layout 'mailer'
  
  def send_email(contact)
    @contact = contact
    mail to: "info@ajackus.com", subject: "New Message Recieved!"
  end
end
