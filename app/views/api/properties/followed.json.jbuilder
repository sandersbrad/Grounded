json.array! @properties do |property|
  json.extract! property, *property.attributes.keys
  json.investors property.investors.count
  json.investments do
    json.total_confirmed property.investments.where(pending:false).sum(:percentage)
    json.total_pending property.investments.where(pending:true, initial: false).sum(:percentage)
    json.total_overall property.investments.sum(:percentage)
  end
end
