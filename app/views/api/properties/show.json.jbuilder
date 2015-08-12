json.extract! @property, *@property.attributes.keys

if current_user
  json.current_user_follow current_user.follows.find_by(property_id: @property.id)
end

json.followers @property.followers, :id, :email
