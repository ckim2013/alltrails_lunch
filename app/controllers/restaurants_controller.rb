class RestaurantsController < ApplicationController
  def fetch
    client = GooglePlacesApi.new
    results = client.fetch(query: params[:query])
    render json: results
  end
end
