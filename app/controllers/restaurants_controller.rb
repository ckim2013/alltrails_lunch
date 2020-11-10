class RestaurantsController < ApplicationController
  def fetch
    p 'inside controller!'
    p params
    head(:ok)
  end
end
