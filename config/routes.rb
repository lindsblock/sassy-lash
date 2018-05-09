Rails.application.routes.draw do
  namespace :api do
    #API routes
  end

  #NOTHING BELOW HERE
  get '*other', to: 'static#index'
end
