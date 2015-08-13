json.array! @properties do |property|
  json.extract! property, *property.attributes.keys
end
