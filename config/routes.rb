Rails.application.routes.draw do
  root 'home#index'

  get 'home', to: 'home#index', as: :home


    get 'submit_data', controller: :home



end
