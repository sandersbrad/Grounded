json.array! @properties do |property|
  json.extract! property, *property.attributes.keys
  json.investors property.investors.count
  json.investments property.investments
end
