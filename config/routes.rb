Rails.application.routes.draw do
  devise_for :accounts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #dashboard
  get "/dashboard" => "accounts#index"
  get "profile/:username" => "accounts#profile", as: :profile

  resources :posts, only: [:new,:show,:create]
  root to: "public#homepage"

  get '/user' => "accounts#index", :as => :user_root
end
