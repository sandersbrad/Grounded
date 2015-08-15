json.array! @properties do |property|
  json.extract! property, *property.attributes.keys
  json.investors property.investors.count
  if current_user
    json.current_user_follow current_user.follows.find_by(property_id: property.id)
    json.current_user_invested current_user.investments.find_by(property_id: property.id)
  end
end
