class ContactMailer < ApplicationMailer

  def consent(name, phone, conditions)
    @name = name
    @phone = phone
    @conditions = conditions
    mail to: ENV['EMAIL'], subject: 'Consent Form'
  end
end
