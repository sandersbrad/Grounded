json.array! @properties do |property|
  json.extract! property, *property.attributes.keys
  json.investors property.investors.count
  if current_user
    json.current_user_follow current_user.follows.find_by(property_id: property.id)
    json.current_user_invested current_user.investments.find_by(property_id: property.id)
  end

  json.images do
    json.array! property.images do |image|
      json.id image.id
      json.image_url image.image_url
      json.property_id image.property_id
      json.thumb_url image.thumb_url
    end
  end

  json.zestimate property.zestimate
  json.zindexvalue property.zindexvalue
  json.areatype property.areatype

  json.investments property.investments
end
