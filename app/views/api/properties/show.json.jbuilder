json.extract! @property, *@property.attributes.keys

json.followers @property.followers, :id, :email
