class RestaurantsController < ApplicationController
  def fetch
    client = GooglePlacesApi.new
    places = client.fetch(query: params[:query])
    render json: { places: places }
  rescue
    render json: { error: 'Something went wrong!' }, status: 422
  end
end
