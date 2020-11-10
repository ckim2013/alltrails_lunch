class GooglePlacesApi
  LAT = 37.76990128158148
  LNG = -122.44434326464842
  IMAGE_MAX_WIDTH = 800

  def initialize
    @client = GooglePlaces::Client.new(Rails.application.credentials.google[:maps_api_key])
  end

  def fetch(query:)
    spots = @client.spots(
      LAT,
      LNG,
      name: query,
      types: 'restaurant'
    )

    spots.map do |spot|
      {
        icon: spot.icon,
        image_url: spot.photos[0].fetch_url(IMAGE_MAX_WIDTH),
        name: spot.name,
        price_level: spot.price_level,
        rating: spot.rating
      }
    end
  end
end
