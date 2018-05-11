Rails.application.routes.draw do
  namespace :api do
    post 'mails/consent', to: 'mails#consent'
  end

  #NOTHING BELOW HERE
  get '*other', to: 'static#index'
end
