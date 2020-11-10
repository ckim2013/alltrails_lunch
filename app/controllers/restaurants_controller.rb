class RestaurantsController < ApplicationController
  def fetch
    client = GooglePlacesApi.new
    places = client.fetch(query: params[:query])
    render json: { places: places }
  end
end
