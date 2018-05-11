class Api::MailsController < ApplicationController
  def consent
    name = params[:name]
    phone = params[:phone]
    conditions = params[:conditions]
    ContactMailer.consent(name, phone, conditions).deliver
  end
end
