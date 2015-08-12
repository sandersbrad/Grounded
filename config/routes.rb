Rails.application.routes.draw do
  root to: "static_pages#index"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api do
    resources :users, only: :show, defaults: { format: :json }
    resources :properties, only: [:index, :show], defaults: { format: :json }
    resources :follows, only: [:create, :destroy], defaults: { format: :json }
    resources :investments, only: [:create, :destroy], defaults: { format: :json }
  end

end
