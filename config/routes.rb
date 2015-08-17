Rails.application.routes.draw do
  root to: "static_pages#index"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  get '/home', to: 'static_pages#root'

  namespace :api do
    resources :users, only: :show, defaults: { format: :json }
    get 'properties/followed', to: 'properties#followed', defaults: { format: :json }
    get 'properties/invested', to: 'properties#invested', defaults: { format: :json }
    get 'properties/zillow_search', to: 'properties#zillow_search'
    resources :properties, only: [:index, :show], defaults: { format: :json }
    resources :follows, only: [:create, :destroy], defaults: { format: :json }
    resources :investments, only: [:create, :destroy], defaults: { format: :json }
    resources :images, only: [:create, :destroy], defaults: { format: :json }
  end

end
