class GooglePlacesApi
  LAT = 37.76990128158148
  LNG = -122.44434326464842
  IMAGE_MAX_WIDTH = 800
  METERS = 8000

  def initialize
    @client = GooglePlaces::Client.new(Rails.application.credentials.google[:maps_api_key])
  end

  def fetch(query:)
    spots = @client.spots(
      LAT,
      LNG,
      name: query,
      radius: METERS,
      types: 'restaurant'
    )

    spots.map do |spot|
      {
        image_url: spot.photos[0].fetch_url(IMAGE_MAX_WIDTH),
        lat: spot.lat,
        lng: spot.lng,
        name: spot.name,
        price_level: spot.price_level,
        rating: spot.rating,
        reference: spot.reference
      }
    end
  end
end
