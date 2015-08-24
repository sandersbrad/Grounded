json.extract! @property, *@property.attributes.keys
# json.extract! @zillow, *@zillow.attributes.keys
json.zillow_chart @property.get_zillow_chart

if current_user
  json.current_user_follow current_user.follows.find_by(property_id: @property.id)
end

json.zestimate @response["zestimate"]["amount"]["__content__"]
json.zindexvalue @response["localRealEstate"]["region"]["zindexValue"]
json.area @response["localRealEstate"]["region"]["name"]
json.areatype @response["localRealEstate"]["region"]["type"]
json.property_type @response["useCode"]
json.num_baths @response["bathrooms"]

json.images do
  json.array! @property.images do |image|
    json.id image.id
    json.image_url image.image_url
    json.property_id image.property_id
    json.thumb_url image.thumb_url
  end
end

json.followers @property.followers, :id, :email

json.investments @property.investments
