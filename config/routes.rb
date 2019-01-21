Rails.application.routes.draw do

  get 'user', to: 'user_info#index'
  get 'results', to: 'search_results#index'
 
  post 'account', to: 'accounts#update'
end



